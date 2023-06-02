import PropTypes from "prop-types";

function HeadingH2({ text }) {
  return (
    <h2 className="font-Hanson text-[#87FF4F] text-[32px] uppercase font-bold leading-[40px] 1024px:text-2xl 767px:text-xl 640px:text-lg 640px:leading-[22px] 480px:text-[20px] 480px:leading-6">
      {text}
    </h2>
  );
}

HeadingH2.propTypes = {
  text: PropTypes.string,
};

export default HeadingH2;
