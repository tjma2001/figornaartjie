import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  padding: 2rem;
`

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <h1>Hi from the about page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Wrapper>
  </Layout>
)

export default SecondPage
