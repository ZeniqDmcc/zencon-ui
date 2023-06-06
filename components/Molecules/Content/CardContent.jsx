import Image from "next/image";
import PropTypes from 'prop-types';
import CardHeading from "../../Atoms/Headings/CardHeading";
import CardParagraph from "../../Atoms/Paragraph/CardParagraph";

function CardContent({ HeadingText, ParagraphText, ImageSrc, ImageAlt }) {
  return (
    <div className="flex flex-col border border-[#010020] hover:border-[#88FF4E] gap-8 1280px:gap-4 px-[24px] py-[38px] text-center bg-white bg-opacity-20 1024px:gap-3 767px:gap-2">
        <Image src={ImageSrc} alt={ImageAlt} width={60} height={60} />
        <CardHeading text={HeadingText} />
        <CardParagraph text={ ParagraphText } />
    </div>
  )
}

CardContent.propTypes = {
  ImageSrc: PropTypes.object,
  ImageAlt: PropTypes.string,
  HeadingText: PropTypes.string,
  ParagraphText: PropTypes.string,
};

export default CardContent
