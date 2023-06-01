import Image from "next/image";
// import { developer, investor, user } from "../../public/assets/home";
// import developer from "../../public/assets/home/developer.png";
// import investor from "../../public/assets/home/investor.png";
// import user from "../../public/assets/home/user.png";
import javascript from "../../public/assets/framework/javascript.png";
import typescript from "../../public/assets/framework/typescript.png";
import python from "../../public/assets/framework/python.png";
import truffle from "../../public/assets/framework/truffle.png";
import solidity from "../../public/assets/framework/solidity.png";
import vyper from "../../public/assets/framework/vyper.png";
import ethers from "../../public/assets/framework/ethersjs.png";
import ganache from "../../public/assets/framework/ganache.png";
import {GradientBorder} from "../GradientBorder/GradientBorder";

export default function Framework() {
    return (
        <section className="bg-gray-900 text-white pt-16 pb-8">
            <h1 className="font-extrabold font-primary text-transparent text-center text-7xl bg-clip-text bg-white">
                Suitable For Every Developer{" "}
            </h1>
            <p className="sm:text-[20px] text-[18px]font-secondary text-center text-gray-400 mb-8 md:text-[20px] mt-20">
                The ZENIQ Smartchain is compatible with a wide range of languages and frameworks to improve your
                workflow.
            </p>
            <div className="sm:w-10/12 w-full sm:px-0 px-4 mx-auto">
                <GradientBorder>
                    <div
                        // className="rounded-xl mt-10 bg-gradient-to-bl p-[6px] from-[#F4A12FFF] via-purple-700 to-purple-900 mb-20 z-10"
                    >
                        <div className=" bg-gray-900 p-10 rounded-lg flex flex-row justify-between h-full">
                            <div className="hover:scale-150 transition duration-400"><Image src={javascript} alt="Javascript" width={80} height={80}/></div>
                            <div className="hover:scale-150 transition duration-400"> <Image src={typescript} alt="Typescript" width={80} height={80}/></div>
                            <div className="hover:scale-150 transition duration-400"><Image src={python} alt="Python" width={80} height={80}/></div>
                            <div className="hover:scale-150 transition duration-400"><Image src={solidity} alt="Solidity" width={80} height={80}/></div>
                            <div className="hover:scale-150 transition duration-400"><Image src={vyper} alt="Vyper" width={80} height={80}/></div>
                            <div className="hover:scale-150 transition duration-400"><Image src={truffle} alt="Truffle" width={80} height={80}/></div>
                            <div className="hover:scale-150 transition duration-400"><Image src={ethers} alt="Ethersjs" width={120} height={80}/></div>
                            <div className="hover:scale-150 transition duration-400"><Image src={ganache} alt="Ganache" width={80} height={80}/></div>
                        </div>
                    </div>
                </GradientBorder>
            </div>
            {/*<div className=" bg-gradient-to-r p-[4px] from-indigo-600 via-purple-700 to-purple-900 z-0 "/>*/}
        </section>
    );
}
