import React from "react";
import { useState, useEffect } from "react";
import './style.sass'
const Main = () => {
    const [index, setIndex] = useState(0)
    const numberOfFiles = 4
    let bgArray = ((numberOfFiles) => {
        const array = []
        const dirAddress = '/images/background/'
        for (let i = numberOfFiles; i > 0; i--) {
            array.push(dirAddress + 'bg' + i + '.jpg')
        }
        return array
    })(numberOfFiles)

    useEffect(() => {
        const interval = setInterval(() => {
            index >= numberOfFiles - 1 ? setIndex(0) : setIndex(index + 1)
        }, 10000)
        return () => clearInterval(interval)
    }, [index])

    return (
        <div className='main' style={{backgroundImage: `url(${bgArray[index]})`}}>
            <div className="title-container">
                <h2></h2>
                <h1></h1>
                <button>Ltnfkmysit</button>
            </div>
        </div>
    )

}

export default Main
