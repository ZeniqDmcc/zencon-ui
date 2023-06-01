import PropTypes from "prop-types";

function HeadingH5Green({ text }) {
  return (
    <h5 className="font-HeronSans text-[#87FF4F] text-[18px] 640px:text-[16px] capitalize leading-[30px]">
      {text}
    </h5>
  );
}

HeadingH5Green.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingH5Green;
