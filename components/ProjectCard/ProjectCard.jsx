import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import HeroBg from "../../public/assets/projects_hero_bg.png";
import CallToAction from "../Buttons/CallToAction";
import {GradientBorder} from "../GradientBorder/GradientBorder";

export const ProjectCard = ({project, user_type}) => {

    const [appImgSrc, setAppImgSrc] = useState("");
    // let fakeApprovedStatus = Math.random() < 0.5;

    const router = useRouter();

    useEffect(() => {

        if (project?.files && Object.keys(project.files).length > 0) {

            const logo_image = project?.files?.logo_image;
            const app_image = project?.files?.app_image;
            const pres_slides = project?.files?.pres_slides;

            // if there is an app_image, create a Base64-encoded ASCII string from the file_binary string
            // maybe use the recommended function instead of btoa
            if (app_image) {
                if (app_image.mime_type === "video/mp4") {
                    setAppImgSrc('data:video/mp4;base64,' + btoa(app_image.file_binary));
                } else {
                    setAppImgSrc('data:image/png;base64,' + btoa(app_image.file_binary));
                }
            }

            /* do the same for logo_image and pres_slides if needed */
            // if(logo_image) console.log(logo_image);
            // if(pres_slides) console.log(pres_slides);
        }

        return () => setAppImgSrc(null);
    }, []);

    return (
        <div
            className={`w-full rounded-[12px] transition duration-500 hover:shadow-[0_35px_60px_-15px_rgba(112,32,179,1)]`}>
            <GradientBorder>
                <div className="bg-white h-full rounded-lg">
                    <div className="h-full text-center shadow-[0_60px_60px_-15px_rgba(0,0,0,0.3)]">
                        <div className="rounded-t-lg overflow-hidden 1600px:h-[250px] h-[350px] relative">
                            {appImgSrc.includes("video/mp4") ?
                                <video className="object-cover rounded-t-lg" src={appImgSrc}
                                       autoPlay loop muted>
                                </video>
                                :
                                <Image
                                    src={project?.app_image || appImgSrc || HeroBg}
                                    alt={"no image"}
                                    layout="fill"
                                    className="object-cover rounded-t-lg"
                                />
                            }
                            {/*<Image*/}
                            {/*    src={project?.app_image || appImgSrc || HeroBg}*/}
                            {/*    alt={"no image"}*/}
                            {/*    layout="fill"*/}
                            {/*    className="object-cover rounded-t-lg"*/}
                            {/*/>*/}
                        </div>
                        <div className="flex flex-col justify-between gap-2 p-5">
                            <h1 className="text-black font-bold pb-2 pt-4 capitalize sm:text-[20px] text-[18px] font-primary">
                                id: {project.id}
                            </h1>
                            <h2 className="text-black">Status: <span style={{
                                color: project?.is_confirmed ? "green" : "red"
                            }}>{project?.is_confirmed ? "Approved" : "Not Approved"}</span></h2>
                            <h1 className="font-bold pb-2 pt-4 capitalize sm:text-[20px] text-[18px] font-primary text-black">
                                {project.title}
                            </h1>
                            {user_type === "Developer" && <div className={""}>
                                <p className='text-black'><span
                                    className="underline">Your Role:</span> {project.users_role_in_project}</p>
                                <p className='text-black'><span
                                    className="underline">Your rights in Project:</span> {project.rights_in_project}</p>
                                <p className='text-black'><span
                                    className="underline">Number of Devs:</span> {project?.devs_in_project?.length}</p>
                            </div>
                            }

                            <p className='text-black'><span className="underline">Category:</span> {project.category}
                            </p>
                            <p className='text-black'><span className="underline">Landing Page:</span><Link
                                href={project.landing_page || project.landing_page}><span
                                style={{color: "#ff9042", cursor: "pointer"}}>{project.landing_page}</span></Link></p>
                        </div>
                        {(router.pathname.includes("my-projects")) && <div className="">
                            <div className="flex items-center justify-center mb-12 mt-6">
                                <CallToAction
                                    text="Edit Project"
                                    classes="w-full"
                                    link="/edit-project"
                                    query={{id: project.id}}
                                />
                            </div>
                            <div className="flex items-center justify-center pb-5">
                                <CallToAction
                                    text="Show Details"
                                    classes="w-full"
                                    link="/project-details"
                                    query={{id: project.id}}
                                />
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </GradientBorder>
        </div>
    )
}