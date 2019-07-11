const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");

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

// Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
