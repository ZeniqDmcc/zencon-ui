import {createContext, useContext, useEffect, useState} from "react";
import {connectToBackEnd} from "../hooks/useConnectToBackend";
import Cookies from "js-cookie";


const UserDataContext = createContext({});

export function useUserDataContext() {
    return useContext(UserDataContext);
}

export default function UserDataContextProvider({children}) {

    const [isAuthed, setIsAuthed] = useState(false);
    const [ethAddr, setEthAddr] = useState("");
    const [btcAddr, setBtcAddr] = useState("");
    const [userWallet, setUserWallet] = useState("");
    const [userType, setUserType] = useState("");
    const [usersProjects, setUsersProjects] = useState(null);
    const [allDevs, setAllDevs] = useState([]);

    const [socket, setSocket] = useState(null);

    useEffect(() => {

        connectToBackEnd()
            .then(socket => setSocket(socket))
            .catch(e => console.log(e));

        const is_authed = localStorage.getItem("is_authed");
        const user_type = localStorage.getItem("user_type");
        const auth_adr = localStorage.getItem("auth_adr");
        const eth_adr = localStorage.getItem("eth_adr");
        const btc_adr = localStorage.getItem("btc_adr");


        if (is_authed) {
            setIsAuthed(true);
            if (auth_adr) {
                setUserWallet(auth_adr);
            }
            if (user_type) {
                setUserType(user_type);
            }
            if (auth_adr) {
                setUserWallet(auth_adr);
            }
            if (eth_adr) {
                setEthAddr(eth_adr);
            }
            if (btc_adr) {
                setBtcAddr(btc_adr);
            }

            Cookies.set("userType", user_type);
            Cookies.set("isAuthed", true);
        }

        return () => {
            if (socket) socket.disconnect();
        }

    }, []);


    return (
        <UserDataContext.Provider value={
            {
                socket,
                setSocket,
                userType,
                setUserType,
                userWallet,
                setUserWallet,
                ethAddr,
                setEthAddr,
                btcAddr,
                setBtcAddr,
                isAuthed,
                setIsAuthed,
                usersProjects,
                setUsersProjects,
                allDevs,
                setAllDevs
            }
        }>{children}</UserDataContext.Provider>
    )
}

