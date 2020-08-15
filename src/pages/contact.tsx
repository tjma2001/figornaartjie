import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Button,
  TextField,
  SvgIcon,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@material-ui/core"
import Logo from "../components/logo"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxCBgwjNaiIkqX38fOfTxCd_1L2kAckj9N4b5pTkE0NTKbQan-h/exec"

const successSvg = (
  <path d="M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17 7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42-6.35 6.35 1.42 1.41L18 7z" />
)

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Blurb = styled.div`
  font-size: 1.2rem;
  padding: 2rem 0;
`

const LogoWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`

const MB24 = styled.div`
  margin-bottom: 1.5rem;
`

const StyledCard = styled(Card)`
  border-radius: 0;

  @media (min-width: 600px) {
    border-radius: 6px;
  }
`

const StyledCardContent = styled(CardContent)`
  margin: 0;
  padding: 0;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

const InnerLogoWrapper = styled.div`
  width: 50%;
`

const SuccessSvgIcon = styled(SvgIcon)`
  color: green;
  font-size: 8rem;
`

const SuccessWrapper = styled.div`
  align-items: center;
  color: black;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  padding: 1rem;
  text-align: justify;
  text-justify: inter-word;
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;

  @media (min-width: 600px) {
    padding: 2rem;
  }
`

const SucessSubmitElement = (): JSX.Element => (
  <SuccessWrapper>
    <SuccessSvgIcon>{successSvg}</SuccessSvgIcon>
    <MB24 />

    <div>
      Thank you for submitting your query. We will get back to you shortly.
    </div>
  </SuccessWrapper>
)

const SecondPage = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const submit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    const scriptURL = SCRIPT_URL
    const form = new FormData()
    form.append("name", name)
    form.append("email", email)
    form.append("message", message)

    try {
      e.preventDefault()
      setSubmitting(true)

      const result = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: form,
      })

      setSubmitSuccess(true)
    } catch (error) {
      console.error("error", error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Layout>
      <SEO title="Page two" />
      <Wrapper>
        {!submitSuccess && (
          <StyledCard>
            <StyledCardContent>
              <LogoWrapper>
                <InnerLogoWrapper>
                  <Logo />
                </InnerLogoWrapper>
              </LogoWrapper>
              <StyledForm>
                <Blurb>
                  Please feel free to contact us using the form below.
                </Blurb>
                <TextField
                  label="Name"
                  name="Name"
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
                <MB24 />

                <TextField
                  label="Email"
                  name="Email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
                <MB24 />

                <TextField
                  label="Message"
                  multiline
                  name="Message"
                  onChange={e => setMessage(e.target.value)}
                  rows={4}
                  value={message}
                />
                <MB24 />

                <ButtonWrapper>
                  <Button
                    color="primary"
                    disabled={submitting}
                    onClick={(e): void => {
                      submit(e)
                    }}
                    variant="contained"
                  >
                    submit{" "}
                  </Button>
                </ButtonWrapper>
              </StyledForm>
            </StyledCardContent>
          </StyledCard>
        )}
        {submitSuccess && <SucessSubmitElement />}
      </Wrapper>
    </Layout>
  )
}

export default SecondPage
