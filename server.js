const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "조현중",
      birthday: "921123",
      gender: "남자",
      job: "개발자",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "햰듕",
      birthday: "920101",
      gender: "남자",
      job: "프로그래머",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "홍길동",
      birthday: "911111",
      gender: "남자",
      job: "홍길동",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
