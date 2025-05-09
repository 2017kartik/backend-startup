const { TweetRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g);
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    // todo create hashtags and add here
    /**
     * bulkcreate in mongoose
     * filter title of hashtag based on multiple tags
     * how to add tweet id inside all the hashtags
     */
    return tweet;
  }
}

module.exports = TweetService;
