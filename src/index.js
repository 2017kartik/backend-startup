const express = require("express");
const connect = require("./config/database");
const app = express();

// const Tweet = require("./models/tweet");
const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

app.listen(3000, async () => {
  console.log("Server started!");
  await connect();
  console.log("MongoDB connected!");

  // const tweet = await Tweet.create({
  //   content: "Third comment",
  // });

  // const tweets = await Tweet.find({ userEmail: "a@b.com" });

  // const tweet = await Tweet.findById("681a42d09ff70347f10318dc");
  // tweet.userEmail = "b@c.com";
  // await tweet.save();

  const tweetRepo = new TweetRepository();
  // const tweet = await tweetRepo.get("681a42d09ff70347f10318dc");

  // const tweet = await tweetRepo.update("681a42d09ff70347f10318dc", {
  //   content: "new latest content",
  // });

  // const tweet = await tweetRepo.create({ content: "tweet with a comment" });
  // tweet.comments.push({ content: "first comment" });
  // await tweet.save();

  // const comment = await Comment.create({ content: "Schema comment" });
  // tweet.comments.push(comment);
  // await tweet.save();

  const tweet = await tweetRepo.getWithComments("681afa8ac88a1784e87c6a87");

  console.log(tweet);
});
