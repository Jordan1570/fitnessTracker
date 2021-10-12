const express = require("express");
const routes = require("./controllers")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethods", { useNewUrlParser: true });
app.get('/stats', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname, "./public/stats.html"))
  } catch (err) {
      res.status(500).json(err);
  }
});

app.use(routes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
