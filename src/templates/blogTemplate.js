import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogBodyWrapper = styled.div`
  min-width: 1400px;
  padding-left: 200px;
  padding-right: 200px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      {frontmatter.banner ? (
        <img
          src={frontmatter.banner}
          alt={frontmatter.title}
          style={{ width: "100%", height: 450, objectFit: "cover" }}
        />
      ) : (
        <div>
          <br />
          <br />
        </div>
      )}
      <BlogBodyWrapper>
        <Typography variant="h4" gutterBottom>
          {frontmatter.title}
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: "#bdbdbd" }}>
          {frontmatter.date}
        </Typography>
        <br />
        <Typography
          variant="subtitle1"
          gutterBottom
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {frontmatter.mediaType === "single-image" && (
          <img
            src={frontmatter.mediaSrc}
            alt={frontmatter.title}
            style={{
              marginLeft: "15%",
              marginRight: "15%",
              width: "70%",
              objectFit: "cover",
            }}
          />
        )}
      </BlogBodyWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        banner
        mediaType
        mediaSrc
      }
    }
  }
`
