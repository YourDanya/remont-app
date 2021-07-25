import React from "react";
import styles from './Footer.module.css'
import mainStyles from './../../App.module.css'
import {FaFacebook, FaTelegram, FaViber, FiInstagram, IoLogoWhatsapp} from "react-icons/all";
import {NavLink} from "react-router-dom";

const Footer= () =>{
    return <div className={styles.footer}>
        <div className={mainStyles.container}>
            <div className={styles.footerSocials}>
                <a href="https://www.facebook.com/103268698695854/posts/103284195360971/?d=n&substory_index=0">
                    <FaFacebook/>
                </a>
                <a href="https://www.instagram.com/abn.bud/">
                    <FiInstagram/>
                </a>
                <a href="https://t.me/abnbud">
                    <FaTelegram/>
                </a>
                <a href="viber://chat?number=%2B380987792907">
                    <FaViber/>
                </a>
                <a href="https://wa.me/380987792907">
                    <IoLogoWhatsapp/>
                </a>
            </div>
            <div className={styles.footerCopyright}>© ABN-BUD 2021. COPYRIGHT</div>
        </div>
    </div>
}

export default Footer
