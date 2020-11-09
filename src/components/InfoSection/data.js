import Img1 from '../../Images/svg-1.svg';
import Img2 from '../../Images/svg-2.svg';
import Img3 from '../../Images/svg-3.svg';
// import Img4 from '../../Images/svg-4.svg';


export const homeObjOne = {
    id: 'about',
    LightBg : false,
    lightText : true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline : 'Unlimited transaction with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions withoutgetting charges any fees.',
    buttonLabel: 'Get Started',
    imgStart : false,
    img : Img1,
    alt: 'car',
    dark : true,
    primary: true,
    darkText: false
};
export const homeObjTwo = {
    id: 'discover',
    LightBg : true,
    lightText : false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline : 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart : true,
    img : Img2,
    alt: 'Piggy Bank',
    dark : true,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    LightBg : true,
    lightText : false,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline : 'Unlimited transaction with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions withoutgetting charges any fees.',
    buttonLabel: 'Start Now',
    imgStart : true,
    img : Img3,
    alt: 'Paper',
    dark : true,
    primary: false,
    darkText: true
};