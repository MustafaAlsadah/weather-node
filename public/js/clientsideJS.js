console.log("Client side script!")

const textField = document.querySelector("#location-input")
const fetchBtn = document.querySelector("#fetch-btn")
const forecastBox = document.querySelector("#weather-res")

fetchBtn.onclick = (e)=>{
    let location = textField.value
    forecastBox.innerHTML = `Loading...`
    fetch("/weather?address="+encodeURIComponent(location))
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        if(res.error){
            forecastBox.innerHTML = res.error
            throw Error(res.error)
        }else{
            console.log(res)
            forecastBox.innerHTML = `${res.description}, ${res.temperature} °C`
        }
    })
}

