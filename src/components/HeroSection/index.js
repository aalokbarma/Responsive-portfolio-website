import React, {useState} from 'react';
import {Button} from '../ButtonElements';
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
} from './HeroElements';
import Video from '../../Videos/video.mp4';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = (dark) => {

    const [hover, setHover]  = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking made Easy.</HeroH1>
                <HeroP>
                    Sign up for a new account today and recieve $250 in credit toward your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to = 'signup' 
                    onMouseEnter = {onHover} 
                    onMouseLeave = {onHover} 
                    primary = 'true' 
                    dark ={!dark}
                    smooth = {true} 
                    duration = {500} 
                    spy = {true} 
                    exact = 'true' 
                    offset= {-80} >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
