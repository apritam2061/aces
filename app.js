const express = require ("express")
const connectionToDb=require("./database/database.js")
const app =express()
const Blog=require("./nodel/blogModel.js")
app.set("view engine", "ejs")


connectionToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get("/createblog", (req, res)=>{
    res.render("index.ejs")
})

 app.post("/createblog",async (req,res)=>{
    console.log(req.body)
    
    const {title,subtitle,description} = req.body;
    await Blog.create
    ({
        title,
        subtitle,
        description, 
    })
    res.send("Post Hitted")
})

app.listen(3000,()=>{
    console.log("Nodejs  hai ta" + 3000)

})
