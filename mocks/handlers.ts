import { rest } from "msw";
import { Article } from "../models";

const baseUrl = "https://conduit.productionready.io/api";

const article1: Article = {
  slug: "how-to-train-your-dragon",
  title: "How to train your dragon",
  description: "Ever wonder how?",
  body: "It takes a Jacobian",
  tagList: ["dragons", "training"],
  createdAt: "2016-02-18T03:22:56.637Z",
  updatedAt: "2016-02-18T03:48:35.824Z",
  favorited: false,
  favoritesCount: 0,
  author: {
    username: "jake",
    bio: "I work at statefarm",
    image: "https://i.stack.imgur.com/xHWG8.jpg",
    following: false,
  },
};
const article2: Article = {
  slug: "how-to-train-your-dragon-2",
  title: "How to train your dragon 2",
  description: "So toothless",
  body: "It a dragon",
  tagList: ["dragons", "training"],
  createdAt: "2016-02-18T03:22:56.637Z",
  updatedAt: "2016-02-18T03:48:35.824Z",
  favorited: false,
  favoritesCount: 0,
  author: {
    username: "jake",
    bio: "I work at statefarm",
    image: "https://i.stack.imgur.com/xHWG8.jpg",
    following: false,
  },
};

export const handlers = [
  rest.get(`${baseUrl}/articles`, (req, res, ctx) => {
    return res(
      ctx.json({
        articles: [article1, article2],
        articlesCount: 2,
      })
    );
  }),

  rest.get(`${baseUrl}/articles/how-to-train-your-dragon`, (req, res, ctx) => {
    return res(ctx.json(article1));
  }),

  rest.get(`${baseUrl}/tags`, (req, res, ctx) => {
    return res(
      ctx.json({
        tags: ["reactjs", "angularjs"],
      })
    );
  }),
];
