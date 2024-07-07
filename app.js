const express = require ("express")
const app =express()

app.set('"view engine"','ejs')


app.get("/about",(req,res)=>{
    console.log(req)
    res.send("<h1>this is about page</h1>")
})

app.get("/contact",(req,res)=>{
    const c="aces workshop"

res.render("contact.ejs",{c})
})


app.listen(3000,()=>{
    console.log("Nodejs  hai ta" + 3000)

})
