import Image from "next/image";
import PropTypes from 'prop-types';
import CardHeading from "../../Atoms/Headings/CardHeading";
import CardParagraph from "../../Atoms/Paragraph/CardParagraph";

function CardContent({ HeadingText, ParagraphText, ImageSrc, ImageAlt }) {
  return (
    <div className="flex flex-col gap-8 1280px:gap-4 px-[38px] py-[60px] 1440px:px-[28px] 1440px:py-[48px] 480px:px-[20px] 480px:py-[35px] text-center bg-white bg-opacity-20 1024px:gap-3 767px:gap-2">
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
