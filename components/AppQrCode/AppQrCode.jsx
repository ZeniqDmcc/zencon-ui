import React from "react";
import {QRCodeSVG} from "qrcode.react";

export default function AppQrCode(props) {
    const {title, description, uri, disabled = false} = props;

    return (
        !disabled && (
            <div
                style={{
                    margin: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center"
                }}
            >
                <div className="rounded-xl bg-gradient-to-bl p-[6px] from-[#F4A12FFF] via-purple-700 to-purple-900">
                    <div
                        className="md:w-[280px] sm:w-[300px] bg-white w-full text-center flex flex-col justify-between doc-card-shadow rounded-lg">
                        <p className="mb-3 mt-3 font-bold text-[#667085]">{title}</p>
                        <div className="justify-center flex">
                            <a href={uri}><QRCodeSVG value={uri} size={180}/></a>

                        </div>
                        <p className="mb-3 mt-3 font-normal font-secondary text-[#667085]">
                            {description}
                        </p>
                    </div>
                </div>
                {/*<p className="mb-3 mt-3 font-normal font-secondary text-2xl text-[white]">*/}
                {/*    {uri}*/}
                {/*</p>*/}
            </div>
        )
    );
}
