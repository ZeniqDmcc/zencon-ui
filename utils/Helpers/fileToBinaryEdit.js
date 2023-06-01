export default function fileToBinary(file, file_type, usersProjects, setUsersProjects, id) {
    if (file) {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function (event) {
            if (event.target.result.length > 5242880) {
                // if larger than 5Mb not good
                console.log("file too large");
                alert("file too large");
                return;
            }

            // get current files, if there are none then create empty object for them
            const new_files = usersProjects[id].files || {};
            new_files[file_type] = {
                file_type: file_type,
                file_name: file.name,
                file_binary: event.target.result,
                mime_type: file.type
            };
            console.log(new_files);

            // update project in the context
            setUsersProjects(prevState => ({
                ...prevState,
                [id]: {
                    ...usersProjects[id],
                    files: new_files
                }
            }));
        }
        reader.onerror = function (error) {
            console.log('reader Error: ' + error);
        }
    } else {
        // if file is undefined then it got deleted so delete it from the state
        setUsersProjects(prevState => ({
            ...prevState,
            [file_type]: null
        }));
    }
}