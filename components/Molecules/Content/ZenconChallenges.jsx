import PropTypes from "prop-types";
import HeadingH5Green from "../../Atoms/Headings/HeadingH5Green";
import HeadingH5White from "../../Atoms/Headings/HeadingH5White"
import Paragraph from "../../Atoms/Paragraph/Paragraph";

function ZenconChallenges({ HeadingGreen, HeadingWhite, Paragraph1 }) {
  return (
    <div className="flex flex-col gap-2">
        <HeadingH5Green text={HeadingGreen} />
        <HeadingH5White text={HeadingWhite} />
        <Paragraph text={Paragraph1} />
    </div>
  )
}

ZenconChallenges.propTypes = {
  HeadingGreen: PropTypes.string,
  HeadingWhite: PropTypes.string,
  Paragraph1: PropTypes.string,
};

export default ZenconChallenges;
