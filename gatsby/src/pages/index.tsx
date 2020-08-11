import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

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
  height: 100%;
  justify-content: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <HeaderWrapper>
        <LogoWrapper id="logo-wrapper">
          <LogoInnerWrapper>
            <Logo />
          </LogoInnerWrapper>
        </LogoWrapper>
      </HeaderWrapper>
    </Content>
  </Layout>
)

export default IndexPage
