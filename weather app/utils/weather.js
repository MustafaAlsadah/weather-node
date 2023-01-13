const axios = require("axios")

function getWeather(address="Mecca", callback){
    const uriRequestLocation = encodeURIComponent(address)
    const url = `http://api.weatherstack.com/current?access_key=ad96f61b78f19990068827cb6f4a829f&query=${uriRequestLocation}&units=m`
    
    axios.get(url)
    .then((res)=>{
        if(res.data.current){
            const data = {
                address,
                description: res.data.current.weather_descriptions[0],
                temperature: res.data.current.temperature,
                feelslike: res.data.current.feelslike

            }
            callback(undefined, data) 
        }else{
            callback("Can't find the location!", undefined)
        }
    })
    .catch((err)=>{
        callback(err, undefined)
    })
}

module.exports = { getWeather }