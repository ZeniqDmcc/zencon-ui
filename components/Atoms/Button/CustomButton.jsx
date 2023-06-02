import PropTypes from 'prop-types';

function CustomButton({ href, text }) {
  return (
    <a className="font-Hanson font-normal uppercase text-[16px] leading-[16.16px] text-center w-[240px] h-[52px] text-[#fff] border-2 flex justify-center items-center border-white hover:bg-[#fff] hover:text-[#121212] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px]" href={href}>{text}</a>
  )
}

CustomButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
}

export default CustomButton


