import React, { useState } from "react"
import styled from "styled-components"
import { Button, TextField, SvgIcon, CardContent } from "@material-ui/core"
import {
  DatePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"
import dayjs from "dayjs"
import DateFnsUtils from "@date-io/date-fns"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxCBgwjNaiIkqX38fOfTxCd_1L2kAckj9N4b5pTkE0NTKbQan-h/exec"

const successSvg = (
  <path d="M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17 7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42-6.35 6.35 1.42 1.41L18 7z" />
)

const ButtonWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Blurb = styled.div`
  font-size: 2rem;
  font-weight: 500;
  padding: 2rem 0;
  text-align: left;
  width: 100%;
`

const ContactButton = styled(Button)`
  font-size: 1.5rem;
  text-transform: none;
  padding: 0.25rem 0.75rem;
`

const FieldWrapper = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: 15rem;
  }
`

const LogoWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`

const MB16 = styled.div`
  margin-bottom: 1rem;
`

const MB24 = styled.div`
  margin-bottom: 1.5rem;
`

const MB40 = styled.div`
  margin-bottom: 3.75rem;
`

const StyledCardContent = styled(CardContent)`
  margin: 0;
  padding: 0;
`

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
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
  max-width: 70rem;

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

export default function Contact(): JSX.Element {
  const [budget, setBudget] = useState<undefined | number>(0)
  const [dueDate, setDueDate] = useState<Date>(
    dayjs(new Date()).add(1, "month").set("day", 0).set("hour", 0).toDate()
  )
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
    form.append("budget", budget?.toString() ?? "")
    form.append("dueDate", dayjs(dueDate).format("DD-MMM-YYYY"))
    form.append("email", email)
    form.append("name", name)
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

  const validForm = email.length > 5 && name.length > 1 && message.length > 10

  return (
    <Wrapper>
      {!submitSuccess && (
        <StyledCardContent>
          <StyledForm>
            <Blurb>Send us your ideas and we'll launch together</Blurb>
            <TextField
              fullWidth
              label="*Name"
              name="Name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <MB24 />

            <TextField
              fullWidth
              label="*Email"
              name="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <MB24 />

            <FieldWrapper>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  format="dd/MM/yyyy"
                  fullWidth
                  id="date-picker-inline"
                  label="Estimated due date"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  margin="normal"
                  onChange={e =>
                    setDueDate(dayjs((e as unknown) as string).toDate())
                  }
                  value={dueDate}
                  variant="inline"
                />
              </MuiPickersUtilsProvider>
            </FieldWrapper>
            <MB24 />

            <FieldWrapper>
              <TextField
                fullWidth
                label="Estimated budget"
                name="Budget"
                onChange={e => setBudget(Number(e.target.value))}
                onFocus={event => event.target.select()}
                type="number"
                value={budget}
              />
            </FieldWrapper>
            <MB24 />

            <TextField
              error={message.length > 0 && message.length < 10}
              fullWidth
              label="*Message"
              helperText={message.length > 10 ? "" : `${message.length}/10`}
              multiline
              name="Message"
              onChange={e => setMessage(e.target.value)}
              rows={4}
              value={message}
            />
            <MB24 />

            <ButtonWrapper>
              <ContactButton
                color="primary"
                disabled={submitting || !validForm}
                onClick={(e): void => {
                  submit(e)
                }}
                variant="contained"
              >
                Contact
              </ContactButton>
              <MB16 />
              <div>* means the field is required</div>
            </ButtonWrapper>
          </StyledForm>
        </StyledCardContent>
      )}
      {submitSuccess && <SucessSubmitElement />}
    </Wrapper>
  )
}
