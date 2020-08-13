import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Hidden } from "@material-ui/core"

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 3rem;
  justify-content: space-between;
  padding: 0 0 0.5rem 0.5rem;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    padding-bottom: 0;
  }
`

const Links = styled.div`
  display: flex;
  height: 100%;
  min-height: 100%;
`

const StyledHeader = styled.div`
  display: box;
`

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

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <StyledHeader>
    <HeaderWrapper>
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
        <StyledLink to="/">home</StyledLink>
        <StyledLink to="/contracts">contracts</StyledLink>
        <StyledLink to="/contact">contact</StyledLink>
      </Links>
    </HeaderWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
