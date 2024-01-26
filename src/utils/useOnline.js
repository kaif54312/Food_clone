import { useEffect,useState } from "react";

const useOnline = ()=>{
    const[isOnline,setIsOnline] = useState(true);

    useEffect(() =>{
        const handleOnline=()=>{
            setIsOnline(true);
        };

        const handleOffilne=()=>{

            setIsOnline(false);
        };

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffilne);

        return()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffilne);

        }
    },[]);
    return isOnline;
};
export default useOnline;