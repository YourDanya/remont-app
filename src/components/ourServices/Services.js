import React from 'react'
import { icons } from './API'
import { labels } from './API'
import servicesImg from './../../images/background/bg1.jpg'
import './style.sass'

function Services() {
    return (
        <div className="services-container">
            <div className='services-img'></div>
            <div className="services">
                {
                    labels.map((label, index) =>
                        <div className="service">
                            <span>{label}</span>
                            <div className="icon">
                                {icons[index]}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default Services
