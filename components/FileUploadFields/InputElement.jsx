import {DeleteOutlined, FileImageOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import {confirmAlert} from "react-confirm-alert";
import {useUserDataContext} from "../../context/UserDataContextProvider";

const BeforeUpload = ({hint, htmlFor}) => {
    // component for when no file is selected
    return (
        <label htmlFor={htmlFor}
               className="mr-0 flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col justify-center items-center">
                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400"
                     fill="none"
                     stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                    className="font-semibold">Click to upload</span> or drag and
                    drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{hint}</p>
            </div>
        </label>
    )
}

const AfterUpload = ({file, setFile, onConfirmationPage, onEditPage}) => {
    // component for when file has been selected or it is found in the context

    const {usersProjects, setUsersProjects} = useUserDataContext();
    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <FileImageOutlined style={{fontSize: '40px', color: '#08c', padding: '20px'}}/>
            <p className="text-black text-center text-ellipsis whitespace-nowrap overflow-hidden max-w-[160px]">{file.file_name}</p>
            <p className="text-black text-center">{'~'}{Math.ceil(file?.file_binary?.length / 1024 / 1024)}{' Mb'}</p>
            {/*
                if this component is on the edit page, then the files are already uploaded and a confirmation is needed to delete them,
                but if on upload page then confirmation is not needed;
                if on confirmation page do not show delete bubtton at all
            */}
            {!onConfirmationPage && (onEditPage ?
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        confirmAlert({
                            title: 'Confirm to delete',
                            message: `Are you sure you want to delete this file?`,
                            buttons: [
                                {
                                    label: 'Yes',
                                    onClick: () => {
                                        const old_files = usersProjects[id].files; // current files from the context
                                        // filter out (delete) the one on which the trash button has been clicked and update the context
                                        const new_files = Object.keys(old_files)
                                            .filter(key => key !== file.file_type)
                                            .reduce((result, key) => ({
                                                ...result,
                                                [key]: old_files[key]
                                            }), {});
                                        // console.log(new_files);
                                        // update the context
                                        setUsersProjects(prevState => ({
                                            ...prevState,
                                            [id]: {
                                                ...usersProjects[id],
                                                files: new_files
                                            }
                                        }));
                                    }
                                },
                                {
                                    label: 'No'
                                }
                            ]
                        });
                    }}
                    className="hover:scale-[1.1] transition duration-100"
                >
                    <DeleteOutlined style={{fontSize: '30px', color: '#7d1d1d'}}/>
                </button>
                :
                <button className="hover:scale-[1.1] transition duration-100"
                        onClick={() => {
                            // this setFile is not a setState directly!!! it leads to the  fileToBinaryUpload function
                            setFile(null);
                        }}>
                    <DeleteOutlined style={{fontSize: '30px', color: '#7d1d1d', padding: '20px'}}/>
                </button>)
            }
        </>
    )
}

const FileInputField = ({inputFiledId, setFile}) => {

    return (
        <input id={inputFiledId}
               type="file"
               className="hidden"
               onChange={(e) => {
                   if (e.target.files[0]) {
                       setFile(e);
                       e.target.value = null; // clear input field right away so that it works again
                   }
               }}/>
    )
}

export const InputElement = ({title, file, setFile, inputFiledId}) => {

    const router = useRouter();
    const onConfirmationPage = router.pathname.includes("confirmation-page");
    const onEditPage = router.pathname.includes("edit-project");

    if (onConfirmationPage) {
        return (
            <>
                {file &&
                    <div>
                        <label
                            className="mr-0 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-10 text-center">
                            {title}
                        </label>
                        <div className="text-center items-center w-full text-sm">
                            {file ?
                                <AfterUpload onConfirmationPage={onConfirmationPage} onEditPage={onEditPage} file={file}
                                             setFile={setFile}></AfterUpload>
                                :
                                <BeforeUpload htmlFor={inputFiledId}
                                              hint="SVG, PNG, JPG or GIF (MAX. 800x400px)"></BeforeUpload>
                            }
                            <FileInputField inputFiledId={inputFiledId} onEditPage={onEditPage}
                                            setFile={setFile}></FileInputField>
                        </div>
                    </div>
                }
            </>
        )
    } else {
        return (
            <div>
                <label
                    className="mr-0 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-10 text-center">
                    {title}
                </label>
                <div className="text-center items-center w-full text-sm">
                    {file ?
                        <AfterUpload onConfirmationPage={onConfirmationPage} onEditPage={onEditPage} file={file}
                                     setFile={setFile}></AfterUpload>
                        :
                        <BeforeUpload htmlFor={inputFiledId}
                                      hint="SVG, PNG, JPG or GIF (MAX. 800x400px)"></BeforeUpload>
                    }
                    <FileInputField inputFiledId={inputFiledId} onEditPage={onEditPage}
                                    setFile={setFile}></FileInputField>
                </div>
            </div>
        )
    }
}