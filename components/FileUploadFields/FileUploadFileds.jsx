import React, {useEffect, useState} from "react";
import {useUploadProjectContext} from "../../context/UploadProjectContextProvider";
import {InputElement} from "./InputElement";
import {useUserDataContext} from "../../context/UserDataContextProvider";
import {useRouter} from "next/router";

export default function FileUploadFileds(props) {

    /*
    * when editing a project then the new files will be written to the context where
    * all the projects are saved, but when the project does not exist the new files cannot be
    * saved there, so an extra state is needed for uploading a new project with files for the first time
    * */

    // needed for upload
    const {projectFiles} = useUploadProjectContext(); // the files that will be uploaded

    // needed for editing existing project
    const {usersProjects} = useUserDataContext(); // all projects
    const [logoImage, setLogoImage] = useState();
    const [appImage, setAppImage] = useState();
    const [presSlides, setPresSlides] = useState();

    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        if (id) {
            // get the files from the context
            setLogoImage(usersProjects[id]?.files?.logo_image);
            setAppImage(usersProjects[id]?.files?.app_image);
            setPresSlides(usersProjects[id]?.files?.pres_slides);
        }
    }, [usersProjects]);


    return (
        <div className="flex justify-evenly flex-wrap gap-14 mb-10">
            <InputElement title="Logo Image"
                          inputFiledId={"dropzone-file-logoimage"}
                          file={projectFiles["logo_image"] || logoImage}
                          setFile={props.handleUserInputChangeLogoImage}/>

            <InputElement title="App Image"
                          inputFiledId={"dropzone-file-appimage"}
                          file={projectFiles["app_image"] || appImage}
                          setFile={props.handleUserInputChangeAppImage}/>

            <InputElement title="Presentation Slides"
                          inputFiledId={"dropzone-file-presentation"}
                          file={projectFiles["pres_slides"] || presSlides}
                          setFile={props.handleUserInputChangePresSlides}/>
        </div>
    )
}