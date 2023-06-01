import React from "react";
import ytVideos from "../../assets/videos/videos.json"
import {Waves} from "../Waves/Waves";
import SlideShow from "../SlideShow/SlideShow";
import {Scatter} from "../Scatter/Scatter";
import Link from "next/link";
import {useUserDataContext} from "../../context/UserDataContextProvider";

export default function Front() {

    const {userWallet} = useUserDataContext();

    return (
        <section className="pt-10 relative">
            <Scatter options={{
                stars: true,
                moon: false,
                wishing_star: true,
                rocket: true,
                constellation: true
            }}/>
            <div className="sm:w-10/12 w-full sm:px-0 px-4 mx-auto" style={{zIndex: '4'}}>
                <div className="mx-auto md:text-left mt-32">
                    <div className="flex flex-row justify-center">
                        <div className="relative group">
                            <div
                                className="absolute
                                inset-0
                                bg-gradient-to-r
                                from-pink-600
                                to-purple-900
                                rounded-lg
                                blur
                                group-hover:scale-y-125
                                group-hover:scale-x-105
                                group-hover:transition
                                duration-1000"/>
                            <Link href={userWallet ? '/my-projects' : '/authentication'} passHref>
                                <button
                                    className={`bg-gray-900 transition-colors disabled:bg-black px-7 relative
                  text-white py-3 rounded-lg text-uppercase text-sm font-medium font-primary sm:w-auto "w-full"  border-gray-700 flex items-center divide-x divide-gray-600 leading-none`}
                                >
                                    <span className=" text-gray-300 group-hover:text-gray-100 transition pr-4">Bring life to your web3 project</span>
                                    <span className=" font-normal font-primary text-transparent text-center bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 pl-4">ZENCON &rarr;</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="font-extrabold font-primary text-white text-center text-7xl pt-10"
                >
                    Real Projects. Real Passion.
                </div>
                <p className="sm:text-[20px] text-[18px]font-secondary text-center text-gray-400 mb-8 md:text-[20px] mt-6 ">
                    Talented developers unlocking the full potential of blockchain
                    technology into real life solutions.
                </p>

                <div className="flex flex-row justify-center isolate">
                    <SlideShow dataType="youtube" dataSource={ytVideos}/>
                </div>
            </div>
            <Waves scale={0.8}/>
        </section>
    );
}
