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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    title: `Margaret Wong`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    headline: `Every one has a dream.`,
    banner: `src/images/banner.png`,
    routes: [
      { title: "Home", buttons: [{ path: "/" }] },
      {
        title: "Designs",
        desc:
          "I had experiences in working as graphics and UI designer. Have a look on my works!",
        cover: "thor.jpg",
        buttons: [
          {
            title: "UI UX Design works",
            path: "/ui-ux-design",
          },
          {
            title: "Graphic Design works",
            path: "/graphic-design",
          },
        ],
      },
      {
        title: "Illustrations",
        desc:
          "Illustration is a media to express myself. Have a look on my works!",
        cover: "thor.jpg",
        buttons: [
          {
            title: "My Illustrations",
            path: "/illustrations",
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
            title: "My Sketches",
            path: "/",
          },
        ],
      },
    ],
    listing: {
      uiUxDesign: {
        headline: "UI UX Design Works",
        desc:
          "I enjoy the process of making something that is both practical and aesthetically pleasing.",
        works: [
          {
            title: "PRURookies Internal Training App",
            time: "April - June 2019",
            thumbnail:
              "/ui-ux-design/uiux-design-work-prurookies-display-02.png",
          },
          {
            title: "Hong Kong Land Limited e-Board Game Project",
            time: "January - May 2019",
            thumbnail: "/ui-ux-design/uiux-design-work-hkl-display-01.png",
          },
          {
            title: "Yoga Class Finding App",
            time: "January 2019",
            thumbnail: "/ui-ux-design/uiux-design-work-yoga-app-display-03.png",
          },
          {
            title: "Drink Ordering App",
            time: "January 2019",
            thumbnail:
              "/ui-ux-design/uiux-design-work-drink-ordering-display-01.png",
          },
          {
            title: "Shiseido E-card platform",
            time: "November 2018",
            thumbnail: "/ui-ux-design/uiux-design-work-shiseido-e-card-02.png",
          },
          {
            title: "UI of Login Page for FSEE Limited",
            time: "November 2018",
            thumbnail: "/ui-ux-design/uiux-design-work-2-pages-with-bg.png",
          },
          {
            title: "Mini-game UI: The Taoist Spell",
            time: "June 2018",
            thumbnail: "/ui-ux-design/uiux-design-work-spell.png",
          },
          {
            title: "Mini-game UI: Shaolin Kung Fu",
            time: "May 2018",
            thumbnail:
              "/ui-ux-design/uiux-design-work-shaolinkungfu-display2.png",
          },
          {
            title: "Mini game UI: Game for Elderlies with Alzhemier's Disease",
            time: "August 2017",
            thumbnail: "/ui-ux-design/uiux-design-work-mindvividui.png",
          },
          {
            title: "Mini-game: Computer Ranger",
            time: "May 2019",
            thumbnail:
              "/ui-ux-design/uiux-design-work-computer-rangerdemo-3.png",
          },
        ],
      },
      graphicDesign: {
        headline: "Graphic Design Works",
        desc:
          "I enjoy the process of making something that is both practical and aesthetically pleasing.",
        works: [
          {
            title: "Business Card Design",
            time: "June 2019",
            thumbnail:
              "/graphic-design/graphic-design-works-drink-ordering-display2-03.png",
          },
          {
            title: "An Isometric Plane for Game Starting Page",
            time: "April - June 2019",
            thumbnail:
              "/graphic-design/graphic-design-works-nightisometric-01.png",
          },
          {
            title: "Comics for primary textbook",
            time: "April - June 2019",
            thumbnail: "/graphic-design/graphic-design-works-copy-right.png",
          },
          {
            title: "An animation to Introduce what is internet",
            time: "April - June 2019",
            thumbnail:
              "/graphic-design/graphic-design-works-screenshot-2019-01-12-at-64025-pm.png",
          },
          {
            title: "A wallpaper for iphone 6plus",
            time: "April - June 2019",
            thumbnail: "/graphic-design/graphic-design-works-wallpaper-01.png",
          },
        ],
      },
      illustrations: {
        headline: "Illustrations",
        desc: "Illustration is a mean to express myself.",
        works: [
          {
            title: "A Colorful Cat",
            time: "June 2019",
            thumbnail:
              "/graphic-design/graphic-design-works-drink-ordering-display2-03.png",
          },
          {
            title: "A Little Raccoon and the Color Pencils",
            time: "September 2018",
            thumbnail:
              "/graphic-design/graphic-design-works-nightisometric-01.png",
          },
          {
            title: "The Dreaming Cat",
            time: "August 2018",
            thumbnail: "/graphic-design/graphic-design-works-copy-right.png",
          },
          {
            title: "The Nishikigoi",
            time: "January 2017",
            thumbnail:
              "/graphic-design/graphic-design-works-screenshot-2019-01-12-at-64025-pm.png",
          },
          {
            title: "Telegram Stickers of Identity V Characters",
            time: "June 2019",
            thumbnail: "/graphic-design/graphic-design-works-wallpaper-01.png",
          },
        ],
      },
    },
  },
}
