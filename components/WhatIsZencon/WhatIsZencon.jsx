import GlobalContent from "../Molecules/Content/GlobalContent"

function WhatIsZencon() {
  return (
    <div className="container mx-auto">
        <div className="2xl:max-w-[60%] xl:max-w-[70%] lg:max-w-[90%] text-center lg:px-10 mx-auto">
            <GlobalContent 
                GlobalContentHeading="what is zencon?"
                Paragraph1="ZENCON is an annual coding event (hackathon), where entrepreneurs, coders, computer
                programmers and blockchain industry partners come together in a fun and entertaining environment to strengthen their collaboration, forge new technological innovations and produce creative ideas and solutions."
            />
        </div>
    </div>
  )
}

export default WhatIsZencon