import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

import { FaArrowRight } from 'react-icons/fa'

const HeroSection = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src='https://res.cloudinary.com/kentruri/video/upload/v1615312461/video_eya0yy.mp4' type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Lo mas rico de cali, ve!</HeroH1>
                <HeroP>
                    Registrate para ordenar en linea, en la comodidad de tu hogar
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                        Registrate  {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
