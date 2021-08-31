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
                <div className={styles.text}>Мы предлагаем качественный ремонт квартир под ключ в Киеве и области  по выгодным ценам в самые кратчайшие сроки. Наши клиенты знают, что с ними на связи всегда прорабы, специалисты по замеру, колцентр компании. В нашей компании есть все для взаимовыгодного сотрудничества: выезд специалистов по замеру в удобное для клиента время бесплатно, быстрый старт работ, соблюдение сроков ремонта строго по договору, доставка и подъем материала.</div>
            </div>

        </div>

        <div className={styles.second}>

            <div className={styles.differences}>
                <div className={styles.title}>Чем мы отличаемся от конкурентов?</div>
                <ul>
                    <li>Никаких предоплат</li>
                    <li>Работаем по договору.</li>
                    <li>Профессионализм: руководители проектов нашей компании имеют высшее инженерно-техническое образование, а так же многолетний опыт работы.</li>
                    <li>Решаем задачи в комплексе: Выполняем все виды работ- от инженерных сетей(сантехника, кондиционирование, электрика) до декоративной отделки.</li>
                    <li>Расценки не меняются после их согласования. Никаких скрытых платежей.</li>
                    <li>Гарантия на выполненные работы- 2 года.</li>
                    <li>Стоимость материалов ниже чем в розничных сетях до 30%.</li>
                    <li>Срок выполнения работ- от 2 месяцев.</li>
                </ul>
            </div>

            <img src={img2} className={styles.img2} alt="image2"/>

        </div>

    </div>
}

export default AboutUs
