const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
var Twit = require("twit");

require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join('public')));

// To avoid CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/twitter", (req, res) => {
  const queryStr = req.query.searchQuery;
  const count = req.query.count;
  var client = new Twit({
    consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
    access_token: process.env.TWITTER_API_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET,
  });
  client.get("search/tweets", { q: queryStr, count: count }, function (
    err,
    data,
    response
  ) {

    res.send(data);
  });
});


app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
