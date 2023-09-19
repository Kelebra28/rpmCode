module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "RPM Landing", 
          shortName: "RPM", 
          startUrl: "/", 
          backgroundColor: "#FFFFFF", 
          themeColor: "#000000", 
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content`, // Path to your data directory
      },
    },
  ],
};
