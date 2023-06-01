import {Loading} from "../Loading/Loading";
import {useRouter} from "next/router";
import {useEffect} from "react";

export const LoadingStyled = ({varToWaitFor: varsToWaitForArray = [], timeToWait, redirectTo}) => {

    const router = useRouter();
    let timer;

    useEffect(()=>{
        if(timeToWait && redirectTo){
            timer = setTimeout(()=> {
                // console.log("it works! i will redirect you to " + redirectTo);
                router.push(redirectTo);
            }, timeToWait);
        }

        if(timer){
            return ()=> clearTimeout(timer);
        }

    }, []);

    return (
        <div style={{background: "#111827", height: "100%"}}>
            <Loading></Loading>
        </div>
    )
}

