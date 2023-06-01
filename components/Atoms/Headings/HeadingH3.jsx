import PropTypes from 'prop-types';

function HeadingH3({ text }) {
  return (
      <h3 className='font-[500] leading-[40px] font-HeronSans text-[26px] text-[#fff] uppercase tracking-[0.25em] 1024px:text-xl 1024px:tracking-[3px] 480px:text-lg 480px:tracking-[2px]'>{ text }</h3>
  )
}

HeadingH3.propTypes = {
    text: PropTypes.string.isRequired
};

export default HeadingH3