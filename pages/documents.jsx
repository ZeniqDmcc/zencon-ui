import { NextSeo } from "next-seo";
import Image from "next/image";
import Container from "../components/Container/Container";
import PageWrapper from "../components/PageWrapper/PageWrapper";

import {
  doc_icon_1,
  doc_icon_2,
  doc_icon_3
} from "../public/assets/docs";
import CallToAction from "../components/Buttons/CallToAction";
import {GradientBorder} from "../components/GradientBorder/GradientBorder";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card";
import CardContent from "../components/Molecules/Content/CardContent";

const items = [
  {
    id: 1,
    title: "ZENIQ whitepaper",
    description:
      "Understand ZENIQ's technology and purposes through our Whitepaper, now available in four different languages.  ",
    imgPath: doc_icon_1,
    href: "https://zeniq.com/whitepaper",
    newTab: true
  },
  {
    id: 2,
    title: "Smart Chain Documentation",
    description:
      "With the ZSC Documentation, developers have access to all the information necessary to unleash our Smart Chain's full potential.",
    imgPath: doc_icon_2,
    href: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
    newTab: true
  },
  {
    id: 3,
    title: "ZENCON Academy",
    description:
      "ZENCON Academy establishes a series of standards to guide and support growth of the PublicProjects running on the ZENIQ's Smart Chain.",
    imgPath: doc_icon_3,
    href: "/coming-soon",
  },
];

export default function docs() {
  return (
    <>
    <Navbar/>
      <NextSeo
        title="ZENCON Launchpad | Documents"
        description="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
      />
      <div>
        <section className="pb-20 text-white bg-gray-900 bg-no-repeat bg-cover grow py-14">
          <Container>
            <h1 className="mb-8 text-3xl font-extrabold text-center mt-14 md:text-5xl lg:text-7xl font-primary">
              Documentation
            </h1>
            {/* <div className="flex">
                {items.map((item, index) => {
                  return (
                    <div key={index}>
                      <Image width={40} height={40} src={item.imgPath} alt="" />
                      <CardContent
                        ImageAlt="icon"
                        HeadingText={item.title}
                        ParagraphText={item.description}
                      />
                      <div>
                        <a href={item.href}>view document</a>
                      </div>
                    </div>
                  )
                })}
            </div> */}
          </Container>
        </section>
      </div>
    </>
  );
}
