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
        cover: "/ui-ux-design/002/cover.png",
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
        cover: "/illustrations/002/cover.png",
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
        cover: "/sketches/004/cover.png",
        buttons: [
          {
            title: "My Sketches",
            path: "/sketches",
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
            title: "PRURookies Training App",
            time: "April - June 2019",
            thumbnail: "/ui-ux-design/001/cover.png",
            path: "/ui-ux-design/prurookies-internal-training-app",
          },
          {
            title: "Hong Kong Land Limited e-Board Game Project",
            time: "January - May 2019",
            thumbnail: "/ui-ux-design/002/cover.png",
            path: "/ui-ux-design/hong-kong-land-limited-e-board-game-project",
          },
          {
            title: "Yoga Class Finding App",
            time: "January 2019",
            thumbnail: "/ui-ux-design/uiux-design-work-yoga-app-display-03.png",
            path: "/ui-ux-design/yoga-class-finding-app",
          },
          {
            title: "Drink Ordering App",
            time: "January 2019",
            thumbnail:
              "/ui-ux-design/uiux-design-work-drink-ordering-display-01.png",
            path: "/ui-ux-design/a-drinking-ordering-app",
          },
          {
            title: "Shiseido E-card platform",
            time: "November 2018",
            thumbnail: "/ui-ux-design/uiux-design-work-shiseido-e-card-02.png",
            path: "/ui-ux-design/shiseido-e-card-platform",
          },
          {
            title: "UI of Login Page for FSEE Limited",
            time: "November 2018",
            thumbnail: "/ui-ux-design/uiux-design-work-2-pages-with-bg.png",
            path: "/ui-ux-design/ui-of-login-page-for-fsee-limited",
          },
          {
            title: "Mini-Game UI: The Taoist Spell",
            time: "June 2018",
            thumbnail: "/ui-ux-design/uiux-design-work-spell.png",
            path: "/ui-ux-design/mini-game-ui-the-taoist-spell",
          },
          {
            title: "Mini-Game UI: Shaolin Kung Fu",
            time: "May 2018",
            thumbnail:
              "/ui-ux-design/uiux-design-work-shaolinkungfu-display2.png",
            path: "/ui-ux-design/mini-game-ui-shaolin-kung-fu",
          },
          {
            title: "Mini-Game UI: Game for Elderlies with Alzheimer's Disease",
            time: "August 2017",
            thumbnail: "/ui-ux-design/uiux-design-work-mindvividui.png",
            path:
              "/ui-ux-design/mini-game-ui-game-for-elderlies-with-alzheimer-disease",
          },
          {
            title: "Mini-Game UI: Computer Rangers",
            time: "May 2019",
            thumbnail:
              "/ui-ux-design/uiux-design-work-computer-rangerdemo-3.png",
            path: "/ui-ux-design/mini-game-ui-game-computer-rangers",
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
            thumbnail: "/graphic-design/001/cover.png",
            path: "/graphic-design/business-card-design",
          },
          {
            title: "An Isometric Plane for Game Starting Page",
            time: "November 2018",
            thumbnail: "/graphic-design/002/cover.png",
            path: "/graphic-design/an-isometric-plane-for-game-starting-page",
          },
          {
            title: "Comics for Primary Textbook",
            time: "September 2018",
            thumbnail: "/graphic-design/003/cover.png",
            path: "/graphic-design/comics-for-primary-textbook",
          },
          {
            title: "An Animation to Introduce What is Internet",
            time: "April 2018",
            thumbnail: "/graphic-design/004/cover.png",
            path: "/graphic-design/an-animation-to-introduce-what-is-internet",
          },
          {
            title: "A Wallpaper for Iphone 6plus",
            time: "May 2017",
            thumbnail: "/graphic-design/005/cover.png",
            path: "/graphic-design/a-wallpaper-for-iphone-6plus",
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
            thumbnail: "/illustrations/001/cover.png",
            path: "/illustrations/a-colorful-cat",
          },
          {
            title: "A Little Raccoon and the Color Pencils",
            time: "September 2018",
            thumbnail: "/illustrations/002/cover.png",
            path: "/illustrations/a-little-raccoon-and-the-color-pencils",
          },
          {
            title: "The Dreaming Cat",
            time: "August 2018",
            thumbnail: "/illustrations/003/cover.png",
            path: "/illustrations/the-dreaming-cat",
          },
          {
            title: "The Nishikigoi",
            time: "January 2017",
            thumbnail: "/illustrations/004/cover.png",
            path: "/illustrations/the-nishikigoi",
          },
          {
            title: "Telegram Stickers of Identity V Characters",
            time: "June 2019",
            thumbnail: "/illustrations/005/cover.png",
            path: "/illustrations/telegram-stickers-of-identity-v-characters",
          },
        ],
      },
      sketches: {
        headline: "Sketches",
        desc: "I enjoy sketching the details of different objects/ animals.",
        works: [
          {
            title: "A Dog",
            time: "2015",
            thumbnail: "/sketches/004/cover.png",
            path: "/sketches/a-dog",
          },
          {
            title: "An Eagle",
            time: "2017",
            thumbnail: "/sketches/003/cover.png",
            path: "/sketches/an-eagle",
          },
          {
            title: "A Pomegranate",
            time: "2017",
            thumbnail: "/sketches/001/cover.png",
            path: "/sketches/a-pomegranate",
          },
          {
            title: "An Orange",
            time: "2017",
            thumbnail: "/sketches/002/cover.png",
            path: "/sketches/an-orange",
          },
        ],
      },
    },
  },
}
