const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/status", (req, res) => {
  res.send({
    status: "OK"
  });
});

app.listen(SERVER_PORT, () =>
  console.log(`edesia server running on ${SERVER_PORT}`)
);
