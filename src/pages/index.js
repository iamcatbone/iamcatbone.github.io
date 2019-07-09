import React from "react"
import { graphql } from "gatsby"

import Banner from "../components/banner"
import ClassPanel from "../components/classPanel"
import Layout from "../components/layout"
import SEO from "../components/seo"

const classes = [
  {
    title: "Designs",
    desc:
      "I had experiences in working as graphics and UI designer. Have a look on my works!",
    cover: "thor.jpg",
    buttons: [
      {
        label: "UI UX Design works",
        path: "/",
      },
      {
        label: "Graphic Design works",
        path: "/",
      },
    ],
  },
  {
    title: "Illustrations",
    desc: "Illustration is a media to express myself. Have a look on my works!",
    cover: "thor.jpg",
    buttons: [
      {
        label: "My Illustrations",
        path: "/",
      },
    ],
  },
  {
    title: "Sketches",
    desc:
      "I enjoy sketching the details of different objects/animals. Have a look on my works!",
    cover: "thor.jpg",
    buttons: [
      {
        label: "My Sketches",
        path: "/",
      },
    ],
  },
]

const headline = "Every one has a dream."

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Banner bannerImage={props.data.bannerImage} headline={headline} />
    {classes.map((props, index) => (
      <ClassPanel key={index} index={index % 2} {...props} />
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    bannerImage: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fixed(width: 1440, height: 495) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
