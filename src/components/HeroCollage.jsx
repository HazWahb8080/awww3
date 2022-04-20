import React, { useEffect } from 'react';
import { photos, videos } from '../data';
import "./style.scss";
import gsap from 'gsap';


function VideoElement ({src}) { 

    return(
    <div className='hero-element'>
        <video 
        className='collage-element'
        playsInline=""
        autoPlay={true}
        webkit-playsInline=""
        loop
        src = {src} 
        ></video>
    </div>
    );
};

function ImageElement ({src}) { 
    return (
        <div className='hero-element'>
            <img
            src={src} 
            className="collage-element"/>
        </div>
    );
};

 

function HeroCollage() {
    const leftImages = photos.slice(0,2);
    const rightImages = photos.slice(2,photos.length);
    const [leftvideo,rightvideo] = videos;

    useEffect(()=>{

        const tl = gsap.timeline({
            delay:0.5
        })
        tl.fromTo(".hero-element",{y:300}, { 
            y:0,
            duration:1,
            delay:function(index){return 0.2*index}
        })


    },[])


  return (
    <div className='hero-collage'>
        <div className='left-column'>
            {leftImages.map((src)=>(
                <ImageElement src={src} />
            ))}
            <VideoElement src={leftvideo}/>
        </div>
        <div className='right-column'>
            {rightImages.map((src)=>(
                <ImageElement src={src} />
            ))}
            <VideoElement src={rightvideo}/>
        </div>
    </div>
  )
}

export default HeroCollage