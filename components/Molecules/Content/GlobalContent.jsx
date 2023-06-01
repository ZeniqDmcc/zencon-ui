import Paragraph from "../../Atoms/Paragraph/Paragraph";
import PropTypes from "prop-types";
import HeadingH2 from "../../Atoms/Headings/HeadingH2";
import Anchor from "../../Atoms/Anchor/Anchor";

function GlobalContent({ GlobalContentHeading, Paragraph1, Paragraph2, href, text }) {
  return (
    <div className="flex flex-col gap-6 1024px:gap-3 767px:gap-[15px]">
      <HeadingH2 text={GlobalContentHeading} />
      <Paragraph text={Paragraph1} />
      <Paragraph text={Paragraph2} />
      <Anchor href={href} text={text} />
    </div>
  )
}

GlobalContent.propTypes = {
  GlobalContentHeading: PropTypes.string,
  Paragraph1: PropTypes.string,
  Paragraph2: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
};

export default GlobalContent;
