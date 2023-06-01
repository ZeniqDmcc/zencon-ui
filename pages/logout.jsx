import {Loading} from "../components/Loading/Loading";
import Cookies from "js-cookie";
import {useUserDataContext} from "../context/UserDataContextProvider";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {connectToBackEnd} from "../hooks/useConnectToBackend";
import {api_backend} from "../utils/Constants/BackendURLs";



export default function Logout() {

    const {
        socket,
        setSocket,
        setIsAuthed,
        setUserType,
        setUserWallet,
        ethAddr,
        setEthAddr,
        setBtcAddr,
        setUsersProjects
    } = useUserDataContext();

    const router = useRouter();

    const [loggedout, setLoggedout] = useState(false);

    useEffect(() => {

        if (socket) socket?.disconnect();

        Cookies.remove("isAuthed");
        Cookies.remove("userType");

        localStorage.removeItem("is_authed");
        localStorage.removeItem("user_type");
        localStorage.removeItem("auth_adr");
        localStorage.removeItem("eth_adr");
        localStorage.removeItem("btc_adr");

        setSocket(null);
        setIsAuthed(false);
        setUserType(null);
        setUserWallet(null);
        setEthAddr(null);
        setBtcAddr(null);
        setUsersProjects(null);


        fetch(`${api_backend}/session/logout`, {
            method: 'POST',
            // mode: 'cors',
            // cache: 'no-cache',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ethAddr})
        })
            .then((response) => response.json())
            .then(data => {
                // console.log("connect again for next login");
                connectToBackEnd()
                    .then(socket => {

                        setSocket(socket);
                        router.push("/");

                    })
                    .catch(e => console.log(e));
            })
            .catch((err) => {
                console.log(err)
            });

    }, []);

    return (
        <div style={{background: "#111827", height: "100%"}}>
            <Loading></Loading>
        </div>
    );
}
