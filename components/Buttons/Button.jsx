import Link from "next/link";

export default function Button({ text1, text2, disabled, classes, link }) {
  return (
            <Link href={link} passHref>
              <button
                  disabled={disabled}
                  className={`bg-gray-900 transition-colors disabled:bg-black px-7 relative
                  text-white py-3 rounded-lg text-uppercase text-sm font-medium font-primary sm:w-auto ${classes}  border-gray-700 flex items-center divide-x divide-gray-600 leading-none`}
              >
                  <span className=" text-gray-300 group-hover:text-gray-100 transition pr-4">{text1}</span>
                  <span className=" font-normal font-primary text-transparent text-center bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 pl-4">{text2} &rarr;</span>
              </button>
            </Link>
  );
}

