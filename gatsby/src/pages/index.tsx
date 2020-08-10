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
  background-color: black;
  height: 100%;
`

const LogoWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  @media (min-width: 600px) {
    max-width: 400px;
    min-height: 20rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </HeaderWrapper>
    </Content>
  </Layout>
)

export default IndexPage
