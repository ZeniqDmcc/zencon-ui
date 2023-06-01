import PropTypes from 'prop-types';

function CardParagraph({ text }) {
  return (
    <p className="w-90 leading-1.5 text-justify xl:text-xl md:text-md font-normal 1024px:text-center">{ text }</p>
  )
}

CardParagraph.propTypes = {
  texy: PropTypes.string.isRequired
};

export default CardParagraph