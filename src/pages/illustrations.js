import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import ListingPageBase from "../components/listingPageBase"

const Page = () => {
  const data = useStaticQuery(graphql`
    query IllustrationListingQuery {
      site {
        siteMetadata {
          listing {
            illustrations {
              headline
              desc
              works {
                title
                time
                thumbnail
                path
              }
            }
          }
        }
      }
    }
  `)

  const { headline, desc, works } = data.site.siteMetadata.listing.illustrations
  return <ListingPageBase headline={headline} desc={desc} works={works} />
}

export default Page
