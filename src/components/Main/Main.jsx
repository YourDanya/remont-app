import React from "react";
import { useState, useEffect } from "react";
import './style.sass'
import {images} from './API'



const Main = () => {
    const [index, setIndex] = useState(0)
    const imgContainerRef = React.useRef()
    const imgRef = React.useRef()

    useEffect(() => {
        const interval = setInterval(() => {
            index >= images.length - 1 ? setIndex(0) : setIndex(index + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [index])

    return (
        <div className='main'>
            <div className="img-container" ref={imgContainerRef}>
              <img src={images[index]} alt="" className='main-img' ref={imgRef}/>
              <img src={images[index > 0 ? index - 1 : images.length - 1]} key={index} alt="" className='main-img fade-out'/>
            </div>
            <div className="title-container">
                <div className='title'>cкидка 10% <span>на ремонт квартирі</span></div>        
                <button>Ltnfkmysit</button>
            </div>
        </div>
    )

}

export default Main
