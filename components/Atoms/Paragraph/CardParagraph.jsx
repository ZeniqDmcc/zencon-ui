import PropTypes from 'prop-types';

function CardParagraph({ text }) {
  return (
    <p className="w-90 leading-1.5 text-justify text-[18px] md:text-md font-[300] 1024px:text-center">{ text }</p>
  )
}

CardParagraph.propTypes = {
  texy: PropTypes.string
};

export default CardParagraph