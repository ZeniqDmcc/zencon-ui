import Image from "next/image";
import CallToAction from "../Buttons/CallToAction";
import Container from "../Container/Container";
import zenpass from "../../public/assets/padlock.png";
import {GradientBorder} from "../GradientBorder/GradientBorder";

export default function Intro() {
    return (
        <section className="sm:py-4 py-6 bg-gray-900 from-purple-900 via-gray-900 to-gray-900">
            <Container>
                <GradientBorder size={15}>
                    <div
                        // className="rounded-xl mt-10 bg-gradient-to-bl p-3 from-[#F4A12FFF] via-purple-700 to-purple-900 mb-20 z-10"
                    >
                        <div className=" p-10 rounded-lg flex flex-row justify-between h-full">
                            <div
                                className="grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center sm:gap-14 gap-6 mt-12 mb-12">
                                <div>
                                    <h1 className="sm:text-[36px] text-[24px] text-[#FFFFFF] font-extrabold font-primary pb-6">
                                        Introducing ZeniqID: ZENIQ{"'"}s New Authentication Technology
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] text-justify text-[#667085] pb-10 font-secondary">
                                        One of the biggest challenges of Decentralization is to be able to
                                        effectively prove authenticity without giving up your private
                                        information to third parties. With that in mind, ZENIQ developed a
                                        blockchain based authentication method designed to protect its
                                        users personal data. Now, the next level secure authentication
                                        system fits in your pocket.
                                    </p>
                                    <CallToAction
                                        text="Get your ZeniqID"
                                        link="/coming-soon"
                                        classes="w-full"
                                    />
                                </div>
                                <div>
                                    <div
                                        className="w-[200px] h-[200px] relative sm:px-0 px-6 hover:scale-125 transition duration-400">
                                        <Image src={zenpass} alt="intro" layout="responsive"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </GradientBorder>
            </Container>
        </section>
    );
}
