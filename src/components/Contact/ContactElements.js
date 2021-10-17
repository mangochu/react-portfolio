import styled from "styled-components"

export const ContactContainer = styled.div`
  color: #fff;
  background: #010709;
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 850px;
}
`

export const ContactH = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
  font-size: 2rem;
}
`

export const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ContactImg = styled.img`
  border-radius: 50%;
  border: 7px solid #01BF71;
  margin: 15px 0;
  max-width: 240px;
`

export const ContactName = styled.h2`
  margin-bottom: 20px;
`

export const ContactMail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ContactP = styled.p`
  margin: 0 10px;
`

