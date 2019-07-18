import Typography from "@material-ui/core/Typography"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const SingleImg = styled.img`
  width: 86%;
  margin-left: 7%;
  margin-right: 7%;
`

const CarousellWrapper = styled.div`
  width: ${props => (props.size === "small" ? "20%" : "70%")};
  margin-left: ${props => (props.size === "small" ? "40%" : "15%")};
  margin-right: ${props => (props.size === "small" ? "40%" : "15%")};
`

const YoutubeTitle = styled(Typography)`
  font-weight: bold !important;
`

const WorkCard = ({
  mediaType,
  mediaSrc,
  mediaSrcList,
  mediaSrcSize,
  title,
}) => (
  <div>
    {mediaType === "single-image" && <SingleImg src={mediaSrc} alt={title} />}
    {mediaType === "carousell-image" && (
      <div>
        <YoutubeTitle variant="h5" gutterBottom>
          {"Slide show"}
        </YoutubeTitle>
        <br />
        <CarousellWrapper size={mediaSrcSize}>
          <Carousel
            showStatus={false}
            dynamicHeight={true}
            autoPlay={true}
            infiniteLoop={true}
          >
            {mediaSrcList.map((src, index) => (
              <img
                style={{ background: "#ffffff" }}
                src={src}
                alt={`${title}-${index}`}
                key={index}
              />
            ))}
          </Carousel>
        </CarousellWrapper>
      </div>
    )}
  </div>
)

export default WorkCard
