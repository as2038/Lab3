const express = require("express");

const app = express();

const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contacts", (req, res) => {
  res.render("contacts");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/catalogue", (req, res) => {
  res.render("catalogue");
});

const router = require("./routes/post");
app.use(router);
