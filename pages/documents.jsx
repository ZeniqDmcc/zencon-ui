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
      <PageWrapper>
        <section className="pb-20 text-white bg-gray-900 bg-no-repeat bg-cover grow py-14">
          <Container>
            <h1 className="mb-8 text-3xl font-extrabold text-center mt-14 md:text-5xl lg:text-7xl font-primary">
              Documentation
            </h1>
            <div className="grid content-center grid-cols-1 py-8 xl:grid-cols-3 md:grid-cols-2 justify-items-center gap-14">
              {items.map((item, index) => (
                  <GradientBorder key={index} size={7}>
                    <div
                        key={item.id}
                        className="flex flex-col justify-between w-full h-full px-4 pt-6 text-left bg-white rounded-lg doc-card-shadow"
                    >
                      <div>
                        <div className="flex items-center gap-4 pb-4 mb-8 border-b-2 border-b-gray-200">
                          <Image
                              src={item.imgPath}
                              alt="icon"
                              width={40}
                              height={40}
                          />
                          <a
                              className="font-bold font-primary sm:text-[20px] text-[24px] text-black capitalize cursor-pointer"
                              href={item.href}
                          >
                            {item.title}
                          </a>
                        </div>
                        <p className="font-normal font-secondary text-[#667085]">
                          {item.description}
                        </p>
                      </div>
                      <p className="mt-12 mb-8 font-normal text-[#667085]">
                        <CallToAction
                            text="View Document"
                            link={item.href}
                            classes="w-full"
                            newTab={item.newTab}
                        />
                      </p>
                    </div>
                  </GradientBorder>
              ))}
            </div>
          </Container>
        </section>
      </PageWrapper>
    </>
  );
}
