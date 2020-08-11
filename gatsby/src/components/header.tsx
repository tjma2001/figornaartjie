import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Hidden } from "@material-ui/core"

const StyledLink = styled(Link)`
  align-items: center;
  color: white;
  display: flex;
  padding: 0 1rem;
  text-decoration: none;

  :hover {
    background-color: grey;
  }
`

const Links = styled.div`
  display: flex;
  height: 100%;
  min-height: 100%;
`

const StyledHeader = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 3rem;
  justify-content: space-between;
  padding: 0 0 0.5rem 0.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
    padding-bottom: 0;
  }
`

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <StyledHeader>
    <Hidden xsDown>
      <div
        style={{
          maxWidth: 960,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </h1>
      </div>
    </Hidden>

    <Links>
      <StyledLink to="/">
        <div>home</div>
      </StyledLink>
      <StyledLink to="/about">about</StyledLink>
      <StyledLink to="/contact">contact</StyledLink>
    </Links>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
