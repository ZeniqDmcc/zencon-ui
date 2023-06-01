import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Container from "../components/Container/Container";
import MultiInput from "../components/MultiInput/MultiInput";
import CallToAction from "../components/Buttons/CallToAction";
import {useUserDataContext} from "../context/UserDataContextProvider";
import {useUploadProjectContext} from "../context/UploadProjectContextProvider";
import {api_backend} from "../utils/Constants/BackendURLs";
import ProjectInfoFields from "../components/ProjectInfoFields/ProjectInfoFields";
import FileUploadFileds from "../components/FileUploadFields/FileUploadFileds";
import fileToBinaryEdit from "../utils/Helpers/fileToBinaryEdit"
import {LoadingStyled} from "../components/LoadingStyled/LoadingStyled";

export default function EditProject() {
    const {usersProjects, setUsersProjects, ethAddr, userType} = useUserDataContext();
    const {devsInProject, setDevsInProject} = useUploadProjectContext();
    const router = useRouter();
    const {id} = router.query;
    // const project = usersProjects[id];

    const [project, setProject] = useState(null);

    useEffect(() => {
        // if (!project) router.push("/my-projects");

        if (!usersProjects) {
            router.push("/my-projects");
            return;
        }

        setProject(usersProjects[id]);
        // console.log(usersProjects[id]);

        setDevsInProject(project?.devs_in_project);
        setProjectTitle(project?.title);
        setShortDescription(project?.short_description);
        setDetailedDescription(project?.detailed_description);
        setCategory(project?.category);
        setTargetIndustry(project?.target_industry);
        setLandingPage(project?.landing_page);
        setProjectRole(project?.users_role_in_project);
        setVideo(project?.video_link);

    }, [project]);


    function fetchDeleteProject() {
        fetch(`${api_backend}/project/delete_project`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                project_rec_id: id,
                user_wallet: ethAddr,
                user_type: userType,
            }),
        })
            .then((response) => response.json())
            .then(data => {
                // console.log("project deleted on the server");
                // console.log(data);
                if (data.deleted_project_id) {
                    delete usersProjects[id];
                    router.push("/my-projects");
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }


    /* FORM THINGS */
    const [projectTitle, setProjectTitle] = useState(project?.title)
    const handleUserInputChangeTitle = (e) => {
        setProjectTitle(e.target.value);
    }
    const [shortDescription, setShortDescription] = useState(project?.short_description)
    const handleUserInputChangeShortDescription = (e) => {
        setShortDescription(e.target.value);
    }
    const [detailedDescription, setDetailedDescription] = useState(project?.detailed_description)
    const handleUserInputChangeDetailedDescription = (e) => {
        setDetailedDescription(e.target.value);
    }
    const [category, setCategory] = useState(project?.category);
    const handleUserInputChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    const [targetIndustry, setTargetIndustry] = useState(project?.target_industry)
    const handleUserInputChangeTargetIndustry = (e) => {
        setTargetIndustry(e.target.value);
    }
    const [landingPage, setLandingPage] = useState(project?.landing_page)
    const handleUserInputChangeLandingPage = (e) => {
        setLandingPage(e.target.value);
    }
    const [projectRole, setProjectRole] = useState(project?.users_role_in_project)
    const handleUserInputChangeRole = (e) => {
        setProjectRole(e.target.value);
    }
    const [video, setVideo] = useState(project?.video_link)
    const handleUserInputChangeVideo = (e) => {
        setVideo(e.target.value);
    }
    /* FORM THINGS */


    /* FILE THINGS */
    const handleUserInputChangeLogoImage = (e) => {
        fileToBinaryEdit(e?.target?.files[0], "logo_image", usersProjects, setUsersProjects, id);
    }



    const handleUserInputChangeAppImage = (e) => {

        fileToBinaryEdit(e?.target?.files[0], "app_image", usersProjects, setUsersProjects, id);
    }
    const handleUserInputChangePresSlides = (e) => {
        fileToBinaryEdit(e?.target?.files[0], "pres_slides", usersProjects, setUsersProjects, id);
    }
    /* props that go to file upload component*/
    let fileUploadProps = {
        handleUserInputChangeLogoImage,
        handleUserInputChangeAppImage,
        handleUserInputChangePresSlides
    }
    /* FILE THINGS */


    /* data that goes to confirmation page */
    let projectInfo = {
        id: id,
        title: projectTitle,
        short_description: shortDescription,
        detailed_description: detailedDescription,
        category: category,
        target_industry: targetIndustry,
        landing_page: landingPage,
        users_role_in_project: projectRole,
        video_link: video
    }

    /* props that go to project info component*/
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

    if (!project) {
        return (
            <LoadingStyled varsToWaitForArray={[project]} timeToWait={5000} redirectTo={"my-projects"}/>
        );
    }

    return (
        <>
            <main className="page-wrapper min-h-screen overflow-hidden relative">
                <div className="bg-gray-900">
                    <Container>
                        <div className="text-center pb-4 w-max-[50vw]">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <h1 className="capitalize font-extrabold font-primary text-white text-left text-6xl mt-40">
                                        You can edit <span
                                        className="text-[#E9963CFF]">{project?.title || "your project"}</span> below.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </Container>
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
                                    text="Show Details"
                                    classes="w-full"
                                    link="/project-details"
                                    query={{id: project.id}}
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-full">
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                                <ProjectInfoFields {...projectInfoProps} />
                                <hr/>
                                <p className="mt-6 text-black text-2xl text-center">Who else is in the project?</p>
                                {devsInProject && <MultiInput/>}
                                <FileUploadFileds {...fileUploadProps}></FileUploadFileds>
                                <div className="flex items-center justify-center">
                                    <CallToAction
                                        text="Save and Continue"
                                        classes="w-full"
                                        link="/confirmation-page"
                                        query={{
                                            apiEndpoint: 1,
                                            fromEditPage: true,
                                            id,
                                            projectInfo: new URLSearchParams(projectInfo).toString()
                                        }}
                                    />
                                </div>
                                <div className="mt-16 flex items-center justify-center">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            confirmAlert({
                                                title: 'Confirm to delete',
                                                message: 'Are you sure you want to delete this project?',
                                                buttons: [
                                                    {
                                                        label: 'Yes',
                                                        onClick: () => {
                                                            fetchDeleteProject();
                                                            // router.push("/my-projects");
                                                        }
                                                    },
                                                    {
                                                        label: 'No'
                                                    }
                                                ]
                                            });
                                        }}
                                        className={`capitalize hover:bg-[#f4a12f] bg-red-900  transition-colors disabled:bg-black px-6 text-white py-2 rounded-md text-uppercase text-sm font-medium font-primary sm:w-auto`}
                                    >
                                        Delete Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}



