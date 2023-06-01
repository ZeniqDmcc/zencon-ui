import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import {useRouter} from "next/router";


import {useUserDataContext} from "../../context/UserDataContextProvider";
import {useUploadProjectContext} from "../../context/UploadProjectContextProvider";
import {confirmAlert} from "react-confirm-alert";
import {DeleteOutlined} from "@ant-design/icons";
import {api_backend} from "../../utils/Constants/BackendURLs";


export default function MultiInput({readOnly = false}) {

    // these are fully custom objects for each option, although "label" and "value" names are fixed
    const right_options = [
        {value: 'Participant', label: 'Participant', name: "rights_in_project"},
        {value: 'Maintainer', label: 'Maintainer', name: "rights_in_project"},
        {value: 'Owner', label: 'Owner', name: "rights_in_project"}
    ];

    const {devsInProject, setDevsInProject} = useUploadProjectContext();
    const {ethAddr, userType, allDevs, setAllDevs} = useUserDataContext();
    const router = useRouter();

    const authData = {
        user_wallet: ethAddr,
        user_type: userType
    };

    useEffect(() => {
        if (authData.user_wallet) {
            fetch(`${api_backend}/project/get_devs`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(authData),
            })
                .then((response) => response.json())
                .then(data => {
                    // console.log("devs retrieved");
                    // setProjectsFetched(true);
                    // console.log(data);
                    if (data?.devs) {
                        // convertBinaryToFile(data.projects_with_files);
                        setAllDevs(data.devs.map(address => ({
                            value: address,
                            label: address,
                            name: "dev_wallet_address"
                        })));
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        } else {
            router.push("/");
        }

        if (readOnly) {
            setDevsInProject(devsInProject.filter(dev => dev.dev_wallet_address !== ""));
        }

    }, []);


    const handleInputChange = (e, index) => {
        const {name, value} = e;
        const inputList = [...devsInProject];
        inputList[index][name] = value;
        setDevsInProject(inputList);
        // console.log(devsInProject);
    };
    const handleRemoveClick = (e, index) => {
        // console.log(index)
        e.preventDefault();
        const inputList = [...devsInProject];
        // console.log(inputList[index]);
        inputList.splice(index, 1);
        // console.log(inputList)
        setDevsInProject(inputList);
    };
    const handleAddClick = (e) => {
        e.preventDefault();
        setDevsInProject([
            ...devsInProject,
            {dev_wallet_address: '', rights_in_project: 'Participant'},
        ]);
    };

    if (allDevs.length > 0) {
        return (
            <>
                {!readOnly && <div className="text-center mt-6">
                    <button
                        className={`capitalize hover:bg-[#f4a12f] bg-blue-900 transition-colors disabled:bg-black px-6 text-white py-2 rounded-md text-uppercase text-sm font-medium font-primary sm:w-auto`}
                        onClick={handleAddClick}
                    >
                        Add Input Field
                    </button>
                </div>}
                <div className="flex flex-wrap mb-12 mt-12">
                    {devsInProject && devsInProject.map((dev, i) => {
                        return (
                            dev.dev_wallet_address !== ethAddr &&
                            <div className="flex w-full mb-6 flex-wrap p-8 shadow-lg"
                                 // for new fields which will be empty when they get added, the key is the index of the map function
                                 key={dev.dev_wallet_address === "" ? i : dev.dev_wallet_address}>
                                <div className="w-full lg:w-1/3 mb-6 lg:mb-0 grow">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-city">
                                        Username or Wallet address
                                    </label>
                                    <Select
                                        isDisabled={readOnly}
                                        defaultValue={allDevs.filter(allDevsDev => allDevsDev.value === dev.dev_wallet_address)}
                                        options={allDevs}
                                        isOptionDisabled={(option) => JSON.stringify(devsInProject).includes(option.value)}
                                        onChange={(e) => handleInputChange(e, i)}/>
                                </div>

                                <div
                                    className="w-full lg:w-1/3 lg:mb-0 grow flex items-center flex-wrap xs:flex-nowrap">
                                    <div className="relative w-full lg:w-1/3 lg:px-3 xs:mb-0 mb-6 grow">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-city">
                                            Right level in project
                                        </label>
                                        <Select
                                            className="text-center"
                                            defaultValue={right_options.filter(option => option.value === dev.rights_in_project)}
                                            isSearchable={false}
                                            isDisabled={readOnly}
                                            name={"rights"}
                                            onChange={(e) => handleInputChange(e, i)}
                                            options={right_options}
                                        />
                                    </div>
                                    {!readOnly && <div className="h-full w-full lg:w-1/3 lg:px-3 lg:mb-0 ">
                                        <div className="flex flex-col justify-center xs:justify-end items-end h-full">
                                            {dev.dev_wallet_address !== '' && !router.pathname.includes("upload-project") ?
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        // console.log(dev.dev_wallet_address);
                                                        confirmAlert({
                                                            title: 'Confirm to delete',
                                                            message: `Are you sure you want to remove this developer (${dev.dev_wallet_address}) from the project?`,
                                                            buttons: [
                                                                {
                                                                    label: 'Yes',
                                                                    onClick: () => handleRemoveClick(e, i)
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
                                                <button
                                                    className=""
                                                    onClick={(e) => handleRemoveClick(e, i)}
                                                >
                                                    <DeleteOutlined style={{fontSize: '30px', color: '#7d1d1d'}}/>
                                                </button>
                                            }
                                            {/*<button*/}
                                            {/*    className=""*/}
                                            {/*    onClick={(e) => handleRemoveClick(e, i)}*/}
                                            {/*>*/}
                                            {/*    <DeleteOutlined style={{fontSize: '30px', color: '#7d1d1d'}}/>*/}
                                            {/*</button>*/}
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

