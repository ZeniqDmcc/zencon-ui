import Container from "../Container/Container";
import React from "react";
import {Waves} from "../Waves/Waves";

export default function GetRewarded() {
  return (
      <div className=" bg-gray-900">
        <div className="bg-gray-900 w-full h-20"/>
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 items-start justify-items-center sm:gap-14 gap-4 sm:text-left text-center">
          <h2 className="text-[white] font-extrabold text-5xl text-left font-primary">
            A Deep Dive Into The Most Exciting Projects Running On The ZENIQ
            SMARTCHAIN. One Click Away.
          </h2>

          <p className="text-gray-300 text-justify sm:text-[20px] text-[18px] font-secondary leading-[30px]">
            The ZENCON{"'"}s Launchpad integrates developers, investors and the
            ZENIQ{"'"}s community in one single place. If you want to get insights
            about everything that is happening on the ZENIQ Smartchain, get
            precious information on the best projects to invest, as well as to
            know the latest news about upcoming solutions, this is the right
            place to be.
          </p>

        </div>
      </Container>
        <Waves scale={0.6}/>
    </div>

  );
}
