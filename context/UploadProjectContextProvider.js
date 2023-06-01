import {createContext, useContext, useEffect, useState} from "react";


const UploadProjectContext = createContext({});

export function useUploadProjectContext() {
    return useContext(UploadProjectContext);
}

export default function UploadProjectContextProvider({children}) {


    const [devsInProject, setDevsInProject] = useState([{dev_wallet_address: '', rights_in_project: 'Participant'}]);
    const [projectFiles, setProjectFiles] = useState([]);

    return (
        <UploadProjectContext.Provider value={
            {
                projectFiles,
                setProjectFiles,
                devsInProject,
                setDevsInProject
            }
        }>{children}</UploadProjectContext.Provider>
    )
}