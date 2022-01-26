const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

const port = 3001;

dotenv.config();
app.use(cors());

// News API에서 뉴스 가져오기
app.use("/api/news", (req, res) => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.NEWS_API_KEY}`
    )
    .then((response) => {
      const articles = response.data.articles;
      res.send({ articles: articles });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
