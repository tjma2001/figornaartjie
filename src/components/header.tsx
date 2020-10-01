import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Button, Hidden } from "@material-ui/core"
import Logo from "./logo"

const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
  maxwidth: 960px;
`

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
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
  padding: 1rem;
  text-decoration: none;
`
const LogoWrapper = styled.div`
  width: 2rem;
`

const StyledButton = styled(Button)`
  font-size: 1.5rem;
  text-transform: none;
`

const StyledHeader = styled.div`
  display: box;
`

const StyledLink = styled(Link)`
  align-items: center;
  color: white;
  display: flex;
  padding: 0;
  text-decoration: none;
`

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <StyledHeader>
    <HeaderWrapper>
      <Hidden xsDown>
        <HeaderLeft>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <h1 style={{ margin: 0, padding: 0 }}>
            <StyledLink to="/">{siteTitle}</StyledLink>
          </h1>
        </HeaderLeft>
      </Hidden>

      <Links>
        <StyledButton color="primary" href="#contact" variant="contained">
          Contact
        </StyledButton>
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
