import React from "react";
import styles from './AboutUs.module.css'
import mainStyles from '../../App.module.css'
import img1 from './img/image1.jpg'
import img2 from './img/image2.jpg'

const AboutUs= () =>{
    return <div className={styles.aboutUs +' '+ mainStyles.container}>
        <div className={styles.first}>

            <img src={img1} className={styles.img1} alt="image1"/>

            <div className={styles.about}>
                <div className={styles.title}>Про нас</div>
                <div className={styles.text}>Мы предлагаем качественный ремонт квартир под ключ в Киеае и области  по выгодным ценам в самые кратчайшие сроки. Наши клиенты знают, что с ними на связи всегда прорабы, специалисты по замеру, колцентр компании. В нашей компании есть все для взаимовыгодного сотрудничества: выезд специалистов по замеру в удобное для клиента время бесплатно, быстрый старт работ, соблюдение сроков ремонта строго по договору, доставка и подъем материала.</div>
            </div>

        </div>

        <div className={styles.second}>

            <div className={styles.differences}>
                <div className={styles.title}>Чем мы отличаемся от конкурентов?</div>
                <ul>
                    <li>Возможность выезда на объект и проведение замеров в день обращения.</li>
                    <li>Собственное оконное производство.</li>
                    <li>Собственное производство встроенной мебели.</li>
                    <li>Постоянный штат профессиональных сотрудников.</li>
                    <li>Собственные складские и производственные площади.</li>
                    <li>Профессиональный и дорогой инструмент у каждой бригады.</li>
                    <li>Сотрудники компании постоянно проходят курсы обучения ведения строительных объектов.</li>
                    <li>Дополнительный контроль хода строительства — к каждой бригаде закреплен сотрудник технического надзора.</li>
                </ul>
            </div>

            <img src={img2} className={styles.img2} alt="image2"/>

        </div>

    </div>
}

export default AboutUs
