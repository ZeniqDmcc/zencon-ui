import zenconLogo from "../../assets/zenconLogo.svg"
import Image from 'next/image'
import styles from "./logo.module.css";
import Link from "next/link";

const Logo= ()=>{
    return <div className={`h-100 ${styles.brand__icon}`}>
      <Link href="#">
        <><Image className="h-24" src={zenconLogo} alt="Logo"/></>
      </Link>
  </div>  
}

export default Logo