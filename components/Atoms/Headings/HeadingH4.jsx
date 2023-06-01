import PropTypes from "prop-types";

function HeadingH5({ text }) {
  return (
    <h5 className="font-Hanson text-white text-[20px] uppercase font-bold leading-[30px]">
      {text}
    </h5>
  );
}

HeadingH5.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingH5;
