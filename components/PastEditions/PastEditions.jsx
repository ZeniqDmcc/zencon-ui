import GlobalContent from "../Molecules/Content/GlobalContent"

function PastEditions() {
  return (
    <div className="container mx-auto 1600px:px-[30px] 1440px:px-[80px] 1280px:px-[70px] 1024px:px-[30px] 767px:px-[20px] 640px:px-[80px] 480px:px-[30px] 640px:max-w-[100%]">
        <div className="text-center w-[40%] 1024px:w-[70%] 480px:w-[82%] mx-auto">
            <GlobalContent 
                GlobalContentHeading="Past editions"
                Paragraph1="ZENCON first edition was held in Playa del Carmen, México. In 2023, the event moves to Rio de Janeiro, Brazil (16-21 September)."
            />
        </div>
        <div className="flex gap-8 1280px:gap-6 1024px:gap-4 640px:gap-8 h-[600px] 1440px:h-[550px] 1280px:h-[510px] 1024px:h-[370px] 640px:h-auto 640px:flex-col">
            <div className="w-1/3 bg-center 640px:w-full 640px:h-[340px] past__edition__1"></div>
            <div className="w-1/3 bg-center 640px:w-full 640px:h-[340px] past__edition__2"></div>
            <div className="w-1/3 bg-center 640px:w-full 640px:h-[340px] past__edition__3"></div>
        </div>
    </div>
  )
}

export default PastEditions