import React from 'react'
import { icons } from './API'
import { labels } from './API'
import servicesImg from './../../images/background/bg1.jpg'
import './style.sass'

function Services() {
    return (
        <div className="services-container">
            <h2>Наши услуги</h2>
            <div className="services-grid">
                <div className='services-img'></div>
                <div className="services">
                    {
                        labels.map((label, index) =>
                            <div className="service">
                                <span>{label}</span>
                                <img src={icons[index]} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>

        </div>

    )
}

export default Services
