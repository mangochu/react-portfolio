import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ScrollDown } from './HeroElements'
// import {Button} from '../ButtonElements'

const HeroSection = () => {
  // const [hover, setHover] = useState(false)

  // const onHover = () => {
  //   setHover(!hover)
  // }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello there!</HeroH1>
        <HeroP>I'm MangoChu, and welcome to my portfolio.</HeroP>
        {/* <HeroBtnWrapper>
          <Button to="about"smooth={true} duration={500} spy={true} exact='true' offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
        </HeroBtnWrapper> */}
        <ScrollDown to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} />
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
