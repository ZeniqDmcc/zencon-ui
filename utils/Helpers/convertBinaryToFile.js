export default function convertBinaryToFile(projects, setFunction) {
    let projectsWithConvertedFiles = {};

    for (const project in projects) {
        let convertedFiles = null;

        if (projects[project]?.files?.length > 0) {
            convertedFiles = projects[project].files.map(file => {
                const convertedFile = new File([file.file_binary], file.file_name, {type: file.mime_type});

                return {
                    [file.file_type]: convertedFile,
                    file_binary: file.file_binary,
                    file_name: file.file_name,
                    file_size: convertedFile.size
                };
            });
        }

        if (convertedFiles !== null) {
            projectsWithConvertedFiles[project] = {
                ...projects[project],
                files: convertedFiles
            }
        } else {
            projectsWithConvertedFiles[project] = {
                ...projects[project],
                files: []
            };
        }
    }
    setFunction(projectsWithConvertedFiles);
    console.log(projectsWithConvertedFiles);
}