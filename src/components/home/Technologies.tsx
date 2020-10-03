import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImg = styled(Img)`
  width: 100%;
`
const Tech = styled.div`
  width: 3.75rem;
  margin: 0.5rem;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80rem;
`

export default function Technologies(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      techImages: allFile(
        filter: { relativePath: { regex: "/tech-images/" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxHeight: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const techImages = data?.techImages.nodes
  console.log("techImages", techImages)

  return (
    <Wrapper>
      {techImages.map((techImage: any, index: number) => (
        <Tech>
          <StyledImg fluid={techImage.childImageSharp.fluid} key={index} />
        </Tech>
      ))}
    </Wrapper>
  )
}
