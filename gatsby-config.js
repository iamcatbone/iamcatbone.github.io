module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/portfolio-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito Sans`,
          `sans-serif\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
  siteMetadata: {
    title: `Margaret Wong's Portfolio`,
    description: `A ui-ux designer's personal portfolio and website.`,
    author: `Margaret Wong`,
    headline: `Every one has a dream.`,
    banner: `src/images/banner.png`,
    routes: [
      { title: "Home", buttons: [{ path: "/" }] },
      {
        title: "Designs",
        desc:
          "I had experiences in working as graphics and UI designer. Have a look on my works!",
        cover: "/ui-ux-design/002/cover.png",
        buttons: [
          {
            title: "UI UX Design works",
            desc:
              "I enjoy the process of making something that is both practical and aesthetically pleasing.",
            path: "/ui-ux-design",
          },
          {
            title: "Graphic Design works",
            desc:
              "I enjoy the process of making something that is both practical and aesthetically pleasing.",
            path: "/graphic-design",
          },
        ],
      },
      {
        title: "Illustrations",
        desc:
          "Illustration is a media to express myself. Have a look on my works!",
        cover: "/illustrations/002/cover.png",
        buttons: [
          {
            title: "My Illustrations",
            desc: "Illustration is a mean to express myself.",
            path: "/illustrations",
          },
        ],
      },
      {
        title: "Sketches",
        desc:
          "I enjoy sketching the details of different objects/animals. Have a look on my works!",
        cover: "/sketches/004/cover.png",
        buttons: [
          {
            title: "My Sketches",
            desc: "I enjoy sketching the details of different objects/animals.",
            path: "/sketches",
          },
        ],
      },
    ],
  },
}
