import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="inline-flex items-center gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to={'/account/places/new'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4.5a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6v-6a1 1 0 011-1z"
            />
          </svg>
          Add new place
        </Link>
      </div>

      <div className="mt-4">
        {places.length > 0 && places.map((place) => (
          <Link
            to={`/account/places/${place._id}`}
            className="flex gap-4 bg-gray-200 p-4 rounded-2xl mb-4"
            key={place._id}
          >
            <div className="w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <PlaceImg place={place} className="w-full h-full object-cover" />
            </div>
            <div className="grow-0 shrink">
              <h2 className="text-xl font-semibold">{place.title}</h2>
              <p className="text-sm mt-2 text-gray-700">{place.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}




























// import { Link } from "react-router-dom";
// import AccountNav from "../AccountNav";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function PlacesPage() {
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     axios.get('/places').then(({ data }) => {
//       setPlaces(data);
//     });
//   }, []);

//   return (
//     <div>
//       <AccountNav />
//       <div className="text-center">
//         <Link
//           className="inline-flex items-center gap-1 bg-primary text-white py-2 px-6 rounded-full"
//           to={'/account/places/new'}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M12 4.5a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6v-6a1 1 0 011-1z"
//             />
//           </svg>
//           Add new place
//         </Link>
//       </div>
//           <div className="mt-4">
//             {/* {places.length > 0 && places.map(place => (
//               <Link to={'/account/places/' + place._id} className="flex gap-4 bg-gray-200 p-4 rounded-2xl">
//                 <div className="w-32 h-32 bg-gray-300 grow shrink-0">
//                   {place.photos.length > 0 && (
//                     <img src={place.photos[0]} alt="" />
//                   )}
//                 </div>
//                 <div className="grow-0 shrink">
//                   <h2 className="text-xl">{place.title}</h2>
//                   <p className="text-sm mt-2">{place.description}</p> */}

                  


//                 </div>
//               </Link>
//             ))}
//           </div>
//     </div>
//   );
// }
















// // import { Link, useParams } from "react-router-dom";
// // // import { useState } from "react";
// // // import axios from "axios";
// // // import { Navigate } from 'react-router-dom';

// // // import Perks from '/src/Perks'; // adjust the path if needed
// // // import PhotosUploader from "../PhotosUploader";
// // // import PlacesFormPage from "./PlacesFormPage";
// // import AccountNav from "../AccountNav";
// // import { useEffect } from "react";

// // export default function PlacesPage() {
// //   // const { action } = useParams(); // Get route parameter

// //   // function linkClasses(type=null){
// //   //       let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
// //   //       if (type === false ){
// //   //           classes += ' bg-primary text-white ';
// //   //       }
// //   //       else {
// //   //           classes += ' bg-gray-200';
// //   //       }
// //   //       return classes;
// //   //    }

// //   const [places, setPlaces] = useState([]);
// //   useEffect(() => {
// //     axios.get('/places').then(({ data }) => {
// //       setPlaces(data);
// //     });
// //   }, []);
  

// //   return (
// //     <div>
// //       < AccountNav />
// //       {/* {action !== 'new' && ( */}
// //         <div className="text-center">
// //           <Link
// //             className="inline-flex items-center gap-1 bg-primary text-white py-2 px-6 rounded-full"
// //             to={'/account/places/new'}
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               viewBox="0 0 24 24"
// //               fill="currentColor"
// //               className="w-6 h-6"
// //             >
// //               <path
// //                 fillRule="evenodd"
// //                 clipRule="evenodd"
// //                 d="M12 4.5a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6v-6a1 1 0 011-1z"
// //               />
// //             </svg>
// //             Add new place
// //           </Link>
// //         </div>
// //       {/* )} */}

// //       {/* {action === 'new' && (

// //             < PlacesFormPage /> )} */}
// //     </div>
// //   );
// // }





//   // const [redirect, setRedirect] = useState('');


//   // const [title, setTitle] = useState('');
//   // const [address, setAddress] = useState('');

//   // const [photoLink, setPhotoLink] = useState('');
//   // const [addedPhotos, setAddedPhotos] = useState([]);
  
//   // const [description, setDescription] = useState('');
//   // const [perks, setPerks] = useState([]);
//   // const [extraInfo, setExtraInfo] = useState('');
//   // const [checkIn, setCheckIn] = useState('');
//   // const [checkOut, setCheckOut] = useState('');
//   // const [maxGuests, setMaxGuests] = useState(1);

// //   function inputHeader(text) {
// //     return <h2 className="text-2xl mt-4">{text}</h2>;
// //   }

// //   function inputDescription(text) {
// //     return <p className="text-gray-500 text-sm">{text}</p>;
// //   }

// //   function preInput(header, description) {
// //     return (
// //       <>
// //         {inputHeader(header)}
// //         {inputDescription(description)}
// //       </>
// //     );
// //   }

// // //   async function addPhotoByLink(ev) {
// // //   ev.preventDefault();
// // //   const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });
// // //   setAddedPhotos(prev => [...prev, filename]);
// // //   setPhotoLink('');
// // // }



// // // function uploadPhoto(ev) {
// // //   const files = ev.target.files;
// // //   const data = new FormData();

// // //   for (let i = 0; i < files.length; i++) {
// // //     data.append('photos', files[i]);  // ✅ append for multiple files
// // //   }

// // //   axios.post('/upload', data, {
// // //     headers: { 'Content-Type': 'multipart/form-data' },
// // //   }).then(response => {
// // //     const { data: filenames } = response;
// // //     setAddedPhotos(prev => [...prev, ...filenames]); // ✅ spread for multiple
// // //   });
// // // }

// // async function AddNewPlace(ev) {
// //   ev.preventDefault();  
// //   await axios.post('/places', {
// //     title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests,
// //   });
// //   setRedirect('/account/places');
// // }

// // if (redirect) {
// //   return <Navigate to={redirect} />;
// // }



//   // return (
//   //   <div>
//   //     {action !== 'new' && (
//   //       <div className="text-center">
//   //         <Link
//   //           className="inline-flex items-center gap-1 bg-primary text-white py-2 px-6 rounded-full"
//   //           to={'/account/places/new'}
//   //         >
//   //           <svg
//   //             xmlns="http://www.w3.org/2000/svg"
//   //             viewBox="0 0 24 24"
//   //             fill="currentColor"
//   //             className="w-6 h-6"
//   //           >
//   //             <path
//   //               fillRule="evenodd"
//   //               clipRule="evenodd"
//   //               d="M12 4.5a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6v-6a1 1 0 011-1z"
//   //             />
//   //           </svg>
//   //           Add new place
//   //         </Link>
//   //       </div>
//   //     )}

//   //     {action === 'new' && (
// //         <div>
// //           <form onSubmit={AddNewPlace}>
// //             {preInput('Title', 'Title for your place.')}
// //             <input
// //               type="text"
// //               value={title}
// //               onChange={ev => setTitle(ev.target.value)}
// //               placeholder="Title, for example: My lovely ..."
// //               className="w-full p-2 border rounded-md"
// //             />

// //             {preInput('Address', 'Address to this place')}
// //             <input
// //               type="text"
// //               value={address}
// //               onChange={ev => setAddress(ev.target.value)}
// //               placeholder="Address"
// //               className="w-full p-2 border rounded-md"
// //             />

// //             {preInput('Photos', 'More = better')}
// //             {
// //             <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

// // /* <div className="flex gap-2">
// //   <input
// //     type="text"
// //     value={photoLink}
// //     onChange={ev => setPhotoLink(ev.target.value)}
// //     placeholder="Add using a link ....jpg"
// //     className="flex-1 p-2 border rounded-md"
// //   />
// //   <button
// //     onClick={addPhotoByLink}
// //     className="bg-gray-200 px-4 rounded-2xl"
// //   >
// //     Add
// //   </button>
// // </div>

// // <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
// //   {addedPhotos.length > 0 && addedPhotos.map(link => (
// //     <div key={link}>
// //       <img
// //         src={'http://localhost:4000/uploads/'+link}
// //         alt=""
// //         className="rounded-2xl object-cover w-full"
// //       />
// //     </div>
// //   ))}

// //   <label
// //     htmlFor="uploadPhotos"
// //     className="cursor-pointer flex gap-2 justify-center items-center border bg-transparent rounded-2xl p-8 cursor-pointer"
// //   >
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       fill="none"
// //       viewBox="0 0 24 24"
// //       strokeWidth={1.5}
// //       stroke="currentColor"
// //       className="w-8 h-6"
// //     >
// //       <path
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
// //       />
// //     </svg>
// //     Upload
// //   </label>
// //   <input
// //     type="file"
// //     id="uploadPhotos"
// //     multiple
// //     className="hidden"
// //     onClick={uploadPhoto}
// //     // onChange={(ev) => {
// //     //   const files = ev.target.files;
// //     //   for (let i = 0; i < files.length; i++) {
// //     //     const reader = new FileReader();
// //     //     reader.onloadend = () => {
// //     //       setAddedPhotos(prev => [...prev, reader.result]);
// //     //     };
// //     //     reader.readAsDataURL(files[i]);
// //     //   }
// //     // }}
// //   />
// // </div> */}

// //             {preInput('Description', 'Description of the Place')}
// //             <textarea
// //               value={description}
// //               onChange={ev => setDescription(ev.target.value)}
// //               className="w-full p-2 border rounded-md"
// //             />

// //             {preInput('Perks', 'Select all the Perks of your Place')}
// //             <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
// //               <Perks selected={perks} onChange={setPerks} />
// //             </div>

// //             {preInput('Extra info', 'House rules, etc')}
// //             <textarea
// //               value={extraInfo}
// //               onChange={ev => setExtraInfo(ev.target.value)}
// //               className="w-full p-2 border rounded-md"
// //             />

// //             {preInput('Check in & out times', 'Add check-in and check-out times')}
// //             <div className="grid gap-2 sm:grid-cols-3">
// //               <div>
// //                 <h3 className="mt-2 -mb-1">Check in time</h3>
// //                 <input
// //                   type="text"
// //                   value={checkIn}
// //                   onChange={ev => setCheckIn(ev.target.value)}
// //                   placeholder="14:00"
// //                   className="w-full p-2 border rounded-md"
// //                 />
// //               </div>

// //               <div>
// //                 <h3 className="mt-2 -mb-1">Check out time</h3>
// //                 <input
// //                   type="text"
// //                   value={checkOut}
// //                   onChange={ev => setCheckOut(ev.target.value)}
// //                   placeholder="11:00"
// //                   className="w-full p-2 border rounded-md"
// //                 />
// //               </div>

// //               <div>
// //                 <h3 className="mt-2 -mb-1">Max guests</h3>
// //                 <input
// //                   type="number"
// //                   value={maxGuests}
// //                   onChange={ev => setMaxGuests(ev.target.value)}
// //                   className="w-full p-2 border rounded-md"
// //                 />
// //               </div>
// //             </div>

// //             <button className="bg-primary text-white px-6 py-2 rounded-full my-4">
// //               Save
// //             </button>

// //           </form>
// //         </div>
// //      < PlacesFormPage /> )}
// //     </div>
// //   );
// // }












































































// // import { Link, useParams } from "react-router-dom";

// // export default function PlacesPage() {
// //     const {action} = useParams();  // Get route parameter

// //     const [title, setTitle] = useState('');
// //     const [address, setAddress] = useState('');
// //     const [addedPhotos, setAddedPhotos] = useState([]);
// //     const [photoLink, setPhotoLink] = useState('');
// //     const [description, setDescription] = useState('');
// //     const [perks, setPerks] = useState([]);
// //     const [extraInfo, setExtraInfo] = useState('');
// //     const [checkIn, setCheckIn] = useState('');
// //     const [checkOut, setCheckOut] = useState('');
// //     const [maxGuests, setMaxGuests] = useState(1);

// //     console.log(action);

// //     function inputHeader(text) {
// //   return (
// //     <h2 className="text-2xl mt-4">{text}</h2>
// //   );
// // }

// // // Renders a styled description below the header
// // function inputDescription(text) {
// //   return (
// //     <p className="text-gray-500 text-sm">{text}</p>
// //   );
// // }

// // // Combines header and description as a form section title
// // function preInput(header, description) {
// //   return (
// //     <>
// //       {inputHeader(header)}
// //       {inputDescription(description)}
// //     </>
// //   );
// // }

// //     return (
// //         <div>
// //             {action !== 'new' && (
// //                 <div className="text-center">
// //                     <Link className="inline-flex items-center gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
// //                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
// //                             <path 
// //                                 fillRule="evenodd" 
// //                                 clipRule="evenodd" 
// //                                 d="M12 4.5a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6v-6a1 1 0 011-1z" 
// //                             />
// //                         </svg>
// //                         Add new place
// //                     </Link>
// //                 </div>
// //             )}

// //             {action === 'new' && (
// //                 <div>
// //                     <form>
// //                         {preInput('Title', 'Title for your place.')}
// //                         {/* <h2 className="text-2xl mt-4">Title</h2>
// //                         <p className="text-gray-500 text-sm">Title for your place.</p> */}
// //                         <input type="text" placeholder="Title, for example: My lovely ..." className="w-full p-2 border rounded-md" />
                        
// //                         {preInput('Address', 'Address to this place')}
// //                         {/* <h2 className="text-2xl mt-4">Address</h2>
// //                         <p className="text-gray-500 text-sm">Address to this place</p> */}
// //                         <input type="text" placeholder="Address" className="w-full p-2 border rounded-md" />

// //                         <h2 className="text-2xl mt-4">Photos</h2>
// //                         <p className="text-gray-500 text-sm">More = better</p>

// //                         <div className="flex gap-2">
// //                             <input type="text" placeholder="Add using a link ....jpg" className="flex-1 p-2 border rounded-md" />
// //                             <button className="bg-gray-200 px-4 rounded-2xl">Add</button>
// //                         </div>

// //                         <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
// //                             <button className="flex gap-2 justify-center items-center border bg-transparent rounded-2xl p-8">
// //                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
// //                                 </svg>
// //                                 Upload
// //                             </button>
// //                         </div>

// //                         <div>
// //                             <h2 className="text-2xl mt-4">Description</h2>
// //                             <p className="text-gray-500 text-sm">Description of the Place</p>
// //                             <textarea className="w-full p-2 border rounded-md" />
// //                         </div>

// //                         <h2 className="text-2xl mt-4">Perks</h2>
// //                             <p className="text-gray-500 text-sm">Select all the Perks of your Place</p>
// //                             <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
// //                                 <div>
// //                                     <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                    
// //                                     <input type="checkbox"/>
// //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
// //         </svg>                      <span>Wifi</span>
// //                                     </label>

// //                                     <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
// //                                     <input type="checkbox"/>
// //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
// //         </svg>                      <span>Free Parking</span>
// //                                     </label>

// //                                     <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
// //                                     <input type="checkbox"/>
// //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
// //         </svg>
// //                                     <span>TV</span>
// //                                     </label>
// //                                     <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
// //                                     <input type="checkbox"/>
// //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
// //   <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
// // </svg>                              <span>Pets</span>
// //                                     </label>

// //                                     <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
// //                                     <input type="checkbox"/>
// //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
// //         </svg>                      <span>Entrance</span>
// //                                     </label>

// //                                     <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
// //                                     <input type="checkbox"/>
// //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
// //         </svg>                      <span>Radio</span>
// //                                     </label>
// //                                 </div>
// //                         </div>

// //                         <div>
// //                             <h2 className="text-2xl mt-4">Extra info</h2>
// //                             <p className="text-gray-500 text-sm">House rules, etc</p>
// //                             <textarea className="w-full p-2 border rounded-md" />
// //                         </div>

// //                         <div>
// //                             <h2 className="text-2xl mt-4">Check in & out times</h2>
// //                             <p className="text-gray-500 text-sm">Add check-in and check-out times</p>
// //                             <div className="grid gap-2 sm:grid-cols-3">
// //                                 <div>
// //                                     <h3 className="mt-2 -mb-1">Check in time</h3>
// //                                     <input type="text" placeholder="14:00" className="w-full p-2 border rounded-md" />
// //                                 </div>

// //                                 <div>
// //                                     <h3 className="mt-2 -mb-1">Check out time</h3>
// //                                     <input type="text" placeholder="11:00" className="w-full p-2 border rounded-md" />
// //                                 </div>
// //                             </div>
// //                             <button className="bg-primary text-white px-6 py-2 rounded-full my-4">Save</button>
// //                         </div>
// //                     </form>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }
