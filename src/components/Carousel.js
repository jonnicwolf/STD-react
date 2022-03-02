import React, {useState} from 'react';
import { SlideImage, StyledSlider } from '../styledComponents/SlideContainer';
import { FaHandPointLeft,FaHandPointRight } from 'react-icons/fa'

const Carousel = ({ slides })=> {
    const [current, setCurrent] = useState(0);
    const len = slides.length;

    const slideRight = ()=> {setCurrent(current === len - 1 ? 0 : current + 1)};
    const slideLeft = ()=> {setCurrent(current === 0 ? len-1 : current - 1)};

    return (
        <StyledSlider>
            <FaHandPointLeft className='leftArrow' onClick={slideLeft}/>
            <FaHandPointRight className='rightArrow' onClick={slideRight}/>
            {slides.map((slide, index) => {                
                return (
                    <div key={index}>
                        {index === current && <SlideImage src={slide.image} alt=''/>}
                        <span key={index}>
                            {index === current && <span>{slide.info}</span>}                        
                        </span>                         
                        <button key={index}>
                            {index === current && <div>Buy Now</div>}
                        </button>
                    </div>
                );
            })}
        </StyledSlider>
    );
};

export default Carousel;