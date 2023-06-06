import PropTypes from 'prop-types';

function CardHeading({ text }) {
  return (
      <h3 className='font-[500] leading-[30px] font-Hanson text-[20px] text-[#fff] uppercase'>{ text }</h3>
  )
}

CardHeading.propTypes = {
    text: PropTypes.string.isRequired
};

export default CardHeading