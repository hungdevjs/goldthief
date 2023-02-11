import { useEffect, useState } from "react";
import { storage } from "../configs/firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { setLogLevel } from "firebase/app";
import useAuth from "./useAuth";

const useStorage = () => {
    const { user } = useAuth()

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const [urlImage, setUrlImage] = useState("")

    useEffect(() => {
        if(user) setUrlImage(user.avatar)
    }, [user])
    
    const handleChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUpLoad = () => {

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
                    setUrlImage(url)
                });
            }); 
    }

    return {handleUpLoad, setFile, handleChange, urlImage, setUrlImage}
}

export default useStorage;