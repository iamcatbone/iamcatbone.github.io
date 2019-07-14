import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkCard from "../components/workCard"

const BannerTitle = styled(Typography)`
  text-align: center;
`

const LayoutContainer = styled.div`
  min-width: 1400px;
  padding-left: 200px;
  padding-right: 200px;
  background-color: #f4f4f4;
`

const Page = ({ headline, desc, works }) => (
  <Layout>
    <LayoutContainer>
      <SEO title={headline} />
      <br />
      <br />
      <br />
      <BannerTitle variant="h4" gutterBottom>
        {headline}
      </BannerTitle>
      <br />
      <BannerTitle variant="h6" gutterBottom>
        {desc}
      </BannerTitle>
      <br />
      <br />
      <Grid container spacing={5}>
        {works.map((work, index) => (
          <Grid item key={index} xs={6} sm={4}>
            <WorkCard {...work} />
            <br />
            <br />
          </Grid>
        ))}
      </Grid>
    </LayoutContainer>
  </Layout>
)

export default Page
