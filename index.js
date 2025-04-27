const express = require("express");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { message } = req.body;

  //   if (!message || message.text.toLowerCase().indexOf("mango") < 0)
  //     return res.end();
  axios
    .post(`https://api.telegram.org/bot${API_KEY}/sendMessage`, {
      chat_id: message.chat.id,
      text: "Lassi🥂",
      //   text: "lassi " + message.text,
    })
    .then((e) => {
      console.log(e);
    })
    .catch((e) => {
      console.error("error occured");
    });

  res.json({
    status: "200",
  });
});

app.listen(3000, () => {
  console.log("Bot listening on port 3000");
});
