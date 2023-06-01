function Venue() {
  return (
    <div className="container mx-auto px-[120px] 1440px:px-[80px] 1280px:px-[70px] 1024px:px-[30px] 767px:px-[20px] 640px:px-[80px] 480px:px-[30px] 640px:max-w-[100%]">
        <div className="flex gap-8 1280px:gap-6 1024px:gap-4 640px:gap-8 h-[600px] 1440px:h-[550px] 1280px:h-[510px] 1024px:h-[370px] 640px:h-auto 640px:flex-col">
            <div className="w-1/3 bg-center 640px:w-full 640px:h-[340px] vanue1"></div>
            <div className="w-1/3 bg-center 640px:w-full 640px:h-[340px] vanue2"></div>
            <div className="w-1/3 bg-center 640px:w-full 640px:h-[340px] vanue3"></div>
        </div>
        <p className="pt-5 text-[18px] text-center">ZENCON Rio 2023 venue: <b>Fairmont Copacabana Hotel</b></p>
    </div>
  )
}

export default Venue