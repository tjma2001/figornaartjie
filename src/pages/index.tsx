import React from "react"
import styled from "styled-components"
import { Box, Button, Card, CardContent, Hidden } from "@material-ui/core"

import CompaniesList from "../components/home/Companies"
import header from "../components/header"
import Layout from "../components/layout"
import ReceiptsAndInvoices from "../components/ReceiptsAndInvoices"
import SEO from "../components/seo"
import Terminal from "../components/home/Terminal"
import Value from "../components/home/Value"
import Contact from "../components/home/Contact"
import { graphql, useStaticQuery } from "gatsby"
import Technologies from "../components/home/Technologies"

const VALUES = [
  {
    content:
      "We specialize in helping companies develop early stage product prototypes and experimental workflows. With our quick execution time, we can quickly help you discover if a product idea or workflow pipeline works for you.",
    image: "prototype",
    title: "Iterate quickly",
  },
  {
    content:
      "Are keeping up with best practices? Do you need to know how to improve your workflows and boost productivity? Our audits provide you with actionable insights that will empower you to make better decisions.",
    image: "research",
    title: "Get actionable insights",
  },
  {
    content:
      "Eliminate wasted opportunity costs that take dedicated resources off task by focussing on what you do best. Reduce costs and time to market by ensuring that your core team is always on track. We will handle everything else.",
    image: "time",
    title: "Get to market quickly",
  },
]

const CallToAction = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  margin: 2rem 1rem;
  text-align: center;
`

const ContactButton = styled(Button)`
  font-size: 1.5rem;
  padding: 0.125rem 0.75rem;
  text-transform: none;
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

const Companies = styled.div`
  display: flex;
  flex-direction: column;
`

const CompaniesWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 2rem 0;
`

const CompaniesTitleText = styled.div`
  font-size: 1.5rem;
  text-align: center;
`

const Header = styled(header)`
  width: 100%;
`

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23ffffff' fill-opacity='0.11' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 100%;
`

const MB24 = styled.div`
  margin-bottom: 1.5rem;
`

const MB24SM60 = styled.div`
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    margin-bottom: 5rem;
  }
`

const MB32 = styled.div`
  margin-bottom: 2rem;
`

const MB40 = styled.div`
  margin-bottom: 2.5rem;
`

const MB60 = styled.div`
  margin-bottom: 3.75rem;
`

const MB80 = styled.div`
  margin-bottom: 5rem;
`

const SubTitle = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
  padding: 0 1rem;
  text-align: center;

  @media (min-width: 600px) {
    margin-bottom: 8rem;
  }
`
const SubTitleBlack = styled.div`
  color: black;
  font-size: 3.5rem;
  font-weight: 600;
`

const TechnologiesWrapper = styled.div`
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4rem 4rem;
`

const Title = styled.div`
  font-size: 3rem;
  padding: 2rem;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 4rem;
  }
`

const Values = styled.div`
  align-items: center;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80rem;
`

const ValueWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
`

const Announcement = (): JSX.Element => (
  <Card>
    <CardContent>
      <ReceiptsAndInvoices />
    </CardContent>
  </Card>
)

const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />
      <Content>
        <HeaderWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Title>Turn your big ideas into code quickly</Title>
          <MB24SM60 />

          <SubTitle>
            We are a research first company that executes rapid prototypes and
            experimental workflows to accelerate your business
          </SubTitle>
          <Hidden xsDown>
            <Box paddingLeft="1rem" paddingRight="1rem">
              <Terminal />
            </Box>
            <MB80 />
          </Hidden>

          <ContactButton color="primary" href="#contact" variant="contained">
            Get started now
          </ContactButton>
          <MB60 />

          <Companies>
            <CompaniesTitleText>
              We have helped some really great companies
            </CompaniesTitleText>
            <MB24 />
            <CompaniesList />
          </Companies>
        </HeaderWrapper>
        <MB40 />

        <ValueWrapper>
          <SubTitleBlack>We accelerate business</SubTitleBlack>
          <MB80 />
          <Values>
            {VALUES.map((value, index) => (
              <MB24 key={index}>
                <Value
                  content={value.content}
                  image={value.image}
                  index={index}
                  title={value.title}
                />
              </MB24>
            ))}
          </Values>
        </ValueWrapper>

        <TechnologiesWrapper>
          <Technologies />
        </TechnologiesWrapper>

        <CallToAction id="contact">
          <Contact />
        </CallToAction>

        {/* <Announcement /> */}
      </Content>
    </Layout>
  )
}
export default IndexPage
