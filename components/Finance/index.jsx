import { nanoid } from "nanoid"
import blocks from "../../assets/Assets_home/blocks.svg"
import GlobalContent from "../Molecules/Content/GlobalContent"
import CustomImage from "../Atoms/Image/CustomImage"

function Finance(props) {
  return (
    <div className="">
        <div className="container mx-auto px-[30px] 640px:max-w-[100%]">
            <div className="flex justify-between 1024px:flex-col 1024px:gap-8">
                <div className="w-1/2 1024px:w-full 1024px:order-2 1024px:text-center">
                    <GlobalContent className="lg:flex-1"
                        GlobalContentHeading={props.title}
                        Paragraph1={props.traditionalBanking}
                        Paragraph2={props.challenges}
                        key={nanoid()}
                    />
                </div>
                <div className="flex justify-end w-1/2 1024px:justify-center 1024px:w-full 1024px:order-1 480px:hidden bg-gradient">
                    <CustomImage key={nanoid()}
                        src={props.src}
                        alt={props.alt}
                    />
                </div>
            </div>
        </div>
    </div>
  )
} 

export default Finance

Finance.defaultProps = {
    title: "Discover the Power of Decentralized Finance",
    traditionalBanking: "Say goodbye to traditional banking and hello to a new era of decentralized finance. ZENCON Rio de Janeiro 2023 is your chance to explore the potential of blockchain and create tools that allow anyone with Internet access to lend, borrow, and bank without the need for middlemen.",
    challenges: "With challenges ranging from building yield protocols to developing trading bots and DAO makers, the possibilities are endless. Whether you're an experienced developer or just starting out, the hackathon is the perfect opportunity to learn new skills and push the boundaries of what's possible with decentralized finance.",
    src: blocks,
    alt: "Finance Image"
}