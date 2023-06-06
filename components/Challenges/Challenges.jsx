import HeadingH2 from "../Atoms/Headings/HeadingH2";
import { nanoid } from "nanoid";
import ZenconChallenges from "../Molecules/Content/ZenconChallenges";

function Challenges() {
  return (
    <div className="container mx-auto px-[30px] 640px:max-w-[100%]">
        <div className="w-[80%] flex flex-col gap-7 1024px:w-[90%]  1024px:mx-auto 1024px:text-center">
            <div className="2xl:w-[45%] xl:w-[55%] lg:w-[70%]">
              <HeadingH2 text="What are the ZENCON challenges?" />
            </div>
            <div className="flex flex-col gap-7">
              {ChallengesData && ChallengesData.map((item) => {
                  return (
                      <ZenconChallenges
                          key={nanoid()}
                          HeadingGreen={item.headingH1}
                          HeadingWhite={item.headingH2}
                          Paragraph1={item.paragraph}
                      />
                  );
              })}
            </div>
        </div>
    </div>
  );
}

const ChallengesData = [
  {
    headingH1: "Category: Next-Gen Web3",
    headingH2: "NFTs / AI / Web 3.0 / Metaverse",
    paragraph:
      "This category challenges the visionaries who can blur the lines between reality and the digital world. We invite you to create a project that combines NFTs, AI, and Web 3.0, pushing the boundaries of what's possible on the ZENIQ Smartchain.",
  },
  {
    headingH1: "Category: DeFi the Limits",
    headingH2: "Decentralized Finance (DeFi) & DeFi 2.0",
    paragraph:
      "Finance is no longer confined to traditional institutions. This category is for the pioneers ready to redefine finance using the ZENIQ Blockchain. We're looking for projects that will disrupt and innovate in the DeFi and DeFi 2.0 space.",
  },
  {
    headingH1: "Category: ZENIQ Evolution",
    headingH2: "New Developments of the Zeniq Ecosystem and the Existing Projects",
    paragraph:
      "The ZENIQ Ecosystem is a fertile ground for innovation. Your challenge is to explore this digital landscape and build upon its existing projects, or create something entirely new. Help shape the future on the ZENIQ Smartchain.",
  },
  {
    headingH1: "Category: Next Level Innovation",
    headingH2: "New Advanced and Developed Projects (Pro Level)",
    paragraph:
      "This category is for the seasoned veterans, the experts who eat, sleep, and breathe blockchain. We invite you to develop an advanced project on the ZENIQ Smartchain, showcasing your skill, creativity, and expertise.",
  },
  {
    headingH1: "Category: ZENIQ Integration",
    headingH2: "Zeniq Smartchain Migration/ Integration (Pro Level)",
    paragraph:
      "The true test of a blockchain professional lies in their ability to integrate and migrate systems seamlessly. In this category, we challenge you to integrate an existing project into the ZENIQ Smartchain, demonstrating your technical skills in the blockchain world.",
  },
];

export default Challenges;
