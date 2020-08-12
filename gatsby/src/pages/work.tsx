import React from "react"
import styled from "styled-components"
import { CardContent, Card } from "@material-ui/core"

import { companies } from "../data/work"

import CompanyImage from "../components/CompanyImage"
import Layout from "../components/layout"

const CompanyContent = styled.div`
  width: 100%;
`

const Image = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    max-width: 30%;
  }
`

const ContentWrapper = styled.div`
  display: flex;
`

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
  return (
    <Layout>
      <Wrapper>
        <div>
          Here is a list of some of the companies that we have worked with over
          the past few years
        </div>
        {companies.map(company => (
          <Card>
            <CardContent>
              <ContentWrapper>
                <Image>
                  <CompanyImage imageName="houseme.svg" />
                </Image>
                <CompanyContent></CompanyContent>
              </ContentWrapper>
            </CardContent>
          </Card>
        ))}
      </Wrapper>
    </Layout>
  )
}

export default WorkPage
