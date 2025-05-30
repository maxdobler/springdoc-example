import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: "EventCatalog",
  tagline:
    "This internal platform provides a comprehensive view of our event-driven architecture across all systems. Use this portal to discover existing domains, explore services and their dependencies, and understand the message contracts that connect our infrastructure",
  organizationName: "synyx GmbH & Co. KG",
  homepageLink: "https://eventcatalog.dev/",
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: "/",
  logo: {
    alt: "EventCatalog Logo",
    src: "/logo.png",
    text: "EventCatalog",
  },
  generators: [
    [
      "@eventcatalog/generator-asyncapi",
      {
        services: [
          {
            path: path.join(
              __dirname,
              "asyncapi-files",
              "springwolf-example.json"
            ),
            // path: "http://localhost:8080/springwolf/docs",
            id: "springwolf-example",
          },
        ],
        domain: { id: "springwolf", name: "Springwolf", version: "0.0.1" },
      },
    ],
    [
      "@eventcatalog/generator-openapi",
      {
        services: [
          {
            path: path.join(
              __dirname,
              "openapi-files",
              "springwolf-example.json"
            ),
            // path: "http://localhost:8080/v3/api-docs",
            id: "springwolf-example",
          },
        ],
        domain: { id: "springwolf", name: "Springwolf", version: "0.0.1" },
        debug: true,
      },
    ],
  ],
  docs: {
    sidebar: {
      // TREE_VIEW will render the DOCS as a tree view and map your file system folder structure
      // LIST_VIEW will render the DOCS that look familiar to API documentation websites
      type: "LIST_VIEW",
    },
  },
  // Enable RSS feed for your eventcatalog
  rss: {
    enabled: true,
    // number of items to include in the feed per resource (event, service, etc)
    limit: 20,
  },
  // required random generated id used by eventcatalog
  cId: "c0d1c81d-df9c-4339-8c2d-b3fdc36fe440",
};
