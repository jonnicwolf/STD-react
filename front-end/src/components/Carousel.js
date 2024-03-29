import React, {useState} from 'react';
import { SlideImage, SlideInfo, StyledSlider} from '../styledComponents/SlideContainer';
import { FaHandPointLeft,FaHandPointRight } from 'react-icons/fa'

import './Carousel.css'

const Carousel = ({ slides })=> {
    const [current, setCurrent] = useState(0);
    const len = slides.length;

    const slideRight = ()=> {setCurrent(current === len - 1 ? 0 : current + 1)};
    const slideLeft = ()=> {setCurrent(current === 0 ? len-1 : current - 1)};

    return (
        <div>
            <FontAwesomeIcon icon="fa-solid fa-hand-point-right" />
            {/* <FaHandPointLeft className='leftArrow' onClick={slideLeft}/> */}
            <FaHandPointRight className='rightArrow' onClick={slideRight}/>
            <StyledSlider>
                {slides.map((slide, index) => {                
                    return (
                        <div key={index}>
                            <span className='slideImage'>
                                {index === current && <SlideImage src={slide.image} alt=''/>}
                            </span>
                            <br/>
                            <SlideInfo>
                                <p key={index} className='slideInfo'>
                                    {index === current && <span>{slide.info}</span>}
                                </p>   
                            </SlideInfo>                                              
                        </div>
                    )
                })}
            </StyledSlider>
        </div>
    );
};

export default Carousel;