require('dotenv').config()
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("rzn1337")
});

app.get('/login', (req, res) => {
    res.send("<h1>sad</h1>")
})

app.get('/signup', (req, res) => {
    res.send("<h2>Sign Up</h2>")
})

data = {
  name: 'John',
  id: 123
}

app.get('/data', (req, res) => {
  res.json(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
