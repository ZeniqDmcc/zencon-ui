import React, { useState } from "react";
import Image from "next/image";
import Container from "../Container/Container";
import { useRouter } from "next/router";
import zenconlogo from "../../public/assets/zenconlogo.png";
import {Waves} from "../Waves/Waves";


export default function JoinClub() {
  const location = useRouter();
  const [modal, setModal] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleClick = () => {
    location.push("https://linktr.ee/ZENIQ");
    //setModal(!modal);
  };
  const closeModals = () => {
    setModal(false);
    setSubmit(false);
  };

  return (
    <>
      <section className=" bg-gray-900 pb-14">
        <Waves scale={1.1}/>
        {modal && (
          <div className="fixed top-0 left-0 bottom-0 right-0 overflow-hidden w-full h-screen bg-gray-500 bg-opacity-80 z-20">
            <div className="flex h-screen items-center justify-center">
              <div className="lg:w-5/12 sm:w-9/12 w-11/12 mx-auto bg-white rounded-xl px-6 py-8 relative">
                <div
                  className="absolute top-4 right-8 cursor-pointer"
                  onClick={() => setModal(false)}
                >
                  <i className="fas fa-close text-xl" />
                </div>

              </div>
            </div>
          </div>
        )}
        {submit && (
          <div className="fixed top-0 left-0 bottom-0 right-0 overflow-hidden w-full h-screen bg-gray-500 bg-opacity-80 z-20">
            <div className="flex h-screen items-center justify-center">
              <div className="lg:w-5/12 sm:w-9/12 w-11/12 mx-auto bg-white rounded-xl px-6 py-8 relative">
                <div
                  className="absolute top-4 right-8 cursor-pointer"
                  onClick={closeModals}
                >
                  <i className="fas fa-close text-xl" />
                </div>

              </div>
            </div>
          </div>
        )}
        <Container>
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center sm:gap-14 gap-6 mt-20 mb-15">
            <div className="sm:order-1 order-2">
              <div className="w-[700px] h-[400px] relative sm:px-0 px-6">
                <Image src={zenconlogo} alt="intro" layout="responsive" />
              </div>
            </div>
            <div className="sm:order-2 order-1">
              <h1 className="font-extrabold text-transparent text-left text-4xl bg-clip-text bg-white">
                Join our Community Channels
              </h1>
              <p className="text-[20px] text-justify text-gray-400 mb-8 md:text-[18px] mt-6 font-secondary">
                If you want be fully integrated with ZENIQ{"'"}s community, check
                out all our communication channels to be up to date to the
                latest news and events of ZENIQ.
              </p>
              <div className="cursor-pointer text-white font-semibold text-[20px] mb-8 md:text-[18px]">
                {/* <span className="cursor-pointer" onClick={handleClick}>
                  Join our channels <i className="fa-solid fa-arrow-right"/>
                </span> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
