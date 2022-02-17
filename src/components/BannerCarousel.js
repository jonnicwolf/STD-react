import React, {useState} from 'react';
import {FaRegHandPointer} from 'react-icons/fa'

const BannerCarousel = ({ slides })=> {
    const [slide,setSlide] = useState(0)
    const len = slides.length;

    const slideRight = ()=> {
        setSlide(slide === len - 1 ? 0 : slide + 1)
    }
    const slideLeft = ()=> {
        setSlide(slide === len -1 ? 0 : slide -1)
    }
    return (
        <>
        <FaRegHandPointer />
        <FaRegHandPointer />

        {slides.map((slide, index) => {
            return (
              <div key={index}>
                {index === slide}
              </div>
            );
          })}
        </>
    )
};

export default BannerCarousel;


