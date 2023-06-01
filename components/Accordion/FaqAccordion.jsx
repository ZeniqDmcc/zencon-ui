import { useState } from 'react';
import HeadingH5 from '../Atoms/Headings/HeadingH5';
import Paragraph from '../Atoms/Paragraph/Paragraph';

const FaqAccordion = ({ title, content, social_media, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const button = isOpen
    ? 'w-full hover:cursor-pointer mb-4 text-[#fff] hover:text-[#fff]'
    : 'w-full group hover:cursor-pointer p-1 hover:bg-[#fff] hover:text-[#fff]';

  const faqContainer = isOpen
    ? 'border-[#87FF4F] border-2 group-hover:border-none my-4 p-2'
    : 'border-[#324463] hover:border-[#fff] border-2 group-hover:border-none my-4'

  const headingOuter = "px-3 py-2"
  const contentOuter = "text-[#fff] tracking-wide text-[17px]"

  return (
    <div className={faqContainer}>
      <button className={button} onClick={toggleAccordion}>
        <div className={headingOuter}>
          <HeadingH5 text={title} />
        </div>
      </button>
      {isOpen && (
        <div className={contentOuter}>
          <div className="px-3 py-2 pt-0">
            <Paragraph text={content} />
          </div>
          {social_media && social_media.length > 0 && (
            <ul className="pb-2 pl-8 list-disc">
              {social_media.map((item, index) => (
                <li key={index}>
                  <a className="underline" target="_blank" href={item.url} rel="noreferrer">
                    {item.platform}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {list && list.length > 0 && (
            <ul className="pb-3 pl-8 list-disc">
              {list.map((item, index) => (
                <li key={index}>{item.item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default FaqAccordion;
