import propTypes from "prop-types";
import HeadingH5Green from "../../Atoms/Headings/HeadingH5Green";
import HeadingH5White from "../../Atoms/Headings/HeadingH5White";
import Paragraph from "../../Atoms/Paragraph/Paragraph";

function MoreInformation({ GreenText, WhiteText, ParagraphText }) {
  return (
    <div className="flex flex-col gap-1 div-with-dots">
      <div className="flex w-full gap-1 640px:flex-col">
        <HeadingH5Green text={GreenText} />
        <HeadingH5White text={WhiteText} />
      </div>
      <Paragraph text={ParagraphText} />
    </div>
  );
}

MoreInformation.propTypes = {
  GreenText: propTypes.string,
  WhiteText: propTypes.string,
  ParagraphText: propTypes.string,
};

export default MoreInformation;
