import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is up!");
});

const port = process.env.PORT || 3000;

app.get("/api/players", (req, res) => {
  const players = [
    {
      name: "John",
      id: 1,
    },
    { 
        name: "Jack", 
        id: 2 
    },
    { 
        name: "Jill", 
        id: 3 
    },
    { 
        name: "Jim", 
        id: 4 
    }
  ];
  res.send(players)
});

app.listen(port, () => {
  console.log(`listening on port localhost:${port}`);
});
