export default function fileToBinaryUpload(file, file_type, setProjectFiles) {
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
            setProjectFiles(prevState => ({
                ...prevState,
                [file_type]: {
                    file_name: file.name,
                    file_binary: event.target.result
                }
            }));
        }
        reader.onerror = function (error) {
            console.log('reader Error: ' + error);
        }
    } else {
        // if file is undefined then it got deleted so delete it from the state
        setProjectFiles(prevState => ({
            ...prevState,
            [file_type]: null
        }));
    }
}