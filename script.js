let searchbtn = document.querySelector('button')
let weatherIcon = document.querySelector('.weather-icon')
   


async function fetchData (url){
    const responce = await fetch(url)
    try{
    const data = await responce.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.humidity').innerHTML = data.main.humidity+"%"
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"°C"
    document.querySelector('.wind').innerHTML = data.wind.speed+'km/hr'

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src= './Items/clouds.png'
    }else if (data.weather[0].main == 'Rain'){
        weatherIcon.src= './Items/rain.png'
    }else if (data.weather[0].main == 'Clear'){
        weatherIcon.src= './Items/clear.png'
    }else if (data.weather[0].main == 'Rain'){
        weatherIcon.src= './Items/rain.png'
    }else if (data.weather[0].main == 'Drizzle'){
        weatherIcon.src= './Items/drizzle.png'
    }else if (data.weather[0].main == 'Mist'){
        weatherIcon.src= './Items/mist.png'
    }

    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
    }catch(error){
        document.querySelector('.error').style.display = 'block'
        document.querySelector(".weather").style.display = 'none'
        console.log(responce);
    }
}


searchbtn.addEventListener('click', ()=>{
    let city = document.querySelector('input').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f222a27194e603dccae3daba99fe3b4c&units=metric`
    fetchData(url);
})