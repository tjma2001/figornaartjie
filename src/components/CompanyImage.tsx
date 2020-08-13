import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface Props {
  src: string
}

const Image = ({ src }: Props): JSX.Element => {
  return <Img fluid={src} />
}

export default Image
