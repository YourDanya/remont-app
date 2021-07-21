import React from "react";
import styles from "./Warranties.module.css"
import mainStyles from '../../App.module.css'
import img from "./warr_img.jpg"
import {FaPencilAlt, FaRuler, GiInjustice} from "react-icons/all";

const Warranties= () =>{
    return <div className={styles.universe}>
        <div className={styles.warranties+' '+styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Гарантии</div>
                <div className={styles.warrantiesText}>
                    <div className={styles.item}>
                        <FaRuler className={styles.icon}/>
                        Бесплатный <br/>замер
                    </div>
                    <div className={styles.item}>
                        <GiInjustice className={styles.icon}/>
                        Гарантия <br/> 3 года
                    </div>
                    <div className={styles.item}>
                        <FaPencilAlt className={styles.icon}/>
                        Смета
                    </div>
                </div>
            </div>
            <img src={img} className={styles.img} alt={"img"}/>
        </div>
        <div className={styles.abs}></div>
    </div>
}

export default Warranties
