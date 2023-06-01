import { nanoid } from "nanoid";
import graph2 from "../../assets/graph2.svg";
import styles from "./nft.module.css";
import GlobalContent from "../Molecules/Content/GlobalContent";
import CustomImage from "../Atoms/Image/CustomImage";

function Nft(props) {
  return (
    <div className={styles.nft}>
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div className="flex justify-end w-2/4">
                    <CustomImage key={nanoid()} src={props.image} alt={props.alt} />
                </div>
                <div className="w-2/4">
                    <GlobalContent
                      className="lg:flex-1"
                      GlobalContentHeading={props.title}
                      Paragraph1={props.shortDescription}
                      Paragraph2={props.detailDescription}
                      key={nanoid()}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Nft;

Nft.defaultProps = {
  title: "Unlock the potential of NFTs and Web 3.0",
  shortDescription:
    "Are you ready to take NFTs and web 3.0 to the next level? ZENCON Rio de Janeiro 2023 is your chance to showcase your skills and create tools that go beyond owning pictures. With challenges that include developing NFT-based games and creating marketplaces for art, the possibilities are endless.",
  detailDescription: `Whether you're an experienced developer or just starting out, the hackathon is the perfect opportunity to explore the potential of NFTs and web 3.0. With a global community of like-minded individuals, you'll have the support you need to take your ideas to the next level.`,
  image: graph2,
  alt: "Nft",
};
