import HeadingH2 from '../Atoms/Headings/HeadingH2'

function AboutZeniq() {
  return (
    <div className='container mx-auto px-[30px] 640px:max-w-[100%]'>
        <div className='w-[80%] flex-col flex gap-8 1024px:w-[100%] 480px:w-[90%] 1024px:mx-auto 1024px:text-center 1024px:gap-3 767px:gap-2'>
            <HeadingH2 text="about zeniq" />
            <p className='font-HeronSans text-[18px] font-[300]'>ZENIQ aims to be a leader in the delivery of secure blockchain-based services. ZENIQ aims to offer the highest quality of innovative, leading edge solutions built on secure infrastructure and developed by leading industry practitioners and partners. A key component of ZENIQ&sbquo;s solution is a hardware device, called the ZENIQ Hub, which manages fiat and digital assets. The hub is a robust, secure, and unique device for exchanging digital assets with modern and mobile fiat payments in a seamless and secure, self-controlled ecosystem. ZENIQ is poised to evangelize the fintech and blockchain space with innovative products and services. Find out more about the ZENIQ ecosystem by visiting<span><a className='text-[#87FF4F]' href="www.zeniq.com"> www.zeniq.com.</a></span></p>
        </div>
    </div>
  )
}

export default AboutZeniq