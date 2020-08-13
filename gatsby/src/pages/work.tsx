import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { CardContent, Card } from "@material-ui/core"

// import CompanyImage from "../components/CompanyImage"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const CompanyContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  width: 100%;
`

const CompanyImage = styled.div`
  // background-color: grey;
`

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
`

const Description = styled.div`
  margin-bottom: 0.25rem;
`

const Image = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    max-width: 30%;
  }
`

const MB24 = styled.div`
  margin-bottom: 1.5rem;
`

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  padding-bottom: 0.125rem;
`

const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`

const WorkDescription = styled.div``

const Wrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;

  @media (min-width: 600px) {
    padding: 1rem;
  }
`

const WorkPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      companies: allWorkJson {
        nodes {
          companyDescription
          name
          workDescription
          src {
            childImageSharp {
              fluid(maxHeight: 300) {
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
    <Layout>
      <Wrapper>
        <div>
          Here is a list of some of the companies that I have worked with over
          the past few years
        </div>
        <MB24 />

        {companies.map(company => (
          <>
            <Card>
              <CardContent>
                <ContentWrapper>
                  <Image>
                    <CompanyImage>
                      {company.src && (
                        <Img fluid={company.src.childImageSharp.fluid} />
                      )}
                    </CompanyImage>
                  </Image>
                  <CompanyContent>
                    <Name>{company.name}</Name>
                    <Description>
                      <Title>Description: </Title>
                      {company.companyDescription}
                    </Description>
                    <WorkDescription>
                      <Title>Role: </Title>
                      {company.workDescription}
                    </WorkDescription>
                  </CompanyContent>
                </ContentWrapper>
              </CardContent>
            </Card>
            <MB24 />
          </>
        ))}
      </Wrapper>
    </Layout>
  )
}

export default WorkPage
