import React from 'react'
import './style.sass'

function Slide({ slide }) {
    return (
        <div className='slide'>
            <div className='container'>
                <div className='sub-container'>
                    <img src={slide.img} className='slide-img' alt="" />
                    <div className="duration-container">
                        <span className='duration'>
                            <span className='number'>{parseInt(slide.duration)}</span>
                            <span className='text'>{slide.duration.replace(/[0-9]/g, '')}</span>
                        </span>

                    </div>
                    <div className='description'>
                        <div className='header'>{slide.description.header}</div>
                        <div className='address'>{slide.description.address}</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Slide
