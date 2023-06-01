import Container from "../Container/Container";
import Image from "next/image";
// import { developer, investor, user } from "../../public/assets/home";
import developer from "../../public/assets/home/developer.png";
import investor from "../../public/assets/home/investor.png";
import user from "../../public/assets/home/user.png";
import React from "react";
import ButtonGlow from "../Buttons/ButtonGlow";
import {GradientBorder} from "../GradientBorder/GradientBorder";

const items = [
    {
        id: 1,
        title: "I'm a Developer",
        pointer: "Developer",
        description:
            "Get started with the Documentation of our Smartchain. Check out our official Github repository for project templates, smart contracts and more!",
        imgPath: developer,
        link: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
    },
    {
        id: 2,
        title: "I'm an Investor",
        pointer: "Investor",
        description:
            "Understand the TIER evaluation system to get insights about the potential and maturity of each individual project. Check out our ZENCON Academy Documentation to learn more!",
        imgPath: investor,
        link: "/documents",
    },
    {
        id: 3,
        title: "I'm a visitor",
        pointer: "Visitor",
        description:
            "Be an active ZENIQ community member by interacting with the projects running on our Smartchain, either rating them or contacting the development team for feedback or more information!",
        imgPath: user,
        link: "https://zeniq.com/whitepaper",
    },
];

export default function Capabilities() {
    return (
        <section className="bg-gray-900 text-white pb-8 pt-20">
            {/*<div className="spacer layer1 -mt-10 rotate-180"></div>*/}
            <div className="w-full h-10"/>
            <Container>
                <div className="text-center mb-10">
                    <h1 className="font-extrabold font-primary text-transparent text-center text-7xl bg-clip-text bg-white">
                        How Can I Benefit From It?{" "}
                    </h1>
                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mx-auto mt-6 text-gray-400 font-secondary text-justify-center">
                        If this is your first time visiting the ZENCON{"'"}s Launchpad, we got
                        you covered! Below you can find organized all information that best
                        fits your profile.
                    </p>
                </div>
                <div className="px-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-14 mb-12">
                    {items.map((item,index) => (
                        <div key={index}>
                            <GradientBorder>
                                <div
                                    className="capabilities p-8 rounded-lg flex flex-col justify-between h-1000px"
                                >
                                    <div>
                                        <Image src={item.imgPath} alt="money" width={80} height={80}/>
                                        <div/>
                                    </div>
                                    <h1 className="font-bold pb-2 pt-4 capitalize sm:text-[20px] text-[18px] font-primary">
                                        {item.title}
                                    </h1>
                                    <h2 className="text-md opacity-100 text-gray-400">{item.description}</h2>
                                    <div className="mt-12 mb-8 font-normal text-[#667085]">
                                        {/*<CallToAction*/}
                                        {/*    text="View Document"*/}
                                        {/*    link={item.link}*/}
                                        {/*    classes="w-full"*/}
                                        {/*/>*/}
                                        <ButtonGlow
                                            text_primary="See More"
                                            text_secondary={item.pointer}
                                            linkURL={item.link}
                                            classes="w-full"
                                        />
                                    </div>
                                </div>
                            </GradientBorder>

                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
