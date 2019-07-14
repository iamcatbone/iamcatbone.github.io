import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Banner from "../components/banner"
import ClassPanel from "../components/classPanel"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          headline
          routes {
            title
            desc
            cover
            buttons {
              title
              path
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Banner headline={data.site.siteMetadata.headline} />
      {data.site.siteMetadata.routes
        .filter(item => item.title !== "Home")
        .map((props, index) => (
          <ClassPanel key={index} index={index % 2} {...props} />
        ))}
    </Layout>
  )
}

export default IndexPage
