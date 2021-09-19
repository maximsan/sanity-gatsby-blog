export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6147aea5cb908d10361d1115",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-7dxdmn13",
                  apiId: "e9243f99-6637-43d5-964d-a1f0632b367f",
                },
                {
                  buildHookId: "6147aea5cb908d17811d10e4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-msgg1kj5",
                  apiId: "dc1688ef-0e25-4478-be39-3451ed3aef14",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/maximsan/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-msgg1kj5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
