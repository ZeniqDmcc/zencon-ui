import ContactDetails from "../components/ContactDetails/ContactDetails";
import { Loading } from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import RegistrationForm from "../components/Registration";
import useFetchWithToken from '../hooks/useFetchWithToken';
import { zencon_event_api_url } from "../utils/Constants/BackendURLs";
import UI_PATHS from "./../utils/Constants/uiPaths";

export default function Register() {
    const {data, error, loading,token } = useFetchWithToken(`${zencon_event_api_url}/${UI_PATHS.PARTICIPANT_STATUS}`);
    if(loading) return <Loading></Loading>;
    return (
        <>
        <Navbar />
            {data ?  (
                <div className="bg-[#0B1B34] pt-8 px-8 lg:px-0" style={{ backgroundImage: "url('./../public/Bg_level_1.svg')" }}>
                    <div className="flex max-w-4xl mx-auto  pt-40 pb-24 justify-between h-4/6">
                        <ContactDetails firstName={data.first_name} lastName={data.last_name} status={data.shortlisted} email="hello@zencon.io"/>
                    </div>
                </div>
            ) : (
                <RegistrationForm ethAddr={token}/>
            )}
        </>
    );
}
