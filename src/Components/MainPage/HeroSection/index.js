import React, {useState} from 'react'
import {Button} from '../ButtonElement'
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg
} from './HeroElements'


const HeroSection = () => {


    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id={'/'}>
            <HeroBg>
                <VideoBg autoPlay loop muted
                         src='https://res.cloudinary.com/kentruri/video/upload/v1615312461/video_eya0yy.mp4'
                         type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Lo mas rico de cali, ve!</HeroH1>
                <HeroP>
                    Registrate para ordenar en linea, en la comodidad de tu hogar
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="Register"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        ¡Registrarse es gratis! {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
