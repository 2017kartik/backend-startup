import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";

import apiRoutes from "./routes/index.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

import TweetRepository from "./repository/tweet-repository.js";

app.listen(3000, async () => {
  console.log("Server started!");
  await connect();
  console.log("MongoDB connected!");
  const tweetRepo = new TweetRepository();
  const tweet = await tweetRepo.getAll(2, 4);
  console.log(tweet[0].contentWithEmail);
});