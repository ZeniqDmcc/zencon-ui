import PropTypes from 'prop-types';
function Paragraph({ text }) {
  return (
    <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] font-light 940px:leading-[25px]">{text}</p>
  )
}

Paragraph.propTypes = {
  texy: PropTypes.string,
};

export default Paragraph