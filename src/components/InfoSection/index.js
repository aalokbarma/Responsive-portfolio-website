import React from 'react';
import { Button } from '../ButtonElements';
// import { Column2, ImgWrap } from './InfoElements';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({
    primary, 
    dark,
    LightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    dark2
}) => {
    return (
        <>
            <InfoContainer LightBg = {LightBg} id ={id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText = {lightText}>{headline}</Heading>
                                <Subtitle darkText = {darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to = 'home' 
                                    primary = {primary} 
                                    dark = {!dark}
                                    smooth ={true}
                                    duration = {500}
                                    spy = {true}
                                    exact = "true"
                                    offset = {-80}
                                    dark2 = {dark2 ? 1 : 0}
                                    >{buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src ={img} alt={alt}  />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
