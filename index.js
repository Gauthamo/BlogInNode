import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { nextTick } from "process";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "express";

const port = 3000;
const app = express();
let arrOfTitles = [];
let arrOfContent = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/home", (req, res)=>{
    res.render("index.ejs");
});

app.get("/about", (req, res)=>{
    res.render("about.ejs");
});

app.get("/create", (req, res)=>{
    res.render("create.ejs");
});

app.post("/submit", (req, res)=>{
    arrOfTitles.push(req.body["blogTitle"]);
    arrOfContent.push(req.body["blogContent"]);
    res.render("created.ejs");
});

app.get("/read", (req, res)=>{
    res.render("read.ejs",{
        posts : arrOfContent,
        titles : arrOfTitles
    });
});

app.listen(port, (req, res)=>{
    console.log("Server running on port 3000");
});