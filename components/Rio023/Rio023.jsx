import Image from "next/image";
import rio023 from "../../assets/Assets_home/rio023.svg";
import BannerLabel from "../Atoms/Label/BannerLabel";
import HeadingH3 from "../Atoms/Headings/HeadingH3";

function Rio023() {
  return (
    <div className="rio-left-bg 1024px:bg-none">
      <div className="container px-10 bg-gradient mx-auto 1024px:px-0 640px:max-w-[100%] 640px:px-[20px]">
        <div className="bg-Rio023 flex flex-col justify-start mx-0 gap-[36px] py-40 pl-28 800px:bg-contain 640px:p-0 800px:pt-20 800px:px-10 1024px:text-center 640px:gap-[16px] 640px:px-[20px] 640px:pt-[20px] 640px:pb-[150px]  480px:px-[20px] 480px:pt-[20px] 480px:pb-[20px]">
          <div>
            <Image src={rio023} alt="ZENCON 023" />
          </div>
          <div className="max-w-[667px]">
            <HeadingH3 text="Fairmont Rio de Janeiro Copacabana Rio de Janeiro, Brazil" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rio023;
