import PropTypes from 'prop-types';

const HeadingH1Style = "font-Hanson text-[#87FF4F] text-4xl uppercase font-normal leading-[40px] max-w-[950px] 1024px:text-3xl 767px:text-2xl 640px:text-lg 640px:leading-[22px] 480px:text-[20px] 480px:leading-6"

function HeadingH1({ text }) {
  return (
      <h1 className={ HeadingH1Style }>{ text }</h1>
  )
}

HeadingH1.propTypes = {
    text: PropTypes.string.isRequired
};

export default HeadingH1