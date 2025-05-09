const express = require("express");
const connect = require("./config/database");
const app = express();

const Tweet = require("./models/tweet");

app.listen(3000, async () => {
  console.log("Server started!");
  await connect();
  console.log("MongoDB connected!");
  const tweets = await Tweet.find({
    content: ["First tweet", "my tweet", "tweet with a comment"],
  });
  console.log(tweets);
});
