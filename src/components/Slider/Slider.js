import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.sass'
import Slide from './Slide/Slide'
import ButtonGroup from './ButtonGroup/ButtonGroup';
import {images} from './API'

import React from 'react'

function Slider() {
  return (
    <div className='slider-container'>
      <Carousel
        customButtonGroup={<ButtonGroup />}
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className="slider"
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={40}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1250
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 800,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1250,
              min: 800
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        swipeable
        autoPlay
        autoPlaySpeed={3000}
      >
        {
          images.map((img, index) => 
            <Slide slide={{description: {header: 'Slide Header', address: 'ЖК Царская площадь, пр. Ленинградский, 3'}, duration: `${index}`, img}} />
          )
        }
      </Carousel>
    </div>
  )
}

export default Slider

