import { useState } from "react";
import { storage } from "../configs/firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const useStorage = () => {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const [urlImage, setUrlImage] = useState("")
    
    const handleChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUpLoad = () => {
        if (!file) {
            alert("Please choose a file first!")
        }
        
        const storageRef = ref(storage,`/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
            
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                    
                // update progress
                setPercent(percent);
            }, (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    setUrlImage(url)
                });
            }); 
    }

    return {handleUpLoad, setFile, handleChange, urlImage, setUrlImage}
}

export default useStorage;