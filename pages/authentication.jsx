import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Cookies from "js-cookie";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Container from "../components/Container/Container";
import AppQrCode from "../components/AppQrCode/AppQrCode";
import ButtonGlow from "../components/Buttons/ButtonGlow";
import {useUserDataContext} from "../context/UserDataContextProvider";
import Navbar from "../components/Navbar/Navbar";


const AuthenticationForm = () => {

    const {
        socket,
        isAuthed,
        setIsAuthed,
        setUserType,
        setUserWallet,
        setEthAddr,
        setBtcAddr
    } = useUserDataContext();
  
    const router = useRouter();
    if(isAuthed){
        router.push("/dashboard")
    }
    
    const [iAmDeveloper, setIAmDeveloper] = useState(false);
    const [iAmInvestor, setIAmInvestor] = useState(false);

    const [qrLink, setqrLink] = useState(null);
    
    useEffect(() => {
       
        if (socket) {
            if (iAmInvestor) {
                // console.log("login_inv_qr_link");
                socket?.emit("login_inv_qr_link");
                socket?.on("qr_link", (data) => {
                    setqrLink(data);
                });
            }
            if (iAmDeveloper) {
                // console.log("login_dev_qr_link");
                socket?.emit("login_dev_qr_link");
                socket?.on("qr_link", (data) => {
                    setqrLink(data);
                });
            }


            socket?.on("qr_login", data => {
                const { user_type, is_authed, auth_adr, eth_adr, btc_adr,comrade_rec_id} = data;
                if (is_authed) {
                    setIsAuthed(true);
                    localStorage.setItem("is_authed", is_authed.toString());
                }
                if (user_type) {
                    setUserType(user_type);
                    localStorage.setItem("user_type", user_type.toString());
                }
                if (auth_adr) {
                    setUserWallet(auth_adr);
                    localStorage.setItem("auth_adr", auth_adr.toString());
                }
                if (eth_adr) {
                    setEthAddr(eth_adr);
                    localStorage.setItem("eth_adr", eth_adr.toString());
                }
                if (btc_adr) {
                    setBtcAddr(btc_adr);
                    localStorage.setItem("btc_adr", btc_adr.toString());
                }
                if(comrade_rec_id){
                    localStorage.setItem("session_id", comrade_rec_id);
                }
                Cookies.set("isAuthed", is_authed);
                Cookies.set("userType", user_type);

                router.push("/dashboard");
            });

        }


    }, [socket, iAmDeveloper, iAmInvestor]);

    return (
        <PageWrapper>
            <Navbar/>
            <section className="py-14 pb-20 bg-[#030423] bg-no-repeat bg-cover text-white h-[1050px]">
                <Container>
                    <h1 className="mt-14 py-8 mb-8 text-center text-5xl font-extrabold font-primary">
                        Register / Login
                    </h1>
                    {!isAuthed && <div className="flex flex-col flex-wrap justify-center">
                        <div className="m-12" onClick={() => {
                            setIAmInvestor(false);
                            setIAmDeveloper(true);
                        }}>
                            <ButtonGlow
                                text_primary="Developer"
                                text_secondary="Login"
                                linkURL={""}
                                classes="w-full"
                            />
                        </div>

                        <div className="m-12" onClick={() => {
                            setIAmInvestor(true);
                            setIAmDeveloper(false);
                        }}>
                            <ButtonGlow
                                text_primary="Sponsor"
                                text_secondary="Login"
                                linkURL={""}
                                classes="w-full"
                            />
                        </div>



                        {qrLink && <AppQrCode
                            disabled={!iAmDeveloper}
                            title="Login as Developer"
                            description="Scan this code with the Nomo ZENIQ app!"
                            uri={qrLink}
                        />}

                        {qrLink && <AppQrCode
                            disabled={!iAmInvestor}
                            title="Login as Investor"
                            description="Scan this code with the Nomo ZENIQ app!"
                            uri={qrLink}
                        />}

                    </div>}
                </Container>
            </section>
        </PageWrapper>
    );
};

export default AuthenticationForm;
