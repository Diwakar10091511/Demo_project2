const express=require("express");
const path=require("path");
const hbs=require("hbs");
const viewPath=path.join(__dirname,"../templates/views");
const staticPath=path.join(__dirname,"../public");
const partialPath=path.join(__dirname,"../templates/partials");


hbs.registerPartials(partialPath);

const app=express();
app.use(express.static(staticPath));
app.set("view engine","hbs");

// app.use(express.static(staticPath));

app.set("views",viewPath);

app.get("/",(req,res)=>{
res.render("index.hbs");
}
);

app.listen(8000);