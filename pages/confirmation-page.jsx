import {NextSeo} from "next-seo";
import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'

import Container from "../components/Container/Container";
import CallToAction from "../components/Buttons/CallToAction";
import {useUserDataContext} from "../context/UserDataContextProvider";
import {confirmation_page_endpoints, api_backend} from "../utils/Constants/BackendURLs";
import {useUploadProjectContext} from "../context/UploadProjectContextProvider";
import {Loading} from "../components/Loading/Loading";
import MultiInput from "../components/MultiInput/MultiInput";
import ProjectInfoFields from "../components/ProjectInfoFields/ProjectInfoFields";
import FileUploadFileds from "../components/FileUploadFields/FileUploadFileds";
import {LoadingStyled} from "../components/LoadingStyled/LoadingStyled";

export default function ConfirmationPage() {

    const [dataSent, setDataSent] = useState(false);
    const [project, setProject] = useState({});
    const {ethAddr, userType, usersProjects, setUsersProjects} = useUserDataContext();
    const {projectFiles, setProjectFiles, devsInProject, setDevsInProject} = useUploadProjectContext();
    const router = useRouter();

    const queryParams = router.query;
    const {id, fromEditPage, apiEndpoint} = queryParams;

    // filtering out apiEndpoint key; it is not needed for the backend
    const filteredParams = Object.fromEntries(Object.entries(queryParams).filter(([key, value]) => key !== 'apiEndpoint'));

    // convert searchparams string back to object
    useEffect(() => {
        if (filteredParams.projectInfo !== undefined) {
            setProject(JSON.parse('{"' + filteredParams.projectInfo.replace(/&/g, '","').replace(/\+/g, ' ').replace(/=/g, '":"') + '"}', function (key, value) {
                return key === "" ? value : decodeURIComponent(value);
            }));
        }
    }, []);


    // object ready to be sent to backend
    const projectData = {
        ...project,
        user_wallet: ethAddr,
        user_type: userType,
        devs_in_project: devsInProject.filter(dev => dev.dev_wallet_address !== ""),
        files: queryParams.fromEditPage ? usersProjects[id]?.files : projectFiles
    };

    let projectInfoProps = {
        ...project
    }

    function sendProjectData(data) {

        fetch(`${api_backend}/project/${confirmation_page_endpoints[apiEndpoint]}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(data => {
                // console.log("project submitted");
                // console.log(data);
                // clear all projects, so they get refetched when user gets redirected
                // to my-projects page and the new project will be included -> not optimal
                setUsersProjects(null);
                if (data?.message.includes("already exists")) {
                    alert("Project with this title already exists!");
                    router.push("/upload-project");
                    return;
                }
                router.push("my-projects");
            })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        return () => {
            setProjectFiles([]);
            setDevsInProject([{dev_wallet_address: '', rights_in_project: 'Participant'}]);
        }
    }, []);


    if (Object.keys(project)?.length === 0) {
        return (
            <div>
                <LoadingStyled redirectTo={"/"} timeToWait={500}/>
            </div>
        );
    }
    if (dataSent) {
        return (
            <div>
                <LoadingStyled />
            </div>
        );
    }

    return (
        <>
            <NextSeo
                title="ZENCON Launchpad | Incoming next"
                description="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
            />
            <main className="page-wrapper min-h-screen overflow-hidden relative">
                <div className="bg-gray-900">
                    <Container>
                        <div className="text-center pb-4 w-max-[50vw]">
                            <div className="flex flex-row justify-between">
                                <div>

                                    {fromEditPage ?
                                        <div>
                                            <h1
                                                className="capitalize font-extrabold font-primary text-white text-left text-6xl mt-40">
                                                Check your updated project please
                                            </h1>
                                        </div>
                                        :
                                        <div>
                                            <h1
                                                className="capitalize font-extrabold font-primary text-white text-left text-6xl mt-40">
                                                Almost There! <br/> Review your project info
                                            </h1>
                                            <h1 className="capitalize font-extrabold font-primary text-[#E9963CFF] text-left text-6xl mt-1">
                                                and Confirm!
                                            </h1>
                                            <p
                                                className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mt-6 text-gray-400 font-secondary text-left mb-10 max-w-[50%]">
                                                Make sure your are not forgetting any essential information before
                                                submitting
                                                your project for
                                                analysis.
                                                Once your project is submitted, you will only be able to edit it once
                                                our
                                                experts finished the
                                                evaluation.
                                            </p>
                                        </div>
                                    }
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>


                <div className='w-full bg-white'>

                    <div className="bg-white sm:w-10/12 mx-auto">
                        {fromEditPage ?
                            <h1 className="font-extrabold font-primary text-gray-900 text-left text-3xl mt-10 mb-8">
                                Your updated project data
                            </h1>
                            :
                            <h1 className="font-extrabold font-primary text-gray-900 text-left text-3xl mt-10 mb-8">
                                Please confirm project info below
                            </h1>
                        }

                        <div className="w-full max-w-full">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                            }} className="bg-white shadow-md rounded px-8 pt-6 pb-8">

                                <ProjectInfoFields {...projectInfoProps} readOnly={true}/>
                                <hr/>
                                {devsInProject.length > 1 && <div>
                                    <p className="mt-6 text-black text-2xl text-center">Other Developers in the
                                        project:</p>
                                    <MultiInput readOnly={true}/>
                                </div>}

                                <FileUploadFileds/>

                                <div className="flex items-center justify-center mt-8">
                                    <CallToAction
                                        text="Submit for Evaluation"
                                        classes="w-full"
                                        // link="/dashboard"
                                        onClick={() => {
                                            sendProjectData(projectData);
                                            setDataSent(true);
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}