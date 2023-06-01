import {NextSeo} from "next-seo";
import React, {useEffect} from "react";

import Container from "../components/Container/Container";
import {useUserDataContext} from "../context/UserDataContextProvider";
import {api_backend} from "../utils/Constants/BackendURLs";
import {ProjectCard} from "../components/ProjectCard/ProjectCard";
import CallToAction from "../components/Buttons/CallToAction";
import {LoadingStyled} from "../components/LoadingStyled/LoadingStyled";
import Navbar from "../components/Navbar/Navbar";


export default function MyProjects() {

    const {ethAddr, userType, usersProjects, setUsersProjects} = useUserDataContext();

    const authData = {
        user_wallet: ethAddr,
        user_type: userType
    };

    useEffect(() => {
        if (usersProjects === null) {

            if (authData.user_wallet) {

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
                        // console.log("project retrieved");
                        // console.log(data);
                        if (data?.projects) {
                            // files dont need to be converted to files atm
                            // convertBinaryToFile(data.projects_with_files);
                            setUsersProjects(data.projects);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }
        }
        // ethAddr needed as dependency because it is not there right away,
        // and without it the request fails
    }, [authData, usersProjects]);


    if (usersProjects === null) {
        return (
            <LoadingStyled varsToWaitForArray={[usersProjects]} redirectTo={"/"} timeToWait={8000} />
        );
    }

    return (
        <>
            <NextSeo
                title="ZENCON Launchpad | Incoming next"
                description="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
            />
            <Navbar/>
            <main className="page-wrapper overflow-hidden relative">
                <div className="bg-gray-900">
                    <Container>
                        <div className="text-center pb-4 w-max-[50vw]">
                            <div className="flex flex-row justify-evenly">
                                <div>
                                    <h1 className="font-extrabold font-primary text-white text-center text-5xl mt-40">
                                        Your Projects
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] w-full mt-6 text-gray-400 font-secondary text-center mb-10">
                                        Here you can interact with your own projects or the ones you are taking part in.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-around">
                                <div className="flex flex-col w-[20%]">
                                    <h1 className="font-extrabold font-primary text-white text-center text-3xl mt-4">
                                        20,000
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] w-full mt-2 text-gray-400 font-secondary text-center mb-10">
                                        Your Followers
                                    </p>
                                </div>
                                <div className="flex flex-col w-[20%]">
                                    <h1 className="font-extrabold font-primary text-white text-center text-4xl mt-4">
                                        {typeof usersProjects === "object" ? Object.keys(usersProjects)?.length : 0}
                                    </h1>
                                    <p className="sm:text-[20px] text-[18px] w-full mt-2 text-gray-400 font-secondary text-center mb-10">
                                        Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="w-full bg-white pt-20">
                    <div className="sm:w-10/12 mx-auto text-white">
                        {usersProjects !== "0" && Object.keys(usersProjects)?.length > 0 ? <div
                                className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-14 mb-12 z-4">
                                {Object.values(usersProjects).map((project, index) => (
                                    <ProjectCard project={project} user_type={userType} key={index}></ProjectCard>
                                ))}
                            </div>
                            :
                            <div className="text-center mb-16">
                                {userType !== "Investor" ?
                                    <CallToAction
                                        text="Submit Your First Project!"
                                        link="/upload-project"
                                        classes='w-full'
                                    />
                                    :
                                    <CallToAction
                                        disabled={true}
                                        text="Invest In Your First Project!"
                                        link="/"
                                        classes='w-full'
                                    />
                                }
                            </div>

                        }
                    </div>
                </div>
            </main>
        </>
    );
}
