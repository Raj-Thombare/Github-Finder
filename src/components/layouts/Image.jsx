const Image = ({ src, width, alt, styles }) => {
  return <img src={src} width={width} className={`${styles}`} alt={alt} />;
};

export default Image;
