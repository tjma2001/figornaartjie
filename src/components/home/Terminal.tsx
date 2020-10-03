import React from "react"
import styled from "styled-components"
import Typed from "react-typed"

const StyledTyped = styled(Typed)`
  color: white;
`

const TerminalContent = styled.div`
  display: flex;
  padding: 1rem;
  height: 8rem;
  min-height: 8rem;
  width: 100%;
`

const TerminalStart = styled.div`
  margin-right: 0.5rem;
`

const TerminalTitleBar = styled.div`
  background-color: #f8f8f8;
  background-image: linear-gradient(top, #e8e8e8, #bcbbbc);
  background-image: -moz-linear-gradient(top, #e8e8e8, #bcbbbc);
  background-image: -webkit-linear-gradient(top, #e8e8e8, #bcbbbc);
  border-bottom: #6a6a6a 1px solid;
  border-radius: 6px 6px 0 0;
  color: black;
  font-family: "Lucinda Grande", sans-serif;
  font-size: 0.75rem;
  padding: 5px 0;
  text-align: center;
  text-shadow: rgba(255, 255, 255, 0.8) 0px 1px 0px;
`

const TerminalWrapper = styled.div`
  background-color: black;
  border-radius: 6px;
  box-shadow: rgba(255, 255, 255, 0.8) 0px 0 0px 0px;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  width: calc(100vw - 2rem);

  @media (min-width: 600px) {
    width: 40rem;
    max-width: 40rem;
  }
`

export default function Terminal(): JSX.Element {
  return (
    <TerminalWrapper>
      <TerminalTitleBar>figornaartjie - bash - 640x10</TerminalTitleBar>
      <TerminalContent>
        <TerminalStart>$</TerminalStart>
        <StyledTyped
          backDelay={5000}
          loop
          strings={[
            "start new project^1000<br /> deploying to test network...^1200<br /> applying user insights...^1500 <br /> launching to production",
          ]}
          typeSpeed={40}
        />
      </TerminalContent>
    </TerminalWrapper>
  )
}
