import {useUserDataContext} from "../context/UserDataContextProvider";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import HeroBg from "../public/assets/projects_hero_bg.png";
import CallToAction from "../components/Buttons/CallToAction";
import {LoadingStyled} from "../components/LoadingStyled/LoadingStyled";

export default function ProjectDetails() {

    const {usersProjects, ethAddr, userType} = useUserDataContext();
    const router = useRouter();
    const {id} = router.query;

    const [project, setProject] = useState(null);

    let fakeApprovedStatus = Math.random() < 0.5;

    const [logoImageSrc, setLogoImageSrc] = useState("");
    const [appImgSrc, setAppImgSrc] = useState("");
    const [presSlidesSrc, setPresSlidesSrc] = useState("");


    useEffect(() => {
    
        if (!usersProjects) {
            router.push("/my-projects");
            return;
        }

        setProject(usersProjects[id]);

        if (project?.files && Object.keys(project.files).length > 0) {

            const logo_image = project?.files?.logo_image;
            const app_image = project?.files?.app_image;
            const pres_slides = project?.files?.pres_slides;

            // if there is an app_image, create a Base64-encoded ASCII string from the file_binary string
            // maybe use the recommended function instead of btoa
            if (logo_image) {
                setLogoImageSrc('data:image/png;base64,' + btoa(app_image.file_binary));
            }

            if (app_image) {
                if (app_image.mime_type === "video/mp4") {
                    setAppImgSrc('data:video/mp4;base64,' + btoa(app_image.file_binary));
                } else {
                    setAppImgSrc('data:image/png;base64,' + btoa(app_image.file_binary));
                }
            }

            if (pres_slides) {
                setPresSlidesSrc('data:image/png;base64,' + btoa(app_image.file_binary));
            }
        }

        return () => {
            setLogoImageSrc("");
            setAppImgSrc("");
            setPresSlidesSrc("");
        }

    }, [project]);


    if (!project) {
        return (
            <LoadingStyled redirectTo={"my-projects"} timeToWait={5000} varToWaitFor={[project]}/>
        );
    }

    return (
        <>
            <main className="page-wrapper overflow-hidden relative">
                {/*<div className="bg-gray-600">*/}
                <div className="bg-heroBg bg-no-repeat bg-cover bg-center bg-fixed min-h-full"
                     style={{backgroundImage: `url(${appImgSrc ? appImgSrc : HeroBg})`}}>
                    {appImgSrc.includes("video") &&
                        <video className="object-cover fixed z-[-1]" src={appImgSrc}
                               autoPlay loop muted>
                        </video>
                    }
                    <div className="sm:w-10/12 w-full sm:px-0 px-4 mt-40 mx-auto h-full">
                        <div className="text-center p-8 w-max-[50vw] bg-[#1B1934FF]/50 rounded-t-3xl h-full">
                            <div className="flex flex-row justify-center">
                                <div>
                                    <h1 className="capitalize font-extrabold font-primary text-[#E9963CFF] text-center text-6xl">
                                        {project.title}
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] text-center w-full mt-6 text-gray-300 font-secondary text-left mb-10">
                                        {project.short_description}
                                      
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Category
                                    </p>
                                    <h1 className="font-extrabold font-primary text-white text-center text-2xl ">
                                        {project.category}
                                    </h1>
                                </div>
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Landing Page
                                    </p>
                                    <h1 className="font-extrabold font-primary text-white text-center text-2xl">
                                        <Link
                                            href={project.landing_page}><span
                                            style={{
                                                color: "#ff9042",
                                                cursor: "pointer"
                                            }}>{project.landing_page}</span></Link>
                                    </h1>
                                </div>
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Number of Devs
                                    </p>
                                    <h1 className="font-extrabold font-primary text-white text-center text-2xl ">
                                        {project.devs_in_project.length}
                                    </h1>
                                </div>
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Target Industry
                                    </p>
                                    <h1 className="font-extrabold font-primary text-white text-center text-2xl ">
                                        {project.target_industry}
                                    </h1>
                                </div>
                                <div className="flex flex-col">
                                    <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full text-gray-300 font-secondary text-center whitespace-nowrap">
                                        Status
                                    </p>
                                    <h1 className="font-extrabold font-primary text-white text-center text-2xl ">
                                        <span style={{
                                            color: project.is_confirmed ? "green" : "red"
                                        }}>{project.is_confirmed ? "Approved" : "Not Approved"}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-white'>
                    <div className="bg-white sm:w-10/12 mx-auto">
                        <div className="mt-8 mb-8 flex justify-between">
                            <div>
                                <CallToAction
                                    text="Back to Projects"
                                    classes="w-full"
                                    link="/my-projects"
                                />
                            </div>
                            <div>
                                <CallToAction
                                    text="Edit Project"
                                    classes="w-full"
                                    link="/edit-project"
                                    query={{id: project.id}}
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-full">
                            <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-20">
                                <h1 className="font-extrabold font-primary text-gray-900 text-left text-2xl mt-10 mb-8">Description</h1>
                                <p className="sm:text-[20px] text-[18px] w-full text-gray-600 font-secondary ">
                                    {project.detailed_description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </>

    )
}