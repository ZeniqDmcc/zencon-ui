import PropTypes from "prop-types";

function HeadingH5White({ text }) {
  return (
    <h5 className="font-HeronSans text-[#FFF] text-[18px] 640px:text-[16px] capitalize leading-[30px]">
      {text}
    </h5>
  );
}

HeadingH5White.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingH5White;
