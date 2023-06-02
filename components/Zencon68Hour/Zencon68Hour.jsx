import HeadingH2 from '../Atoms/Headings/HeadingH2'
import GlobalContent from '../Molecules/Content/GlobalContent'

function Zencon68Hour() {
  return (
    <div className='container mx-auto px-[30px] 640px:max-w-[100%]'>
        <div className='w-[80%] 1024px:mx-auto 1024px:w-[90%] 1024px:text-center'>
            <div className='w-[50%] 1600px:w-[60%] 1280px:w-[70%] 640px:w-[90%] 1024px:mx-auto'>
                <HeadingH2 text="What is the 68-hour ZENCON challenge?" />
            </div>
            <GlobalContent 
                Paragraph1="Rise and shine (or simply never go to sleep) and welcome to the 68-hour challenge that will see teams from all over the world compete at ZENCON. Here is what you need to do: The challenge starts on the second day of ZENCON and runs over the next three days during which you need to finish a working prototype application, write the smart contract to make it work on the ZENIQ Smart Chain, deploy the application, test it, and finally pitch it to our expert jury. Our mentors and jury members will be present all the time and their feedback could provide invaluable help to make it to the top of your challenge category."
                Paragraph2="So, while you can theoretically finish your application before ZENCON, the tokens to perform operations on the ZENIQ Smart Chain will only be awarded during ZENCON. So be ready for a lot of last-minute work, little sleep and a lot of energy!"
            />
        </div>
    </div>
  )
}

export default Zencon68Hour