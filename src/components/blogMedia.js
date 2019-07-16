import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import styled from "styled-components"

const WorkCard = ({ mediaType, mediaSrc, mediaSrcList, title }) => (
  <div>
    {mediaType === "single-image" && (
      <img
        style={{
          width: "86%",
          marginLeft: "12%",
          marginRight: "12%",
        }}
        src={mediaSrc}
        alt={title}
      />
    )}
    {mediaType === "carousell-image" && (
      <div
        style={{
          width: "70%",
          marginLeft: "15%",
          marginRight: "15%",
        }}
      >
        <Carousel showStatus={false}>
          {mediaSrcList.map((src, index) => (
            <img
              style={{ background: "#ffffff" }}
              src={src}
              alt={`${title}-${index}`}
              key={index}
            />
          ))}
        </Carousel>
      </div>
    )}
  </div>
)

export default WorkCard
