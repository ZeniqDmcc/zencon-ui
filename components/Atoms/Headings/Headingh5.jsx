import PropTypes from "prop-types";

function HeadingH5({ text }) {
  return (
    <h5 className="font-HeronSans group-hover:text-black text-[18px] text-white text-left leading-[30px]">
      {text}
    </h5>
  );
}

HeadingH5.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingH5;
