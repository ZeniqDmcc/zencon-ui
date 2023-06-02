import Image from 'next/image';

function CustomImage({ height, width, src, alt='' }) {
  return (
    <Image height={height} width={width} src={src} alt="" />
  )
}
export default CustomImage;
