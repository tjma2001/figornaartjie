import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button, Card, CardContent } from "@material-ui/core"

import Layout from "../components/layout"
import Logo from "../components/logo"
import ReceiptsAndInvoices from "../components/ReceiptsAndInvoices"
import SEO from "../components/seo"
import Terminal from "../components/Terminal"
import Value from "../components/Value"

const VALUES = [
  {
    content:
      "We specialize in helping companies develop early stage product prototypes and experimental workflows. With our quick execution time, we can quickly help you discover if a product idea or workflow pipeline works for you.",
    image: "prototype",
    title: "Iterate quickly",
  },
  {
    content:
      "Outsource research tasks to us for concise reporting that will empower your organization and allow you to stay focused. Don’t spend your organization’s precious resources on tasks that are not part of your core business offering",
    image: "research",
    title: "Research driven",
  },
  {
    content:
      "Eliminate wasted opportunity costs that take dedicated resources off task by focussing on what you do best. Reduce costs and time to market by ensuring that your core team is always on track. We will handle everything else.",
    image: "time",
    title: "Save time",
  },
]

const CallToAction = styled.div`
  color: black;
  margin: 2rem 1rem;
  text-align: center;
`

const ContactButton = styled(Button)`
  font-size: 2rem;
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

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: black !important;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 100%;
`

const MB24 = styled.div`
  margin-bottom: 1.5rem;
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

const SubTitle = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 8rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
  text-align: center;
`

const Title = styled.div`
  font-size: 3rem;
  padding: 2rem;
  text-align: center;
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
  display: flex;
  justify-content: center;
  margin: 0 8rem;
`

const Announcement = (): JSX.Element => (
  <Card>
    <CardContent>
      <ReceiptsAndInvoices />
    </CardContent>
  </Card>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <HeaderWrapper>
        <Title>Rapid prototype and workflow development</Title>
        <MB60 />

        <SubTitle>
          We are a research first company the executes rapid prototypes and
          experimental workflows to accelerate your business.
        </SubTitle>
        <Terminal />
        <MB40 />

        <ContactButton color="primary" variant="contained">
          Contact us
        </ContactButton>
      </HeaderWrapper>
      <MB40 />

      <ValueWrapper>
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

      <CallToAction>
        Please <Link to="/contact">contact us</Link> if you are interested in
        our services. We will be happy to answer any questions you might have.
      </CallToAction>

      {/* <Announcement /> */}
    </Content>
  </Layout>
)

export default IndexPage
