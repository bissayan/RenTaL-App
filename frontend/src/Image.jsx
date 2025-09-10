export default function Image({ src, ...rest }) {
  // Check if the src already starts with http(s)
  if (src && !src.startsWith("http://") && !src.startsWith("https://")) {
    src = 'http://localhost:4000/uploads/' + src.replace(/^\/?uploads[\\/]+/, '').replace(/^uploads[\\/]+/, '').replace(/\\/g, '');
  }

  return <img {...rest} src={src} alt="" />;
}
