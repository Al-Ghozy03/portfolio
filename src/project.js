const path = `${window.location.origin}/assets`;

class Project {
  constructor(name, slug, description, tools, mockup, thumbnail, preview) {
    this.name = name;
    this.slug = slug;
    this.description = description;
    this.tools = tools;
    this.mockup = `${path}${mockup}`;
    this.thumbnail = `${path}${thumbnail}`;
    this.preview = preview;
  }
}

const project = [
  new Project(
    "Trackwalk Mandalika Scanner Ticket",
    "trackwalk-mandalika-scanner-ticket",
    "Lorem ipsum dolor sit amet consectetur. Lobortis a et vel sed et tempus elit venenatis est. Lacinia viverra non senectus in orci lacus elementum elementum. Tortor neque ullamcorper porta a adipiscing faucibus senectus velit malesuada. Sit urna tortor sagittis aliquam massa. Ut lectus turpis egestas sed sodales nisl. Sed eget egestas cursus arcu eget mattis vitae. Maecenas duis odio nulla convallis fusce mi. Placerat nibh platea vel eleifend. Cras integer massa consequat accumsan.",
    ["Flutter"],
    "/comic/thumbnail.png",
    "/comic/thumbnail.png",
    []
  ),
  new Project(
    "Comic App",
    "comic-app",
    "Lorem ipsum dolor sit amet consectetur. Lobortis a et vel sed et tempus elit venenatis est. Lacinia viverra non senectus in orci lacus elementum elementum. Tortor neque ullamcorper porta a adipiscing faucibus senectus velit malesuada. Sit urna tortor sagittis aliquam massa. Ut lectus turpis egestas sed sodales nisl. Sed eget egestas cursus arcu eget mattis vitae. Maecenas duis odio nulla convallis fusce mi. Placerat nibh platea vel eleifend. Cras integer massa consequat accumsan.",
    ["Flutter", "Node JS", "Cheerio"],
    "/comic/mockup.png",
    "/comic/thumbnail.png",
    [
      {
        name: "Home",
        path: `${path}/comic/home.png`,
      },
      {
        name: "favorite",
        path: `${path}/comic/favorite.png`,
      },
      {
        name: "terbaru",
        path: `${path}/comic/terbaru.png`,
      },
      {
        name: "search",
        path: `${path}/comic/search.png`,
      },
      {
        name: "detail",
        path: `${path}/comic/detail.png`,
      },
      {
        name: "read",
        path: `${path}/comic/read.png`,
      },
    ]
  ),
];

export default project;
