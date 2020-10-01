/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "styled-components"
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
  border: 1px solid black;
  color: white;
  display: flex;
  flex-flow: row wrap;
  font-size: 0.75rem;
  height: auto;
  justify-content: center;
  padding: 0.25rem 1.25rem;
`

const FooterContent = styled.div`
  text-align: justify;
  text-justify: inter-word;
`

const Header = styled(header)``

const StyledLink = styled.a`
  color: skyblue;
`

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
      <Footer>
        <FooterContent>
          © {new Date().getFullYear()}, FigOrNaartjie. Cape Town. South Africa.
          Built with&nbsp;
          <StyledLink href="https://www.gatsbyjs.org/" target="_blank">
            Gatsby
          </StyledLink>
          . Hosting via{" "}
          <StyledLink href="https://netlify.com" target="_blank">
            Netlify.
          </StyledLink>
          &nbsp;
          {/* <StyledLink href="https://github.com/tjma2001/figornaartjie">
            Github Source
          </StyledLink> */}
        </FooterContent>
      </Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
