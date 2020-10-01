import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  src: FluidObject
}

const Image = ({ src }: Props): JSX.Element => {
  return <Img fluid={src} />
}

export default Image
