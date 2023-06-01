import {NextSeo} from "next-seo";
import Container from "../components/Container/Container";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import {useUserDataContext} from "../context/UserDataContextProvider";
import {useRouter} from "next/router";
import {LoadingStyled} from "../components/LoadingStyled/LoadingStyled";
import CallToAction from "../components/Buttons/CallToAction";
import Image from "next/image";
import HeroBg from "../public/assets/projects_hero_bg.png";
import datalink from "../public/assets/projects/Datalink/index.png";
import truecommit from "../public/assets/projects/Truecommit/logo.png";
import nfarm from "../public/assets/projects/Nfarm/logo.png";
import infilmart from "../public/assets/projects/infilmart/index.png";
import fidora from "../public/assets/projects/Fidora/logo.png";
import huitzil from "../public/assets/projects/Huitzil/index.png";
import tupan from "../public/assets/projects/Tupan/tupan.png";
import avinoc from "../public/assets/projects/Avinoc/avinoc.jpg";
import {useState} from "react";
import {api_backend} from "../utils/Constants/BackendURLs";

export default function MentorDashboard() {

    const {isAuthed, userWallet, ethAddr} = useUserDataContext();

    const [showProjects, setShowProjects] = useState(false);

    const router = useRouter();

    if (!isAuthed || !userWallet) {
        return (
            <LoadingStyled redirectTo={"/"} timeToWait={2000} varsToWaitForArray={[isAuthed, userWallet]}/>
        )
    }

    const items = [
        {
            id: 1,
            title: "DATALINK",
            authors: "Developer",
            shortDescription:
                "The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.",
            detailedDescription: "The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.\n" +
                "The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.The DataLink DAO will be a service that supports companies with NFT credentialing of their data and assets. The verified data NFT, signed by the contributor would validate the recipient's data within on a fully traceable ledger. Any validator in the future could verify that data via automated calls due to the truth mechanism being implemented in the data-sharing DAO.",
            imgPath: datalink,
            link: "https://datalinkdao.com/",
        },
        {
            id: 2,
            title: "TRUE COMMIT",
            authors: "Investor",
            shortDescription:
                "True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.",
            detailedDescription: "True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.\n" +
                "True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.True Commit allows fundraisers to publish campaigns with defined goals (vaults) held in immutable executor smart contracts. Funds are held in a contract, and once a goal is reached, the funds go directly towards the end purpose, whether it's a direct purchase via an API (such as Amazon.com), redeeming crypto tokens (such as Golem), or a particular service contract.",
            imgPath: truecommit,
            link: "https://truecommit.link/",
        },
        {
            id: 3,
            title: "NFARM",
            authors: "Developer",
            shortDescription:
                "NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.",
            detailedDescription: "NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.\n" +
                "NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.NFarm is an NFT platform for certification of animal source food, facilitating the normative of exportation. NFTs and blockchain are the perfect tools to help breeders to support and track their quality on their job and provide comfort to the final consumer with their product, providing quick traceability for all cattle´s treatment.",
            imgPath: nfarm,
            link: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
        },
        {
            id: 4,
            title: "INFILMART",
            authors: "Developer",
            shortDescription:
                "La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.",
            detailedDescription: "La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.\n" +
                "La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.La calidad y pasión que tiene cada uno de los artistas con experiencia y reconocimiento internacional; son pocos NFTs, por eso su plusvalía. El poseedor de la colección completa gana al vender a un precio más alto y también de las ventas de la película, con puntos porcentuales generados gracias al Smart contract. La magia ocurre con tu compra, eres un héroe que apoya a la creación de arte y cine.",
            imgPath: infilmart,
            link: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
        },
        {
            id: 5,
            title: "FIDORA",
            authors: "Visitor",
            shortDescription:
                "FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.",
            detailedDescription: "FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.\n" +
                "FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.FiDoRA combines the freedom of decentralized finance with the power and flexibility of tokenization into one cheap and easy mobile app for real asset investors.\n" +
                "0.5 Stars\n",
            imgPath: fidora,
            link: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
        },
        {
            id: 6,
            title: "HUITZIL",
            authors: "Developer",
            shortDescription: "Huitzil brings people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.",
            imgPath: huitzil,
            detailedDescription: "Huitzil brings people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.To bring people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.To bring people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.To bring people unfamiliar with or unaware of blockchain’s environment to use our smart contract builder that allows you to create any kind of it using a drag-and-drop interface. No code experience. Anyone can create helpful smart contracts within minutes.",
            link: "https://leonardo-avelar.gitbook.io/zeniq-smart-chain-documentation/",
        },
        {
            id: 7,
            title: "TUPAN",
            authors: "Developer",
            shortDescription:
                "The Tupan Token was born to simply and assertively, achieve the necessary transition to a regenerative and circular economy. By joining the high technology of cryptocurrencies and the blockchain network, with the most extraordinary demands of the century, Tupan brings you the opportunity to make a difference in the environment while enjoying an investment with a high potential for appreciation.",
            detailedDescription: "The Tupan Token was born to simply and assertively, achieve the necessary transition to a regenerative and circular economy. By joining the high technology of cryptocurrencies and the blockchain network, with the most extraordinary demands of the century, Tupan brings you the opportunity to make a difference in the environment while enjoying an investment with a high potential for appreciation.",
            imgPath: tupan,
            link: "https://www.tupan.io/",
        },
        {
            id: 8,
            title: "AVINOC",
            authors: "Developer",
            shortDescription:
                "AVINOC is a tokenization company dedicated to integrating new technologies in aviation. It’s driving change and transformation throughout the entire industry. The innovative tokenization services and projects led by AVINOC are designed to connect the legacy system and the crypto-economy into a single functional, transparent and highly secure ecosystem.",
            detailedDescription: "AVINOC is a tokenization company dedicated to integrating new technologies in aviation. It’s driving change and transformation throughout the entire industry. The innovative tokenization services and projects led by AVINOC are designed to connect the legacy system and the crypto-economy into a single functional, transparent and highly secure ecosystem.",
            imgPath: avinoc,
            link: "https://avinoc.com/",
        },
    ];


    function fetchAllProjects(){
        fetch(`${api_backend}/project/get_projects`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(authData),
        })
            .then((response) => response.json())
            .then(data => {
                console.log("project retrieved");
                console.log(data);

                if (data?.projects_with_files) {
                    setProjectsResponse(data.projects_with_files);
                    convertBinaryToFile(data.projects_with_files);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <>
            <NextSeo
                title="ZENCON Launchpad | Incoming next"
                description="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
            />
            <section id='dashboard' className="grow py-14 bg-gray-900 bg-no-repeat bg-cover text-white h-[600px]">
                <Container>
                    <h1 className="mt-20 pt-20 mb-8 text-center text-7xl font-extrabold font-primary">
                        Welcome to Mentor Dashboard
                    </h1>
                    <p className="sm:text-[20px] text-[18px]font-secondary text-center text-gray-400 mb-8 md:text-[20px] mt-6">
                        {"Wallet address: " + userWallet}
                    </p>
                    <p className="sm:text-[20px] text-[18px]font-secondary text-center text-gray-400 mb-8 md:text-[20px] mt-6">
                        {"ETH address: " + ethAddr}
                    </p>

                    <div className="flex items-center justify-center">
                        <CallToAction
                            text="All PublicProjects"
                            classes="w-full"
                            link=""
                            onClick={() => {
                                // console.log("get every single submitted project please");
                                setShowProjects((prevState) => !prevState);
                            }}
                        />
                    </div>

                </Container>
            </section>

            <main className="page-wrapper min-h-screen overflow-hidden relative">

                <div className='w-full bg-white'>
                    <div className="projecs-listed bg-white sm:w-10/12 mx-auto">
                        <h1 className="font-extrabold font-primary text-gray-900 text-left text-3xl mt-10 mb-8">
                            PublicProjects Listed
                        </h1>
                        <div
                            className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-14 mb-12">
                            {showProjects && items.map((item, index) => (
                                <div className="w-full height-full" key={index}>
                                    <div
                                        className="h-full hover:shadow-[0_35px_60px_-15px_rgba(112,32,179,0.8)] transition duration-500 shadow-[0_60px_60px_-15px_rgba(0,0,0,0.3)] rounded-t-xl">
                                        <div className="flex flex-col justify-between">
                                            <div className="w-fit">
                                                <Image src={item.imgPath} alt="project logo" className="rounded-t-xl"/>
                                            </div>
                                            <h1 className="font-bold pb-2 pt-4 capitalize sm:text-[20px] text-[18px] font-primary px-4">
                                                {item.title}
                                            </h1>
                                            <h2 className="text-md text-justify opacity-100 text-gray-400 px-4">{item.shortDescription}</h2>
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
