import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import ListingPageBase from "../components/listingPageBase"

const Page = () => {
  const data = useStaticQuery(graphql`
    query GraphicDesignListingQuery {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "graphic-design" } } }
        sort: { order: ASC, fields: [frontmatter___id] }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date
              thumbnail
            }
          }
        }
      }
      site {
        siteMetadata {
          routes {
            buttons {
              title
              path
              desc
            }
          }
        }
      }
    }
  `)
  const works = data.allMarkdownRemark.edges.map(
    ({ node: { frontmatter } }) => ({
      ...frontmatter,
    })
  )
  const { title, desc } = data.site.siteMetadata.routes
    .flatMap(item => item.buttons)
    .find(button => button.path === "/graphic-design")
  return <ListingPageBase headline={title} desc={desc} works={works} />
}

export default Page
