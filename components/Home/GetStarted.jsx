import Container from "../Container/Container";
import projectImages from "../../public/assets/projects/index"
import React, {Suspense} from "react";
import dynamic from "next/dynamic";

const DynamicSlideShow = dynamic(() => import("../SlideShow/SlideShow"), {
  suspense: true,
})

export default function GetStarted() {
  return (
    <section className="py-12 bg-gray-900 bg-no-repeat bg-cover ">
      <Container>
        <div className="text-center pb-4">
          <h1 className="font-extrabold font-primary text-transparent text-center text-7xl bg-clip-text bg-white mt-20">
          What is running on the Smart Chain?
          </h1>
          <p className="sm:text-[20px] text-[18px] sm:w-9/12 w-full mx-auto mt-6 text-gray-400 font-secondary text-justify-center mb-10">
            Get a sneak peek on some of the most innovative projects deployed to our Smartchain during the last ZENCON.
          </p>
        </div>
        <div className="">
          <div className="flex flex-row justify-center">
            <Suspense fallback={''}>
              <DynamicSlideShow dataType="image" dataSource={projectImages} />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
