import HeadingH1 from "../components/Atoms/Headings/HeadingH1";
import MoreInfoOrg from "../components/MoreInfoOrg/MoreInfoOrg";
import Navbar from "../components/Navbar/Navbar";

export default function MoreInformationScreen() {
    return (
        <div className="bg-[#010020] text-white">
        <Navbar />
        <div className="bg-moreInfo 940px:bg-none pt-[220px] pb-[130px] 1024px:pt-[150px] 1024px:pb-[60px]">
          <div className="container mx-auto 1600px:px-[30px] 640px:px-[30px]">
              <div className="flex flex-col gap-[30px] pl-10 1024px:pl-0 w-[65%] 1024px:w-[78%] 940px:w-[100%]  text-justify 640px:text-left">
                <HeadingH1 text="Zencon Phases" />
                <MoreInfoOrg />
              </div>
          </div>
        </div>
    </div>
  )
}
