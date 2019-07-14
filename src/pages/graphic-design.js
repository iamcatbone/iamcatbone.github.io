import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import ListingPageBase from "../components/listingPageBase"

const Page = () => {
  const data = useStaticQuery(graphql`
    query GraphicDesignListingQuery {
      site {
        siteMetadata {
          listing {
            graphicDesign {
              headline
              desc
              works {
                title
                time
                thumbnail
              }
            }
          }
        }
      }
    }
  `)

  const { headline, desc, works } = data.site.siteMetadata.listing.graphicDesign
  return <ListingPageBase headline={headline} desc={desc} works={works} />
}

export default Page
