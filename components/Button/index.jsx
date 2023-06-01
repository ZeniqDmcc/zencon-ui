import Link from "next/link"
import styles from "./button.module.css"

const Button = (props)=>{
    return <>
        <Link  href={props.href}><a className={styles.button}>{props.label}</a></Link>
    </>
}

export default Button