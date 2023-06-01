import {NextSeo} from "next-seo";
import React from "react";
import Image from "next/image";

import datalink from "/public/assets/projects/Datalink/index.png"
import fidora from "/public/assets/projects/Fidora/logo.png"
import huitzil from "/public/assets/projects/Huitzil/index.png"
import infilmart from "/public/assets/projects/infilmart/index.png"
import nfarm from "/public/assets/projects/Nfarm/logo.png"
import truecommit from "/public/assets/projects/Truecommit/logo.png"
import avinoc from "../public/assets/projects/Avinoc/avinoc.jpg"
import tupan from "../public/assets/projects/Tupan/tupan.png"
import HeroBg from "../public/assets/projects_hero_bg.png"
import Navbar from "../components/Navbar/Navbar";

const items = [
    {
        id: 1,
        title: "DATALINK",
        authors: "Developer",
        short_description:
            "The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets.",
        detailed_description: "The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.\n" +
            "The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.",
        app_image: datalink,
        landing_page: "https://datalinkdao.com/",
    },
    {
        id: 2,
        title: "TRUE COMMIT",
        authors: "Investor",
        short_description:
            "True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts.",
        detailed_description: "True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.\n" +
            "True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.",
        app_image: truecommit,
        landing_page: "https://truecommit.link/",
    },
    {
        id: 3,
        title: "NFARM",
        authors: "Developer",
        short_description:
            "NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation.",
        detailed_description: "NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.\n" +
            "NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.",
        app_image: nfarm,
        landing_page: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
    },
    {
        id: 4,
        title: "INFILMART",
        authors: "Developer",
        short_description:
            "La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional;",
        detailed_description: "La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.\n" +
            "La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.",
        app_image: infilmart,
        landing_page: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
    },
    {
        id: 5,
        title: "FIDORA",
        authors: "Visitor",
        short_description:
            "FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.",
        detailed_description: "FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.\n" +
            "FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.\n" +
            "0.5 Stars\n",
        app_image: fidora,
        landing_page: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
    },
    {
        id: 6,
        title: "HUITZIL",
        authors: "Developer",
        short_description: "No code experience. Anyone can create helpful smart contracts within minutes.",
        app_image: huitzil,
        detailed_description: "Huitzil brings people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.To bring people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.To bring people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.To bring people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.",
        landing_page: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
    },
    {
        id: 7,
        title: "TUPAN",
        authors: "Developer",
        short_description:
            "The Tupan Token was born to simply and assertively, achieve the necessary transition to a regenerative and circular economy.",
        detailed_description: "The Tupan Token was born to simply and assertively, achieve the necessary transition to a regenerative and circular economy. By joining the high technology of cryptocurrencies and the blockchain network, with the most extraordinary demands of the century, Tupan brings you the opportunity to make a difference in the environment while enjoying an investment with a high potential for appreciation.",
        app_image: tupan,
        landing_page: "https://www.tupan.io/",
    },
    {
        id: 8,
        title: "AVINOC",
        authors: "Developer",
        short_description:
            "AVINOC is a tokenization company dedicated to integrating new technologies in aviation.",
        detailed_description: "AVINOC is a tokenization company dedicated to integrating new technologies in aviation. It’s driving change and transformation throughout the entire industry. The innovative tokenization services and projects led by AVINOC are designed to connect the legacy system and the crypto-economy into a single functional, transparent and highly secure ecosystem.",
        app_image: avinoc,
        landing_page: "https://avinoc.com/",
    },
];

export default function PublicProjects() {
    return (
        <>
        <Navbar/>
            <NextSeo
                title="ZENCON Launchpad | Incoming next"
                shortDescription="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
            />
            
            <main className="page-wrapper min-h-screen overflow-hidden relative">
                <div className="bg-gray-900 relative xl:isolate">
                    <div className="sm:w-10/12 w-full sm:px-0 px-4 mx-auto">
                        <div className="absolute h-full right-0 aspect-1.1/1">
                            <div className="relative h-full w-full z-behind">
                                <Image src={HeroBg} layout={'fill'}/>
                            </div>
                        </div>
                        <div className="text-center pb-4 w-max-[50vw]">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <h1 className="font-extrabold font-primary text-white text-left text-6xl mt-40">
                                    What is running on the 
                                    </h1>
                                    <h1 className="font-extrabold font-primary text-[#E9963CFF] text-left text-6xl mt-1">
                                    Smart Chain?
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mt-6 text-gray-400 font-secondary text-left mb-10">
                                        Get a sneak peek on some of the most innovative projects deployed to our Smart Chain during ZENCON22
                                    </p>
                                </div>
                                <div>
                                    {/*<Blobs/>*/}
                                </div>
                            </div>
                            <div className="flex flex-row justify-between flex-wrap">
                                <div className="flex flex-col">
                                    <h1 className="font-extrabold font-primary text-white text-left text-4xl mt-4">
                                        23,429
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mt-2 text-gray-400 font-secondary text-left mb-10">
                                        Followers
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="font-extrabold font-primary text-white text-left text-4xl mt-4">
                                        4,801,690
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mt-2 text-gray-400 font-secondary text-left mb-10">
                                        Avg. Tx daily
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="font-extrabold font-primary text-white text-left text-4xl mt-4">
                                        {items.length}
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mt-2 text-gray-400 font-secondary text-left mb-10">
                                        Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-white'>
                    <div className="projecs-listed bg-white sm:w-10/12 mx-auto">
                        <h1 className="font-extrabold font-primary text-gray-900 text-left text-3xl mt-10 mb-8">
                            Projects Listed
                        </h1>
                        <div
                            className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-14 mb-12">
                            {items.map((project, index) => (
                                <div className="w-full height-full" key={index}>
                                    <div
                                        className="h-full hover:shadow-[0_35px_60px_-15px_rgba(112,32,179,0.8)] transition duration-500 shadow-[0_60px_60px_-15px_rgba(0,0,0,0.3)] rounded-t-xl">
                                        <div className="flex flex-col justify-between">
                                            <div className="w-fit">
                                                <Image src={project.app_image} alt="project logo" className="rounded-t-xl"/>
                                            </div>
                                            <h1 className="font-bold pb-2 pt-4 capitalize sm:text-[20px] text-[18px] font-primary px-4">
                                                {project.title}
                                            </h1>
                                            <h2 className="text-md text-justify opacity-100 text-gray-400 px-4">{project.short_description}</h2>

                                            <div className="mt-12 mb-8 font-normal text-[#667085]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
