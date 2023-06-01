import { nanoid } from "nanoid";
import graph3 from "../../assets/graph3.png";
import CustomButton from "../Atoms/Button/CustomButton";
import CustomImage from "../Atoms/Image/CustomImage";
import GlobalContent from "../Molecules/Content/GlobalContent";

function Ecosystem(props) {
  return (
    <div className=" px-[30px]">
      <div className="container mx-auto bg-ecoSystem 1024px:bg-none 1024px:pt-0 pt-[22px] 640px:max-w-[100%]">
        <div className="flex flex-col items-center w-full p-5 mb-16 bg-white bg-opacity-25 shadow-lg 1024px:mb-0 lg:flex-row lg:px-12 backdrop-blur-md sm:mb-0">
          <div className="flex flex-col w-2/4 gap-12 1024px:gap-1 1024px:p-4 1024px:text-center 1024px:order-2 1024px:w-full">
            <GlobalContent
              className="lg:flex-1"
              GlobalContentHeading={props.title}
              Paragraph1={props.shortDescription}
              Paragraph2={props.detailDescription}
              key={nanoid()}
            />
            <div className="1024px:flex 1024px:justify-center">
                <CustomButton text="More Information" />
            </div>
          </div>
          <div className="flex justify-end w-2/4 1024px:w-full 1024px:order-1">
            <CustomImage key={nanoid()} src={props.icon} alt={props.alt} />
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
  icon: graph3,
  alt: "Ecosystem",
};
