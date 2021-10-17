import styled from "styled-components"



export const ClipSpan = styled.span`
  color: white;
  font-weight: bold;
  transition: color .5s;
  position: absolute;
  margin-left: -3px;
`
export const ClipH1 = styled.h1`
  font-size: 1.2rem;
  color: transparent;
  transition: all .5s ease-in-out;
  margin: 0;
  `

export const Clip = styled.div`
  background: #01bf71;
  padding: 1em;
  border-radius: 10px;
  width: 250px;
  clip-path: circle(10% at 10% 23%);
  transition: all .5s ease-in-out;

  &:hover {
    clip-path: circle(75%);
    background: #00b6ff;
  }

  &:hover ${ClipSpan}{
    color: transparent;
  }

  &:hover ${ClipH1}{
    color: white;
  }
`

export const ClipP = styled.p`
  color: white;
  font-size: 1rem;
  margin-top: 4px;
`

