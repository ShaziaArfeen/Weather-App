 async function weatherCheck() {
    let cityName = document.getElementById("cityName").value
    let tempatature = document.getElementById("tempatature")

    let apikey = "067ffe2a0bc19c640929853d13b6ee2a"
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apikey}`
    
    try {

        let res = await fetch(url)
        let data = await res.json()
         tempatature.innerText = Math.round(data.main.temp) + "°C"
    }
     catch {
         tempatature.innerText = "Please check your internet"
    }
 }
