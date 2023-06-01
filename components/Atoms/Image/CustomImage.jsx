import Image from 'next/image';
import PropTypes from 'prop-types';

function CustomImage({ height, width, src, alt }) {
  return (
    <Image height={height} width={width} src={src} alt={alt} />
  )
}

CustomImage.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CustomImage;
