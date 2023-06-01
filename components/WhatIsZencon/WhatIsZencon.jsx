import GlobalContent from "../Molecules/Content/GlobalContent"

function WhatIsZencon() {
  return (
    <div className="container mx-auto">
        <div className="max-w-[60%] text-center px-10 mx-auto laptop:max-w-[80%] 800px:max-w-[100%] 480px:max-w-[100%]">
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