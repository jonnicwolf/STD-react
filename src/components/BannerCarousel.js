import React, {useState} from 'react';
import { SlideImage, StyledSlider } from '../styledComponents/SlideContainer';
import {FaHandPointLeft,FaHandPointRight} from 'react-icons/fa'

const BannerCarousel = ({ slides })=> {
    const [slide,setSlide] = useState(0)
    const len = slides.length;

    const slideRight = ()=> {
        setSlide(slide === len -1 ? 0 : slide + 1)
    }
    const slideLeft = ()=> {
        setSlide(slide === len -1 ? 0 : slide -1)
    }
    return (
        <StyledSlider>
        <FaHandPointLeft className='leftArrow' onClick={slideLeft}/>
        <FaHandPointRight className='rightArrow' onClick={slideRight}/>e

        {slides.map((slide, index) => {
            return (
                <div key={index}>
                    {index === slide}
                </div>
            );
        })}
        </StyledSlider>
    )
};

export default BannerCarousel;


