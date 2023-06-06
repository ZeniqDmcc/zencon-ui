import { nanoid } from "nanoid";
import developmentCoins from "../../assets/Assets_home/developmentCoins.png";
import GreenButton from "../Atoms/Button/GreenButton";
import CustomImage from "../Atoms/Image/CustomImage";
import GlobalContent from "../Molecules/Content/GlobalContent";

function Development(props) {
  return (
    <div className="bg-development 1024px:bg-none">
      <div className="container mx-auto px-[30px] 640px:max-w-[100%]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row bg-gradient">
          <div className="flex flex-col flex-1 gap-6 lg:gap-12 1024px:order-2 1024px:text-center" key={nanoid()}>
            <GlobalContent
              GlobalContentHeading={props.title}
              Paragraph1={props.shortDescription}
              Paragraph2={props.detailDescription}
              key={nanoid()}
            />
            <div className="1024px:flex 1024px:justify-center">
                <GreenButton href="/more-information" text="join zencon" />
            </div>
          </div>
          <div
            className="flex items-center justify-end flex-1 1024px:order-1"
            key={nanoid()}
          >
            <CustomImage src={developmentCoins} alt={Development} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
Development.defaultProps = {
  title: " Take Your Development Skills to the Next Level",
  shortDescription:
    "Are you ready to take your development skills to the next level? ZENCON Rio de Janeiro 2023 is the perfect opportunity to learn new skills, collaborate with other developers, and showcase your work on a global stage.",
  detailDescription:
    "With challenges that range from building advanced projects to migrating and integrating with the ZENIQ smartchain, the hackathon is the perfect opportunity to push the boundaries of what's possible with blockchain. Whether you're an experienced developer or just starting out, there's something for everyone at ZENCON Rio de Janeiro 2023.",
  coinImage: developmentCoins,
  alt: "Development",
};
