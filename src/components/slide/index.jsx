import React, {useState } from 'react';
import {featureSlides} from "../../data";
import cn from "classnames"
import FeatureSlide from './slide';
import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

function RenderImage ({activeIndex}) { 
    return featureSlides.map(({imageUrl},index)=>(
        <img
        className={cn({"as-primary":activeIndex===index})}
        key = {imageUrl}
        style={{backgroundImage:`url(${imageUrl})`}}
        
        />
    ))
}

function Slide() {
    const [activeIndex,setActiveIndex] = useState(0);
    const sliderRef= useRef(null);
    const sliderRightRef= useRef(null);

    useLayoutEffect(()=>{
        function stopTrigger() {
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:sliderRightRef.current,
                    start : "top top",
                    end:() => `+=${sliderRef.current.offsetHeight}`,
                    pin:true,
                    scrub:true,
                },
            });
            return tl;
        }
        const master = gsap.timeline();
        master.add(stopTrigger());
    },[sliderRef.current,sliderRightRef.current]);

  return (
    <div ref={sliderRef} className='slides-container'>
        <div className='slides-left'>
            {featureSlides.map((slide,index)=>(
                <FeatureSlide
                updateActiveImage={setActiveIndex}
                key= {slide.imageUrl}
                title={slide.title}
                description = {slide.description}
                index= {index}
                />
            ))}

        </div>
        <div ref= {sliderRightRef} className='slides-right'>
            <RenderImage 
            activeIndex = {activeIndex}
            />

        </div>

    </div>
  )
}

export default Slide;