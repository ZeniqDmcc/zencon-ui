import HeadingH3 from "../../Atoms/Headings/HeadingH3"
import CardParagraph from "../../Atoms/Paragraph/CardParagraph";
import PropTypes from 'prop-types'
import Image from "next/image";
import CardHeading from "../../Atoms/Headings/CardHeading";

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
  ImageSrc: PropTypes.string.isRequired,
  ImageAlt: PropTypes.string.isRequired,
  HeadingText: PropTypes.string.isRequired,
  ParagraphText: PropTypes.string.isRequired,
};

export default CardContent
