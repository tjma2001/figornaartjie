import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Company = styled.div<{ white?: boolean }>`
  background-color: ${({ white }) => (white ? "white" : "unset")};
  max-width: 8rem;
  margin: 1rem 0;

  width: 8rem;

  @media (min-width: 600px) {
    margin: 1rem 2rem;
  }
`

const CompanyInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 70rem;
  padding: 0 1rem;
`

const CompanyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
`

const StyledImg = styled(Img)`
  width: 8rem;
`

export default function Companies(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      companies: allWorkJson {
        nodes {
          companyDescription
          duration
          name
          workDescription
          src {
            childImageSharp {
              fluid(maxHeight: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const companies = data?.companies.nodes

  return (
    <CompanyWrapper>
      <CompanyInnerWrapper>
        {companies.map(
          (company: { name: string; src: any }, index: number): JSX.Element => (
            <Company white={company.name === "Sensor networks"} key={index}>
              {company.src && (
                <StyledImg fluid={company.src.childImageSharp.fluid} />
              )}
            </Company>
          )
        )}
      </CompanyInnerWrapper>
    </CompanyWrapper>
  )
}
