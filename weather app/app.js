const { getWeather } = require("./utils/weather")

const location = process.argv[2]
if(!location){
    return console.log("Please provide an address")
}

getWeather(weatherLocation="Saihat", (err, {address, description, temperature, feelslike} = {})=>{
    if(err){
        return console.log(err)
    }else{
        console.log(`${description} in ${address}. The temp now is ${temperature} and it feels like ${feelslike}`)
    }
})  

const greet = (name)=>{
    console.log(name)
}

greet()
