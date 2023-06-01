import HeadingH1 from "../../Atoms/Headings/HeadingH1"
import HeadingH3 from "../../Atoms/Headings/HeadingH3";
import BannerLabel from "../../Atoms/Label/BannerLabel";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import PropTypes from 'prop-types';

const ContentM1Style = "flex flex-col w-[70%] 1024px:w-[70%] items-center gap-8 1024px:gap-3 640px:gap-3"

function BannerContent({ labelText, headingText, paragraphText }) {
  return (
    <div className={ContentM1Style}>
        <HeadingH3 text={labelText} />
        <HeadingH1 text={headingText} />
        <Paragraph text={paragraphText} />
    </div>
  )
}

BannerContent.propTypes = {
  labelText: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
};

export default BannerContent