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
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzI4MjgyOCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzIiBjeT0iNC4zIiByPSIxLjgiIGZpbGw9IiMzOTM5MzkiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMS44IiBmaWxsPSJibGFjayI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjEwLjUiIGN5PSIxMi41IiByPSIxLjgiIGZpbGw9IiMzOTM5MzkiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIxMC41IiBjeT0iMTEuMyIgcj0iMS44IiBmaWxsPSJibGFjayI+PC9jaXJjbGU+Cjwvc3ZnPg==");
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
            We are a research first company the executes rapid prototypes and
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

        <CompaniesWrapper>
          <CompaniesList />
        </CompaniesWrapper>

        <CallToAction id="contact">
          <Contact />
        </CallToAction>

        {/* <Announcement /> */}
      </Content>
    </Layout>
  )
}
export default IndexPage
