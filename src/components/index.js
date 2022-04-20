import React from 'react'
import HeroHeader from './HeroHeader';
import HeroCollage from './HeroCollage';
import HeroPhoneblock from './HeroPhoneblock';
import HeroUsedBy from './HeroUsedBy';
import HeroFooter from './HeroFooter';

import "./style.scss";
import Slide from './slide/index';

function Hero() {
  return (
    <div className='hero-container'>
        <HeroHeader/>
        <div className='hero-media'>
        <HeroCollage/>
        <HeroPhoneblock/>
        </div>
        <HeroUsedBy/>
        <HeroFooter/>
    </div>
  );
};

export default Hero