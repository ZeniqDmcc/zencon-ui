import React, {useEffect, useState} from "react";
import Container from "../components/Container/Container";
import CallToAction from "../components/Buttons/CallToAction";
import {useUploadProjectContext} from "../context/UploadProjectContextProvider";
import MultiInput from "../components/MultiInput/MultiInput";
import ProjectInfoFields from "../components/ProjectInfoFields/ProjectInfoFields";
import FileUploadFileds from "../components/FileUploadFields/FileUploadFileds";
import fileToBinaryUpload from "../utils/Helpers/fileToBinaryUpload";
import Navbar from "../components/Navbar/Navbar";

export default function UploadProjects() {

    const {setProjectFiles, setDevsInProject} = useUploadProjectContext();
    const [isAllFilledOut, setIsAllFilledOut] = useState(false);

    useEffect(() => {
        // clear whatever is in devsInProject context variable
        setDevsInProject([{dev_wallet_address: '', rights_in_project: 'Participant'}]);
    }, []);


    /* FORM THINGS */
    const [projectTitle, setProjectTitle] = useState('')
    const handleUserInputChangeTitle = (e) => {
        setProjectTitle(e.target.value);
    }
    const [shortDescription, setShortDescription] = useState('')
    const handleUserInputChangeShortDescription = (e) => {
        setShortDescription(e.target.value);
    }
    const [detailedDescription, setDetailedDescription] = useState('')
    const handleUserInputChangeDetailedDescription = (e) => {
        setDetailedDescription(e.target.value);
    }
    const [category, setCategory] = useState('Web3 Infrastructure')
    const handleUserInputChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    const [targetIndustry, setTargetIndustry] = useState('')
    const handleUserInputChangeTargetIndustry = (e) => {
        setTargetIndustry(e.target.value);
    }
    const [landingPage, setLandingPage] = useState('')
    const handleUserInputChangeLandingPage = (e) => {
        setLandingPage(e.target.value);
    }
    const [projectRole, setProjectRole] = useState('Manager')
    const handleUserInputChangeRole = (e) => {
        setProjectRole(e.target.value);
    }
    const [video, setVideo] = useState('')
    const handleUserInputChangeVideo = (e) => {
        setVideo(e.target.value);
    }
    useEffect(() => {
        if (projectTitle && shortDescription && detailedDescription && category && targetIndustry && landingPage && projectRole && video) {
            setIsAllFilledOut(true);
        } else {
            setIsAllFilledOut(false);
        }
    }, [projectTitle, shortDescription, detailedDescription, category, targetIndustry, landingPage, projectRole, video]);
    /* FORM THINGS */


    /* FILE THINGS */
    const handleUserInputChangeLogoImage = (e) => {
        if (fileToBinaryUpload(e?.target?.files[0], "logo_image", setProjectFiles)) {
            // console.log("too asd  much");
        }
    }
    const handleUserInputChangeAppImage = (e) => {
        if (fileToBinaryUpload(e?.target?.files[0], "app_image", setProjectFiles)) {
            // console.log("too asd  much");
        }
    }
    const handleUserInputChangePresSlides = (e) => {
        if (fileToBinaryUpload(e?.target?.files[0], "pres_slides", setProjectFiles)) {
            // console.log("too asd  much");
        }
    }
    let fileUploadProps = {
        handleUserInputChangeLogoImage,
        handleUserInputChangeAppImage,
        handleUserInputChangePresSlides
    }
    /* FILE THINGS */

    /* data that goes to confirmation page */
    let projectInfo = {
        title: projectTitle,
        short_description: shortDescription,
        detailed_description: detailedDescription,
        category: category,
        target_industry: targetIndustry,
        landing_page: landingPage,
        users_role_in_project: projectRole,
        video_link: video
    }

    /* FORM props */
    let projectInfoProps = {
        ...projectInfo,
        handleUserInputChangeTitle,
        handleUserInputChangeShortDescription,
        handleUserInputChangeDetailedDescription,
        handleUserInputChangeCategory,
        handleUserInputChangeTargetIndustry,
        handleUserInputChangeLandingPage,
        handleUserInputChangeRole,
        handleUserInputChangeVideo
    }


    return (
        <>
        <Navbar/>
            <main className="page-wrapper min-h-screen overflow-hidden relative">
                <div className="bg-gray-900">
                    <Container>
                        <div className="text-center pb-4 w-max-[50vw]">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <h1 className="capitalize font-extrabold font-primary text-white text-left text-6xl mt-40">
                                        Wanna push <br/>your Web3 Project <br/>to the next level?{" "}
                                    </h1>
                                    <h1 className="capitalize font-extrabold font-primary text-[#E9963CFF] text-left text-6xl mt-1">
                                        You{"'re"} at the right place!
                                    </h1>
                                    <p
                                        className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mt-6 text-gray-400 font-secondary text-left mb-10 max-w-[50%]">
                                        Filling up your project details below is the first step to get your process
                                        listed on the
                                        ZENCON{"'"}s Launchpad and your chance to get invited to the NEXT ZENCON
                                        EDITION!
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <p
                                        className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mt-2 text-gray-400 font-secondary text-left whitespace-nowrap">
                                        Community of
                                    </p>
                                    <h1 className="font-extrabold font-primary text-white text-left text-4xl ">
                                        750+
                                    </h1>
                                    <p
                                        className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-400 font-secondary text-left mb-10 whitespace-nowrap">
                                        Web3 Developers
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p
                                        className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mt-2 text-gray-400 font-secondary text-left whitespace-nowrap">
                                        Coming from
                                    </p>
                                    <h1 className="font-extrabold font-primary text-white text-left text-4xl">
                                        53
                                    </h1>
                                    <p
                                        className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-400 font-secondary text-left mb-10 whitespace-nowrap">
                                        Different countries
                                    </p>

                                </div>
                                <div className="flex flex-col">
                                    <p
                                        className="sm:text-[20px] text-[18px] sm:w-9/12 w-full  text-gray-400 font-secondary text-left whitespace-nowrap">
                                        More than
                                    </p>
                                    <h1 className="font-extrabold font-primary text-white text-left text-4xl ">
                                        2000
                                    </h1>
                                    <p
                                        className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-400 font-secondary text-left mb-10 whitespace-nowrap">
                                        Smart Contracts deployed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='w-full bg-white'>
                    <div className="bg-white sm:w-10/12 mx-auto">
                        <h1 className="font-extrabold font-primary text-gray-900 text-left text-3xl mt-10 mb-8">
                            Project Information
                        </h1>
                        <div className="w-full max-w-full">
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                                <ProjectInfoFields {...projectInfoProps} />
                                <hr/>
                                <p className="mt-6 text-black text-2xl text-center">Who else is in the project?</p>
                                <MultiInput/>
                                <FileUploadFileds {...fileUploadProps}/>
                                <div className="flex items-center justify-center">
                                    <CallToAction
                                        disabled={!isAllFilledOut}
                                        text="Save and Continue"
                                        classes="w-full"
                                        link="/confirmation-page"
                                        query={{
                                            apiEndpoint: 0,
                                            projectInfo: new URLSearchParams(projectInfo).toString()
                                        }}
                                    />
                                </div>
                                <div>
                                    <p className={`${isAllFilledOut && "hidden"} text-red-500 mt-6 text-black text-2xl text-center underline`}>
                                        Some data is still missing! You cannot submit your project with missing information.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}