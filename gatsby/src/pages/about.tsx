import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Hidden,
} from "@material-ui/core"

import { Experience, Qualifications, ResearchPublications } from "../data/about"

const MB2 = styled.div`
  margin-bottom: 0.125;
`

const MB4 = styled.div`
  margin-bottom: 0.25rem;
`

const MB8 = styled.div`
  margin-bottom: 0.5rem;
`

const MB16 = styled.div`
  margin-bottom: 1rem;
`

const MB24 = styled.div`
  margin-bottom: 1.5rem;
`

const MB32 = styled.div`
  margin-bottom: 2rem;
`

const PublicationsTitle = styled.span`
  font-weight: 500;
`

const PublicationsWrapper = styled.div`
  @media (min-width: 600px) {
    padding-left: 0.25rem;
  }
`

const QualificationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    align-items: flex-end;
    flex-direction: row;
    padding-left: 0.5rem;
  }
`
const QualificationDate = styled.div`
  font-size: 0.75rem;

  @media (min-width: 600px) {
    padding-left: 0.25rem;
  }
`

const QualificationDescription = styled.div`
  @media (min-width: 600px) {
    font-style: italic;
    padding-left: 0.25rem;
  }
`

const QualificationInstitution = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  width: 3rem;
`

const Skill = styled.div`
  margin-left: 0;

  @media (min-width: 600px) {
    margin-left: 0.5rem;
  }
`

const SkillDates = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
`

const SkillTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`

const SkillTitleDescription = styled.div`
  @media (min-width: 600px) {
    padding-left: 0.25rem;
  }
`

const SkillTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;

  @media (min-width: 600px) {
    align-items: flex-end;
    flex-direction: row;
  }
`

const StyledCard = styled(Card)`
  @media (min-width: 600px) {
    .MuiCard-root {
    }
  }
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`

const Wrapper = styled.div`
  font-color: black;
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
  @media (min-width: 600px) {
    padding: 1rem;
  }
`

const Education = (): JSX.Element => (
  <>
    {Qualifications.map(qualification => (
      <div>
        <QualificationWrapper>
          <QualificationInstitution>
            {qualification.institution}
          </QualificationInstitution>
          <MB4 />
          <Hidden xsDown> - </Hidden>
          <QualificationDescription>
            {qualification.description}
          </QualificationDescription>
          <MB4 />
          <QualificationDate>
            <Hidden xsDown>(</Hidden>
            {qualification.date}
            <Hidden xsDown>)</Hidden>
          </QualificationDate>
        </QualificationWrapper>
        <MB16 />
      </div>
    ))}
  </>
)

const Publications = (): JSX.Element => (
  <>
    {ResearchPublications.map(publication => (
      <>
        <PublicationsWrapper>
          <PublicationsTitle>Published:</PublicationsTitle>
          <span>{publication}</span>
        </PublicationsWrapper>
        <MB16 />
      </>
    ))}
  </>
)

const WorkExperience = (): JSX.Element => (
  <>
    {Experience.map(experience => (
      <Skill>
        <SkillDates>{experience.dates}</SkillDates>
        <MB4 />
        <SkillTitleWrapper>
          <SkillTitle>{experience.title}</SkillTitle>
          <MB2 />
          <SkillTitleDescription>
            <Hidden xsDown> - </Hidden>
            {experience.titleDescription}
          </SkillTitleDescription>
        </SkillTitleWrapper>
        <MB8 />

        {experience.description && <MB4 />}
        <div>{experience.description}</div>
        <MB24 />
      </Skill>
    ))}
  </>
)

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <StyledCard>
        <CardHeader title="Taariq Mullins" />
        <CardContent>
          <Title>Skills</Title>
          <MB16 />
          <div>
            I have strong skills in project management and the ability to handle
            the entire lifecycle of a project. This applies to the entire stack
            from project conception, continuous integration and deployment.
          </div>
          <MB32 />

          <Title>Experience</Title>
          <MB16 />
          <WorkExperience />
          <MB32 />

          <Title>Education</Title>
          <MB16 />
          <Education />
          <MB32 />

          <Title>Research Publications</Title>
          <MB16 />
          <Publications />
          <MB24 />
        </CardContent>
      </StyledCard>
    </Wrapper>
  </Layout>
)

export default SecondPage
