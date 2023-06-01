import Head from "next/head";
import "../globals.css";
import "../components/SlideShow/SlideShow.css";
import "../components/Front/Front.css";
import "../components/Cube/Cube.scss";
import "../components/Blocks/Blocks.scss";
import '../components/SlideShow/SlideShow.scss';
import '../components/Waves/Waves.scss';
import '../components/Scatter/Scatter.scss';
import '../components/GradientScroll/GradientScroll.scss';
import '../components/GradientBorder/GradientBorder.scss';
import '../components/Home/Capabilities.scss';
import '../components/PageWrapper/PageWrapper.scss';
import '../components/Loading/Loading.scss';
import '../components/Navbar/Navbar.scss';
import '../assets/svg/svg.scss'
import Script from "next/script";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UserDataContextProvider from "../context/UserDataContextProvider";
import UploadProjectContextProvider from "../context/UploadProjectContextProvider";
// import "../assets/style/style.css"


function MyApp({ Component, pageProps }) {

    return (
        <UserDataContextProvider>
            <Head>
                <link rel="shortcut icon" href={"./favicon.ico"} />
                <title>ZENCON Launchpad</title>

                {/* Font - Roboto */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

                {/* Font - Poppins */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

            </Head>
            {/* <Navbar/> */}
            <UploadProjectContextProvider>
                <Component {...pageProps} />
            </UploadProjectContextProvider>
            <Footer />
        </UserDataContextProvider>
    );
}

export default MyApp;


