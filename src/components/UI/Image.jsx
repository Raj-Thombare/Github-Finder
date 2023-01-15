const Image = ({ src, width, alt, className }) => {
  return <img src={src} width={width} className={`${className}`} alt={alt} />;
};

export default Image;
