const express = require("express");
const app = express();
require("./db/db");
const route_index = require("./routes");

app.use(express.json());
app.use(route_index);
const PORT = 3000;

app.listen(PORT, () => {
  console.log("connected");
});
