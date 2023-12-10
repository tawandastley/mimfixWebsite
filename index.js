import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/FAQ", (req, res) => {
    res.render("FAQ.ejs");
});
app.get("/quote", (req, res) => {
    res.render("contactUs.ejs");
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});