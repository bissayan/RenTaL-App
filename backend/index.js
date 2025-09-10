const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./models/aUser.js');
const Place = require('./models/aPlace.js');
const Booking = require('./models/aBooking.js');

const CookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'fgosghvogKzsDkufburskgviLFkj';

const imageDownloader = require('image-downloader');
const bodyParser = require('body-parser');

const multer = require('multer');
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(CookieParser());
app.use(bodyParser.json());

// app.use('/uploads', express.static(__dirname+'/uploads'));
const uploadsPath = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsPath));
console.log('Serving uploads from:', uploadsPath);


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL,);

app.get('/test', (req, res) => {
    res.json('test Yup');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userdoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userdoc);
    } catch (e) {
        res.status(422).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userdoc = await User.findOne({ email });
    if (userdoc) {
        const passOk = bcrypt.compareSync(password, userdoc.password);
        if (passOk) {
            jwt.sign({ email: userdoc.email, id: userdoc._id }, jwtSecret, {}, (err, token) => {
                if (err) return res.status(500).json({ error: 'Internal Server Error' });
                res.cookie('token', token).json(userdoc);
            });
        } else {
            res.status(422).json('pass not');
        }
    } else {
        res.status(404).json('not found');
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userdata) => {
            if (err) return res.status(401).json({ error: 'Unauthorized' });
            const { name, email, _id } = await User.findById(userdata.id);
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
});

app.post('/logout', (req,res) => {
    res.cookie('token','').json(true);
})

// app.post('/upload-by-link', async (req, res) => {
//   const { link } = req.body;
//   const newName = Date.now() + '.jpg';
  
//     await imageDownloader.image({
//       url: link,
//       dest: __dirname + '/uploads/' + newName,
//     });
//     res.json(newName);
//   });

app.post('/upload-by-link', async (req, res) => {
  const { link } = req.body;
  const newName = Date.now() + '.jpg';
  console.log('Downloading:', link);
  try {
    await imageDownloader.image({
      url: link,
      dest: __dirname + '/uploads/' + newName,
    });
    console.log('Saved as:', newName);
    res.json(newName);
  } catch (err) {
    console.error('Download failed', err);
    res.status(500).json({ error: 'Download failed' });
  }
});


// const photosMiddleware = multer({ dest: 'uploads/' });

// app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
app.post('/upload', (req, res) => {
  const uploadedFiles = [];

  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;

    fs.renameSync(path, newPath);
    // uploadedFiles.push(newPath.replace('uploads/', ''));
    uploadedFiles.push('/uploads/' + newPath.split('/').pop());

  }

  res.json(uploadedFiles);
});


app.post('/places', (req, res) => {
  const { token } = req.cookies;
  const {title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests,} = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    const placeDoc = await Place.create({
      owner: userData.id, title, address, photos:addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, });

    res.json(placeDoc);
  });
});


// app.get('/places', (req, res) => {
//     const { token } = req.cookies;
//     jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//         const { id } = userData;
//         res.json(await Place.find({ owner: id }));
//     });
// });


app.get('/places', (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err || !userData) {
      return res.status(401).json({ error: 'Unauthorized' }); // ✅ return early on invalid token
    }

    const { id } = userData;
    const places = await Place.find({ owner: id });
    res.json(places);
  });
});



app.get('/places/:id', async (req, res) => {
  const { id } = req.params;  // Extracts 'id' from the URL
  res.json(await Place.findById(id));  // Fetches place by ID
});


app.put('/places', async (req, res) => {
  const { token } = req.cookies;
  const {
    id, title, address, addedPhotos, description,
    perks, extraInfo, checkIn, checkOut, maxGuests
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const placeDoc = await Place.findById(id);
    if (userData.id === placeDoc.owner.toString()) {
      placeDoc.set({
        title,
        address,
        photos: addedPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
      });
      await placeDoc.save();
      res.json('ok');
    }
  });
});


app.get('/places', async (req, res) => {
  res.json( await Place.find() );
})




function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}




app.post('/bookings', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const userData = await getUserDataFromReq(req);
  const {
    place,checkIn,checkOut,numberOfGuests,name,phone,price,
  } = req.body;
  Booking.create({
    place,checkIn,checkOut,numberOfGuests,name,phone,price,
    user:userData.id,
  }).then((doc) => {
    res.json(doc);
  }).catch((err) => {
    throw err;
  });
});

app.get('/bookings', async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  const userData = await getUserDataFromReq(req);
  res.json( await Booking.find({user:userData.id}).populate('place') );
});


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
