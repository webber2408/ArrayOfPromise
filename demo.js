const { getResult } = require(".");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

getResult(
  [8952, 9224],
  async (id) => {
    return fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    ).then((res) => res.json());
  },
  (res) => {
    console.log(res);
  }
);
