import Image from "next/image";

export default function SocialIcon({ link, image, classes }) {
  return (
    <a href={link} target="_blank" rel={"noreferrer"}>
      <div
        className={`rounded-full transition-colors bg-transparent cursor-pointer ${classes} mx-1`}
      >
        <Image src={image} alt="social" width={30} height={30} />
      </div>
    </a>
  );
}
