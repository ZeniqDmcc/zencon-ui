import MoreInformation from "../Molecules/MoreInformation/MoreInformation";
import { nanoid } from "nanoid";


export default function MoreInfoOrg() {
    return (
    <div className="flex flex-col gap-[35px]">
        {
            MoreInfoOrgContent && MoreInfoOrgContent.map((item) => {
                return (
                    <MoreInformation 
                        key={nanoid()}
                        GreenText={item.greenHeading}
                        WhiteText={item.whiteHeading}
                        ParagraphText={item.paragraphText}
                    />
                )
            })
        }
    </div>
  )
}

const MoreInfoOrgContent = [
  {
    greenHeading : "Phase 1 :",
    whiteHeading : "Registration process - until July 15, 2023",
    paragraphText : "www.zencon.io",
  },
  {
    greenHeading : "Phase 2 :",
    whiteHeading : "Pre-selection - latest by july 17, 2023",
    paragraphText : "The qualified registrants will be pre-selected.",
  },
  {
    greenHeading : "Phase 3 :",
    whiteHeading : "Selection - latest by July 27, 2023",
    paragraphText : "The top 200 registrants will be selected to participate at ZENCON Rio 2023.",
  },
  {
    greenHeading : "Phase 4 :",
    whiteHeading : "Beginning of ZENCON - September 16, 2023.",
    paragraphText : "",
  },
  {
    greenHeading : "Phase 5 :",
    whiteHeading : "Challenge begins! - September 17, 2023",
    paragraphText : "The challenge starts on the second day of ZENCON and runs over the next three days (68-hour challenge) during which you need to finish a working prototype application, write the smart contract to make it work on the ZENIQ Smart Chain, deploy the application, test it, and finally pitch it to our expert jury. Our mentors and jury members will be present all the time and their feedback could provide invaluable help to make it to the top of your challenge category. So, while you can theoretically finish your application before ZENCON, the tokens to perform operations on the ZENIQ Smart Chain will only be awarded during ZENCON. So be ready for a lot of last-minute work, little sleep and a lot of energy!",
  },
  {
    greenHeading : "Phase 6 :",
    whiteHeading : "Presentation of the prototype - September 20, 2023",
    paragraphText : "Each team will present its prototype to the jury for a duration that will be determined according to the number of developed prototypes and which will not exceed 5 minutes.",
  },
  {
    greenHeading : "Phase 7 :",
    whiteHeading : "Jury’s selection and ZENCON results - September 20, 2023",
    paragraphText : "",
  },
]