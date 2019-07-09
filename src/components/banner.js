import Typography from "@material-ui/core/Typography"
import React from "react"
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
const Banner = ({ bannerImage, headline }) => (
  <BannerWrapper>
    <Img
      fixed={bannerImage.childImageSharp.fixed}
      objectFit="cover"
      objectPosition="50% 50%"
      alt={headline}
    />
    <BannerTitle variant="h5">{headline}</BannerTitle>
  </BannerWrapper>
)

export default Banner
