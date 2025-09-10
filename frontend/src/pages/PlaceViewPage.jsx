import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  

  useEffect(() => {
    if (!id) return;
    axios.get(`/places/${id}`).then(response => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return '';

  


  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8">
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink> {place.address} </AddressLink>

      <PlaceGallery place={place} />
      {/* IMAGE GRID */}
      {/* <div className="relative">
  <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
    <div>
      {place.photos?.[0] && (() => {
        const cleanedLink = place.photos[0]
          .replace(/^\/?uploads[\\/]+/, '')
          .replace(/^uploads[\\/]+/, '')
          .replace(/\\/g, '');
        const finalUrl = `http://localhost:4000/uploads/${cleanedLink}`;
        return (
          <img
            className="aspect-square object-cover w-full h-full"
            src={finalUrl}
            alt=""
          />
        );
      })()}
    </div>

    <div className="grid">
      {place.photos?.[1] && (() => {
        const cleanedLink = place.photos[1]
          .replace(/^\/?uploads[\\/]+/, '')
          .replace(/^uploads[\\/]+/, '')
          .replace(/\\/g, '');
        const finalUrl = `http://localhost:4000/uploads/${cleanedLink}`;
        return (
          <img
            className="aspect-square object-cover w-full h-full"
            src={finalUrl}
            alt=""
          />
        );
      })()}

      {place.photos?.[2] && (() => {
        const cleanedLink = place.photos[2]
          .replace(/^\/?uploads[\\/]+/, '')
          .replace(/^uploads[\\/]+/, '')
          .replace(/\\/g, '');
        const finalUrl = `http://localhost:4000/uploads/${cleanedLink}`;
        return (
          <img
            className="aspect-square object-cover w-full h-full"
            src={finalUrl}
            alt=""
          />
        );
      })()}
    </div>
  </div>

  {place.photos?.length > 3 && (
    <button
      onClick={() => setShowAllPhotos(true)}
      className="absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500"
    >
      Show more photos
    </button>
  )}
</div> */}


      {/* DESCRIPTION & BOOKING */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn} <br />
          Check-out: {place.checkOut} <br />
          Max number of guests: {place.maxGuests}
        </div>

        <div>
          <BookingWidget place={place} />
        </div>
      </div>
    </div>
  );
}
