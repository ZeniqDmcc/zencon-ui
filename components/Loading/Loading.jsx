import React from 'react'
import Image from 'next/image'
import zeniq from "../../public/assets/zeniq.png";
import Navbar from '../Navbar/Navbar';

export const Loading = () => {
    return (
        <div className='bg-[#010020]'>
        <Navbar/>
        <div className="loading-container">
            <Image src={zeniq} alt="Javascript" width={80} height={80}/>
        </div>
        </div>
    )
}