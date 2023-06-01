import styles from "./status.module.css";

function StatusCircle({status}) {
    let percentage = 33;
    if(status){
        percentage=66
    }
    return (
        <div className="">
            <div className="container mx-auto">
                <div className={styles.box}>
                    <div className={styles.shadow}></div>
                    <div className={styles.content}>
                        <div className={styles.percent} data-text={status===true? "Shortlisted":status===false?"Rejected":"Under review"} style={{'--num': percentage}}>
                            <div className={styles.dot}></div>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                        </div>
                        <div className={styles.number}>
                            <h2>{percentage}<span>%</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusCircle