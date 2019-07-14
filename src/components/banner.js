import Typography from "@material-ui/core/Typography"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const BannerWrapper = styled.div`
  background-color: #1c202e;
  text-align: center;
`

const BannerTitle = styled(Typography)`
  color: white !important;
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
`

const Banner = ({ headline }) => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fixed(width: 1440, height: 495) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <BannerWrapper>
      <Img
        fixed={data.bannerImage.childImageSharp.fixed}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={headline}
      />
      <BannerTitle variant="h5">{headline}</BannerTitle>
    </BannerWrapper>
  )
}

export default Banner
