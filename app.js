const path = require("path")
const express = require("express")
const hbs = require("hbs")
const app = express()
const port = process.env.PORT || 3000
const {getWeather} = require("./weather app/utils/weather")

//Define paths for Express.js config
const publicDirectoryPath = path.join(__dirname, "./public")
const viewsPath = path.join(__dirname, "/templates/views")
const patialsPath = path.join(__dirname, "./templates/partials")
 
app.use(express.static(publicDirectoryPath))
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(patialsPath)

app.get("/", (req, res)=>{
    const sentValues = {
        title: "Weather",
        content: "",
        createdBy: "Mustafa"
    }
    res.render("index", sentValues)
})

app.get("/about", (req, res)=>{
    const sentValues = {
        name: "About Mustafa",
        location: "About Saihat",
        createdBy: "Mustafa"
    }
    res.render("about", sentValues)
})

app.get("/help", (req, res)=>{
    const sentValues = {
        title: "Home",
        content: "Saihat",
        createdBy: "Mustafa"
    }
    res.render("help", sentValues)
})

app.get("/weather", (req, res)=>{
    const address = req.query.address
    // if(!address){
    //     return res.send("Error: Address is not provided")
    // } 
 
    getWeather(address, (err, data)=>{
        if(err){ 
            return res.json({error: err}) 
        }else{
            res.cookie("Server-location", "Saihat")
            res.json(data) 
        }
    })  
})    

app.get("/help/*", (req, res)=>{
    res.render("404", {errorMessage: "Help article not found"})
})
 
app.get("*", (req, res)=>{ //Any URL that hasn't been matched above
    res.render("404", {errorMessage: "404. The psge you're looking for isn't found"})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})