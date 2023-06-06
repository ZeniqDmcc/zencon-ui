import { nanoid } from "nanoid";
import ecosystemImage from "../../assets/Assets_home/ecosystemImage.png";
import CustomButton from "../Atoms/Button/CustomButton";
import CustomImage from "../Atoms/Image/CustomImage";
import GlobalContent from "../Molecules/Content/GlobalContent";

function Ecosystem(props) {
  return (
    <div>  
      <div className="max-w-[1280px] mx-auto 1024px:pt-0 640px:max-w-[100%] px-[30px]">
        <div className="bg-ecoSystem 1024px:bg-none pt-[22px]">
        <div className="flex flex-col items-center w-full p-16 mb-16 bg-white bg-opacity-25 shadow-lg 1024px:p-5 1024px:mb-0 lg:flex-row backdrop-blur-md sm:mb-0">
          <div className="flex flex-col w-2/4 gap-12 1024px:gap-1 1024px:p-4 1024px:text-center 1024px:order-2 1024px:w-full">
            <GlobalContent
              className="lg:flex-1"
              GlobalContentHeading={props.title}
              Paragraph1={props.shortDescription}
              Paragraph2={props.detailDescription}
              key={nanoid()}
            />
            <div className="1024px:flex 1024px:justify-center">
                <CustomButton text="EXPLORE ZENIQ" />
            </div>
          </div>
          <div className="flex justify-end w-2/4 1024px:justify-center 1024px:w-full 1024px:order-1">
            <CustomImage key={nanoid()} src={props.icon} alt={props.alt} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;

Ecosystem.defaultProps = {
  title: "Join the ZENIQ Ecosystem and Existing projects",
  shortDescription:
    "Are you interested in joining the ZENIQ ecosystem and contributing to existing projects? ZENCON Rio de Janeiro 2023 is the perfect opportunity to collaborate with other developers and make a difference in the world of blockchain.",
  detailDescription:
    "With existing projects like Tupan, Regardless, Avinoc, and SIDI, there's no shortage of opportunities to get involved and make a difference. Whether you're interested in contributing to existing projects or developing your own, the hackathon is the perfect opportunity to showcase your skills and make your mark on the world of blockchain.",
  icon: ecosystemImage,
  alt: "Ecosystem",
};
