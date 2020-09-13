const express = require('express');
const path = require('path');
const today=require('./Date');

const app=express();

let todo = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine', 'ejs');

app.get("/",(req, res)=>{
    res.render('index',{
        listTitle: today,
        listItem: todo,
    });
})

app.post("/",(req, res)=>{
    todo.push(req.body.newItem);
    res.redirect("/");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{`Server is running at port ${PORT}`});