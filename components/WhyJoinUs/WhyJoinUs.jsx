import HeadingH2 from "../Atoms/Headings/HeadingH2"
import GlobalContent from "../Molecules/Content/GlobalContent"

function WhyJoinUs() {
  return (
    <div className="container mx-auto px-[30px] 640px:max-w-[100%]">
        <div className="1024px:text-center">
            <div className="2xl:max-w-[38%] xl:max-w-[50%] lg:max-w-[70%] md:max-w-[80%] max-w-[80%] 640px:max-w-[90%] 1024px:mx-auto">
                <HeadingH2 text="So, what do you need to do to join us in Rio de Janeiro?" />
            </div>
            <div className="lg:w-[70%]  laptop:max-w-[80%] 480px:max-w-[90%] 1024px:w-[100%] 1024px:mx-auto">
                <GlobalContent
                    Paragraph1="After the application process, the best ideas will be selected to participate in ZENCON Rio 2023, an event where the coders and programmers are provided with challenges that they need to solve within 68 hours across different domains."
                    Paragraph2="We will have five different categories of challenges in which you can compete. All it takes is for you to apply with your project, get selected and make your way to Brazil!"
                />
            </div>
        </div>
    </div>
  )
}

export default WhyJoinUs