import PropTypes from 'prop-types';

const ButtonGreenStyle = "font-Hanson uppercase font-normal text-[16px] leading-[16.16px] text-center w-[240px] h-[52px] text-[#121212] border-2 flex justify-center items-center border-[#87FF4F] bg-[#87FF4F] hover:bg-[#fff] hover:border-[#fff] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px]"
function GreenButton({ href, text }) {
  return (
    <a className={ButtonGreenStyle} href={href}>{text}</a>
  )
}

GreenButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default GreenButton


