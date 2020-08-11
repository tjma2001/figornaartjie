/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import header from "./header"
import "./layout.css"

const Content = styled.div`
  align-self: center;
  color: white;
  flex: 1;
  width: 100%;
`

const Footer = styled.footer`
  background-color: black;
  color: white;
  max-height: 2rem;
  padding: 0.25rem 0.25rem 0.25rem 1rem;
`

const Header = styled(header)``

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  width: 100%;
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>{children}</Content>
      <Footer>© {new Date().getFullYear()}, FigOrNaartjie</Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
