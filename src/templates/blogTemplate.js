import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import BlogMedia from "../components/blogMedia"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogBodyWrapper = styled.div`
  min-width: 1400px;
  padding-left: 200px;
  padding-right: 200px;
`

const BlogBanner = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`

const BlogTitle = styled(Typography)`
  font-weight: bold !important;
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
        <BlogBanner src={frontmatter.banner} alt={frontmatter.title} />
      ) : (
        <div>
          <br />
        </div>
      )}
      <BlogBodyWrapper>
        <br />
        <BlogTitle variant="h4" gutterBottom>
          {frontmatter.title}
        </BlogTitle>
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
        <BlogMedia {...frontmatter} />
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
        mediaSrcList
        mediaSrcSize
      }
    }
  }
`
