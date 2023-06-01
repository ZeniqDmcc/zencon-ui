import Link from "next/link";

export default function CallToAction({text, disabled, classes, link, newTab, query, onClick, active}) {
    return (
        newTab ?
            <a target="_blank" href={link} rel={'noreferrer'}>
                <button
                    onClick={onClick}
                    disabled={disabled}
                    className={`capitalize hover:bg-[#030423] ${active ? "route-active-button" : "bg-[#00223C]"} transition-colors disabled:bg-black px-6 
                  text-white py-2 rounded-md text-uppercase text-sm font-medium font-primary border-[2px] border-opacity-18 border-[#A1E285] sm:w-auto ${classes}`}
                >
                    {text}
                </button>
            </a> :
            <Link href={{
                pathname: link,
                query: query
            }} passHref>
                <button
                    onClick={onClick}
                    disabled={disabled}
                    className={`capitalize hover:bg-[#030423] ${active ? "bg-[#00223C]" : "bg-[#00223C]"} transition-colors disabled:bg-black 
                  text-white px-6 laptop:px-2  py-2 rounded-md text-uppercase text-sm laptop:text-xs font-medium font-poppins border-[2px] border-opacity-18 border-[#A1E285]  sm:w-auto ${classes}`}
                >
                    {text}
                </button>
            </Link>
    );
}
