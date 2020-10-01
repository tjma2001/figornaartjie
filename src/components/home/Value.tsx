import React from "react"
import styled from "styled-components"

import Prototype from "../images/Prototype"
import Research from "../images/Research"
import Time from "../images/Time"

const Content = styled.div`
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: justify;
  text-justify: inter-word;
  width: 20rem;
  max-width: 100%;
  padding: 0 0.5rem;

  @media (min-width: 600px) {
    max-width: 50rem;
    width: calc(100vw - 22rem);
  }
`

const ImageWrapper = styled.div<{ reverse?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;

  @media (min-width: 600px) {
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
  }
`

const ImageWrapperShadow = styled.div``

const MB24 = styled.div`
  margin-bottom: 1.5rem;
`

const MB32 = styled.div`
  margin-bottom: 2rem;
`

const MB40 = styled.div`
  margin-bottom: 3.75rem;
`

const StyledCard = styled.div``

const StyledCardContent = styled.div<{ reverse?: boolean }>`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column-reverse;
  position: relative;

  @media (min-width: 600px) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row ")};
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  max-width: 100vw;
  padding: 0 0.5rem;
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
          <MB40 />
        </ImageWrapper>
      </StyledCardContent>
    </StyledCard>
  )
}
