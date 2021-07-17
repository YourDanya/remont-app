import React from "react";
import Slider from '../MySlider/MySlider1'
import styles from './ExamplesOfWork.module.css'
const ExamplesOfWork = () => {
    return (
        <div className={styles.examplesOfWork}>
            <div className={styles.title}>Примеры работ</div>
            <Slider/>
        </div>
    )

}

export default ExamplesOfWork
