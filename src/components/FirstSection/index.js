import React, { useEffect } from 'react'
import Aos from 'aos'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './FirstElements'
import { Clip, ClipH1, ClipP, ClipSpan, } from './ClipElements'
import { FaRegLightbulb } from 'react-icons/fa'



const FirstSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 data-aos="fade-up">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Clip>
                  <ClipSpan><FaRegLightbulb size={24}/></ClipSpan>
                  <ClipH1>Learn more</ClipH1>
                  <ClipP>This website is made by React.js and styled-components.</ClipP>
                </Clip>
              </TextWrapper>
            </Column1>
            <Column2 data-aos="fade-up">
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default FirstSection
