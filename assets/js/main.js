//api-d08d54cae132d4a945e05c3290577357
    function getWeather(cityName){
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d08d54cae132d4a945e05c3290577357&units=metric`;
        const messageElement = document.getElementById("message");
        messageElement.innerText = `Loading....`;
        messageElement.style.color = "white";

        axios.get(url)
          .then(function (response) {    
              messageElement.innerText =`Temparature of ${cityName} is ${response.data.main.temp} ℃`;
              messageElement.style.color = "white";
          })
          .catch(function (error) {
            messageElement.innerText = error;
            messageElement.style.color = "red";
          })

    }


window.onload = function(){
        document.getElementById("sendButton").onclick = function(){
        const cityName = document.getElementById("cityNameText").value;
        //call the function
        getWeather(cityName);
    }
}