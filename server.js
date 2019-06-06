const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const app = express();

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use(express.json());

app.use("/api/items", require("./routes/api/items.js"));
app.use("/api/users", require("./routes/api/users.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
