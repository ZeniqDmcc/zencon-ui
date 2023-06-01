import PropTypes from 'prop-types';

const labelStyle = "font-HeronSans font- text-white text-[26px] leading-7 tracking-wider uppercase"

function BannerLabel({ text }) {
  return (
    <span className={labelStyle}>{text}</span>
  )
}

BannerLabel.propTypes = {
  text: PropTypes.string.isRequired
};

export default BannerLabel;
