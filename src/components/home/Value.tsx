import React from "react"
import styled from "styled-components"

import Prototype from "../images/Prototype"
import Research from "../images/Research"
import Time from "../images/Time"

const Content = styled.div`
  font-size: 1.25rem;
  line-height: 1.5rem;
  max-width: 70rem;
  text-align: justify;
  text-justify: inter-word;
`

const ImageWrapper = styled.div<{ reverse?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${({ reverse }) => (reverse ? "2rem" : "0")};
  margin-right: ${({ reverse }) => (reverse ? "0" : "2rem")};
  width: 50rem;

  &:before {
    background-color: rba(0, 0, 0, 0);
    border-radius: 100px / 50px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 175px 80px 0px;
    content: " ";
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 4rem;
    position: absolute;
    top: 0px;
    width: 200px;
  }
`

const ImageWrapperShadow = styled.div``

const MB24 = styled.div`
  margin-bottom: 1.5rem;
`

const StyledCard = styled.div``

const StyledCardContent = styled.div<{ reverse?: boolean }>`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row ")};
  position: relative;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
`

const Images: { [key: string]: JSX.Element } = {
  prototype: <Prototype />,
  research: <Research />,
  time: <Time />,
}

interface ValueProps {
  content: string
  index: number
  image: string
  title: string
}

export default function Value(props: ValueProps): JSX.Element {
  const { content, index, image, title } = props

  // console.log(Images[image])

  return (
    <StyledCard>
      <StyledCardContent reverse={index % 2 === 0}>
        <TextWrapper>
          <MB24>
            <Title>{title}</Title>
          </MB24>
          <Content>{content}</Content>
        </TextWrapper>
        <ImageWrapper reverse={index % 2 !== 0}>
          {Images[image]}
          <ImageWrapperShadow />
        </ImageWrapper>
      </StyledCardContent>
    </StyledCard>
  )
}
