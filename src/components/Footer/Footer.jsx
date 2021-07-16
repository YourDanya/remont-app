import React from "react";
import styles from './Footer.module.css'
import mainStyles from './../../App.module.css'
import {FaFacebook, FaTelegram, FaViber, FiInstagram, IoLogoWhatsapp} from "react-icons/all";
import {NavLink} from "react-router-dom";

const Footer= () =>{
    return <div className={styles.footer}>
        <div className={mainStyles.container}>
            <div className={styles.footerSocials}>
                <NavLink to="https://www.facebook.com/Galkosta-854548818029521/" >
                    <FaFacebook/>
                </NavLink>
                <NavLink to="https://www.instagram.com/galkosta_syvak/" >
                    <FiInstagram/>
                </NavLink>
                <NavLink to="https://www.instagram.com/galkosta_syvak/" >
                    <FaTelegram/>
                </NavLink>
                <NavLink to="https://www.instagram.com/galkosta_syvak/" >
                    <FaViber/>
                </NavLink>
                <NavLink to="https://www.instagram.com/galkosta_syvak/" >
                    <IoLogoWhatsapp/>
                </NavLink>
            </div>
            <div className={styles.footerCopyright}>© ABN-BUD 2021. COPYRIGHT</div>
        </div>
    </div>
}

export default Footer
