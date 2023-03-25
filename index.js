const express = require("express");
const format = require("date-format");
const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaObj = {
    username: "KP",
    follows: 30,
    followers: 20,
    date: format.asString("dd hh:mm:ss", new Date()),
  };

  res.status(200).json(instaObj);
});

app.get("/api/v1/facebook", (req, res) => {
  const faceObj = {
    username: "KP1",
    follows: 70,
    followers: 10,
    date: format.asString("dd hh:mm:ss", new Date()),
  };

  res.status(200).json(faceObj);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedInObj = {
    username: "KP2",
    follows: 80,
    followers: 10,
    date: format.asString("dd hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedInObj);
});

app.get("/api/v1/:token", (req, res) => {
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
