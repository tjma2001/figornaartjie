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
  // background-color: black;
  color: white;
  flex-grow: 5;
  max-width: 60rem;
  height: calc(100% - 4.5rem);
`

const Footer = styled.footer`
  flex-shrink: 1;
  padding: 0.25rem;
`

const Header = styled(header)`
  flex-shrink: 1;
`

const Wrapper = styled.div`
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
