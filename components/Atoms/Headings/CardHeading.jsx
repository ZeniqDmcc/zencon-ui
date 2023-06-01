import PropTypes from 'prop-types';

function CardHeading({ text }) {
  return (
      <h3 className='font-[500] leading-[40px] font-HeronSans text-[26px] text-[#fff] uppercase'>{ text }</h3>
  )
}

CardHeading.propTypes = {
    text: PropTypes.string.isRequired
};

export default CardHeading