import React from "react";
import { useState, useEffect } from "react";
import './style.sass'
import {images} from './API'



const Main = () => {
    const [index, setIndex] = useState(0)
    const imgContainerRef = React.useRef()
    const imgRef = React.useRef()

    useEffect(() => {
        console.log(imgRef.current.offsetRight)
        imgContainerRef.current.scrollTo((imgContainerRef.current.scrollWidth)/2, 0)
    })

    useEffect(() => {
        const interval = setInterval(() => {
            index >= images.length - 1 ? setIndex(0) : setIndex(index + 1)
        }, 10000)
        return () => clearInterval(interval)
    }, [index])

    return (
        <div className='main'>
            <div className="img-container" ref={imgContainerRef}>
              <img src={images[index]} alt="" className='main-img' ref={imgRef}/>
            </div>
            <div className="title-container">
                <div className='title'>cкидка 10% <span>на ремонт квартирі</span></div>        
                <button>Ltnfkmysit</button>
            </div>
        </div>
    )

}

export default Main
