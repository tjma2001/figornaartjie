import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import { Card, CardContent, CardMedia } from "@material-ui/core"

const VALUES = [
  "We deliver high quality software solutions that aren’t late and over budget. Too often projects suffer from bloated scope creep. We ensure that the considerations of our clients are always well managed, while keeping an eye on time and budget constraints, delivering quality software solutions to spec.",
  "Our lean and experienced team ensures that more money can be spent on building quality software instead of wasted human overheads.",
  "Our highly skilled DevOps and engineering team ensure that your projects are structured for growth. Having broad experience over a number of container and continuous integration software solutions, we can get you to the cloud faster.",
]

const CallToAction = styled.div`
  color: black;
  margin: 2rem 1rem;
  text-align: center;
`

const Content = styled.div`
  align-self: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  width: 100%;
`

const HeaderWrapper = styled.div`
  background-color: black !important;
  height: 100%;
  width: 100%;
`

const LogoInnerWrapper = styled.div`
  display: block;
  width: 100%;

  @media (min-width: 600px) {
    max-height: 80%;
    max-width: 400px;
    min-height: 20rem;
  }
`

const LogoWrapper = styled.div`
  background-color: black;
  align-items: center;
  display: flex;
  justify-content: center;
`

const StyledCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.245);
  border: 1px solid rgba(255, 255, 255, 0.145);
  border-radium: 6px;
  color: white;
  margin: 1rem;
  height: 12rem;
  width: 90%;

  @media (min-width: 600px) {
    width: 18rem;
  }
`

const StyledCardContent = styled(CardContent)`
  align-items: center;
  display: flex;
  height: 100%;
`

const Title = styled.div`
  font-size: 2rem;
  padding: 2rem;
  padding-bottom: 4rem;
  text-align: center;
`

const Values = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const Value = ({ content }: { content: string }): JSX.Element => (
  <StyledCard>
    <StyledCardContent>{content}</StyledCardContent>
  </StyledCard>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <HeaderWrapper>
        <Title>High quality bespoke software development</Title>
        <LogoWrapper id="logo-wrapper">
          <LogoInnerWrapper>
            <Logo />
          </LogoInnerWrapper>
        </LogoWrapper>
        <Values>
          {VALUES.map(value => (
            <Value content={value} />
          ))}
        </Values>
      </HeaderWrapper>
      <CallToAction>
        Please <Link to="/contact">contact us</Link> if you are interested in
        our services. We will be happy to answer any questions you might have.
      </CallToAction>
    </Content>
  </Layout>
)

export default IndexPage
