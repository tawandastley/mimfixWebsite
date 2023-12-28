import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/FAQ", (req, res) => {
    res.render("FAQ");
});
app.get("/quote", (req, res) => {
    res.render("quote");
});
app.get("/pick", (req, res) => {
    res.render("comingSoonPage");
});
app.get("/enquire", (req, res) => {
    res.render("comingSoonPage");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});