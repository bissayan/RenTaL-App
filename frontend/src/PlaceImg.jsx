import Image from "./Image.jsx";

export default function PlaceImg({ place, index = 0, className = 'object-cover' }) {
  if (!place?.photos?.length) return null;

  const rawPhoto = place.photos[index];

  // If already a valid URL, use it directly
  const finalUrl = rawPhoto.startsWith("http://") || rawPhoto.startsWith("https://")
    ? rawPhoto
    : `http://localhost:4000/uploads/${rawPhoto.replace(/^\/?uploads[\\/]+/, '').replace(/^uploads[\\/]+/, '').replace(/\\/g, '')}`;
  console.log(finalUrl)
  return <Image className={className} src={finalUrl} alt="" />;
}
