import React from "react"
import styled from "styled-components"

const Content = styled.div`
  font-size: 1.25rem;
  line-height: 1.5rem;
`

const ImageWrapper = styled.div``

const MB24 = styled.div`
  margin-bottom: 1.5rem;
`

const StyledCard = styled.div``

const StyledCardContent = styled.div<{ reverse?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row ")};
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
`

interface ValueProps {
  content: string
  index: number
  image: string
  title: string
}

export default function Value(props: ValueProps): JSX.Element {
  const { content, index, image, title } = props

  return (
    <StyledCard>
      <StyledCardContent reverse={index % 2 === 0}>
        <TextWrapper>
          <MB24>
            <Title>{title}</Title>
          </MB24>
          <Content>{content}</Content>
        </TextWrapper>
        <ImageWrapper>
          <img src={image} alt="image" />
        </ImageWrapper>
      </StyledCardContent>
    </StyledCard>
  )
}
