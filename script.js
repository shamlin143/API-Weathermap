<<<<<<< HEAD
var citiesListEl = $("#city-list");
var cities = [];
=======
var citiesListEl = $("#city-list")
var cities = []
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
var cityName, fiveDayQueryURL, weatherData, currentWeatherIcon, currentWeatherIconEl, weathericon, currentTemp, weatherCard, cityDateEl, tempEl, humidityEl, windspeedEl, fiveDayQueryParams, fiveDayList;
function buildQueryUrl() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?";
    var queryParams = { "appid": "83b1aee0a8eda152ab3f7c21f3bc0007" };
    queryParams.q = $("#search-term").val().trim();
<<<<<<< HEAD
    queryParams.units = "imperial";
=======
    queryParams.units = "imperial"
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
    return queryURL + $.param(queryParams);
}
function buildFiveDayQueryUrl() {
    var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?";
    var fiveDayQueryParams = { "appid": "83b1aee0a8eda152ab3f7c21f3bc0007" };
    fiveDayQueryParams.id = data.id;
    fiveDayQueryParams.units = "imperial";
    return fiveDayQueryURL + $.param(fiveDayQueryParams);
}
init();
function renderCities() {
    if (cities.length > 5) {
        cities.shift();
    }
   
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];
<<<<<<< HEAD
        var li = $("<li>");
=======
        var li = $("<li>")
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
        var button = $("<button>");
        button.text(city);
        button.attr("data-index", i);
        button.attr("style", "width: 100%")
        button.addClass("btn shadow-box btn-info hist-button");
        li.append(button);
        $("#city-list").prepend(li);
        $("#city-list").prepend("<br>");
    }
}
function init() {
    $("#city-list").empty();
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        cities = storedCities;
    }
    renderCities();
}
$(".search-button").on("click", function (event) {
    event.preventDefault();
    $("#current-day-forecast").empty();
    $("#five-day-forecast").empty();
    var searchHistory = $("#search-term").val().trim();
    if (searchHistory === "") {
        return;
    };
<<<<<<< HEAD
    cities.push(searchHistory);
=======
    cities.push(searchHistory)
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
    localStorage.setItem("cities", JSON.stringify(cities));
    queryURL = buildQueryUrl();
    var fiveDayQueryURL;
    // --------------------- AJAX Call---------------------------
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        function buildCurrentWeatherCard() {
            $(weatherCard).append(cityDateEl);
<<<<<<< HEAD
            $(weatherCard).append(weathericon);
            $(weatherCard).append(tempEl);
            $(weatherCard).append(humidityEl);
            $(weatherCard).append(windspeedEl);
            $(weatherCard).append(uvIndexEl);
=======
            $(weatherCard).append(weathericon)
            $(weatherCard).append(tempEl);
            $(weatherCard).append(humidityEl);
            $(weatherCard).append(windspeedEl);
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
            $("#current-day-forecast").append(weatherCard);
        }
        var date = moment().format("MMM Do YY");
        var weatherData = data;
        var currentWeatherIcon = data.weather[0].icon;
        var currentWeatherIconEl = "https://openweathermap.org/img/wn/" + currentWeatherIcon + "@2x.png";
        var weathericon = $("<img/>", {
            id: "weather-icon",
            src: currentWeatherIconEl,
            width: 75
        });
        var currentTemp = Math.floor(weatherData.main.temp);
        var weatherCard = $("<div>").addClass("card weather-card current-day-weather");
        var cityDateEl = $("<h5>").addClass("card-title").text(weatherData.name + " " + "(" + date + ")");
        var tempEl = $("<p>").addClass("card-text").text("Temp: " + currentTemp + " F");
        var humidityEl = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + weatherData.main.humidity + " %");
        var windspeedEl = $("<p>").addClass("card-text").text("Windspeed: " + weatherData.wind.speed + " mph");
        buildCurrentWeatherCard();
        function buildFiveDayQueryUrl() {
            var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?";
            var fiveDayQueryParams = { "appid": "83b1aee0a8eda152ab3f7c21f3bc0007" };
            fiveDayQueryParams.id = data.id;
            fiveDayQueryParams.units = "imperial";
            return fiveDayQueryURL + $.param(fiveDayQueryParams);
        }
        fiveDayQueryURL = buildFiveDayQueryUrl();
        // five day forecast ajax call
        $.ajax({
            url: fiveDayQueryURL,
            method: "GET"
        }).then(function (fiveData) {
            fiveDayList = fiveData.list;
            for (var i = 4; i < fiveDayList.length; i += 8) {
                var day = fiveDayList[i];
                var dayIcon = day.weather[0].icon;
                var dayWeatherIcon = "https://openweathermap.org/img/wn/" + dayIcon + ".png";
                var dayIconEl = $("<img/>", {
                    id: "weather-icon",
                    src: dayWeatherIcon,
                    width: 30
                })
                var dayTempEl = Math.floor(day.main.temp);
                var dayCard = $("<div>").addClass("card weather-card col-lg bg-info text-white mr-md-2 mb-3");
                var dayDate = $("<h5>").attr("style", "font-size:100%").addClass("card-title text-nowrap").text(moment().add(1,'days').format('L'));
                var dayTemp = $("<p>").addClass("card-text").text("Temp: " + dayTempEl + " F");
                var dayHum = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + day.main.humidity);
                $(dayCard).append(dayDate);
<<<<<<< HEAD
                $(dayCard).append(dayIconEl);
=======
                $(dayCard).append(dayIconEl)
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
                $(dayCard).append(dayTemp);
                $(dayCard).append(dayHum);
                $("#five-day-forecast").append(dayCard);
            }
        })
        var uvIndexEl;
<<<<<<< HEAD
        var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=0d2a570544db7d02e47387057bd868ca";
=======
        var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=0d2a570544db7d02e47387057bd868ca"
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
        buildCurrentWeatherCard();

        $.ajax({
            url: uvQueryURL,
            method: "GET"
        }).then(function (response) {
            uvIndexEl = response.value
            uvIndexTag = $("<p>").text("UV Index: " + uvIndexEl)
            $(".current-day-weather").append(uvIndexTag)
        })
        $("#search-term").val(null)
        init();
    });
 
});

function buildQueryUrlHist() {
    var queryURLHist = "https://api.openweathermap.org/data/2.5/weather?";
    var queryParamsHist = { "appid": "0d2a570544db7d02e47387057bd868ca" };
    queryParamsHist.q = cityName;
    queryParamsHist.units = "imperial"
    return queryURLHist + $.param(queryParamsHist);
};
function buildCurrentWeatherCardHist() {
    $(weatherCard).append(cityDateEl);
    $(weatherCard).append(weathericon)
    $(weatherCard).append(tempEl);
    $(weatherCard).append(humidityEl);
    $(weatherCard).append(windspeedEl);
    $("#current-day-forecast").append(weatherCard);
};

// the click function will delegate to.
$("#city-list").on("click", "button", function () {
    $("#current-day-forecast").empty();
    $("#five-day-forecast").empty();
    cityName = $(this).text();
    queryURLHist = buildQueryUrlHist();
    $.ajax({
        url: queryURLHist,
        method: "GET"
    }).then(function (data) {
        // Current Day Card ------------------------------------------------
        weatherData = data;
        // current weather card
        currentWeatherIcon = data.weather[0].icon;
<<<<<<< HEAD
        date = moment().format("MMM Do YYYY");
=======
        date = moment().format("MMM Do YY");
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
        currentWeatherIconEl = "https://openweathermap.org/img/wn/" + currentWeatherIcon + "@2x.png";
        weathericon = $("<img/>", {
            id: "weather-icon",
            src: currentWeatherIconEl,
            width: 75
        });
        currentTemp = Math.floor(weatherData.main.temp);
        weatherCard = $("<div>").addClass("card weather-card current-day-weather");
        cityDateEl = $("<h5>").addClass("card-title").text(weatherData.name + " " + "(" + date + ")");
        tempEl = $("<p>").addClass("card-text").text("Temp: " + currentTemp + " F");
        humidityEl = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + weatherData.main.humidity + " %");
        windspeedEl = $("<p>").addClass("card-text").text("Windspeed: " + weatherData.wind.speed + " mph");
        var uvIndexEl;
<<<<<<< HEAD
        var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=83b1aee0a8eda152ab3f7c21f3bc0007";
=======
        var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=83b1aee0a8eda152ab3f7c21f3bc0007"
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
        buildCurrentWeatherCardHist();
        $.ajax({
            url: uvQueryURL,
            method: "GET"
        }).then(function (response) {
            uvIndexEl = response.value;
            uvIndexTag = $("<p>").text("UV Index: " + uvIndexEl);
            $(".current-day-weather").append(uvIndexTag);
        })

        function buildFiveDayQueryUrlHist() {
            var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?";
            var fiveDayQueryParams = { "appid": "83b1aee0a8eda152ab3f7c21f3bc0007" };
            fiveDayQueryParams.id = data.id;
            fiveDayQueryParams.units = "imperial";
            return fiveDayQueryURL + $.param(fiveDayQueryParams);
            
        }
        fiveDayQueryURL = buildFiveDayQueryUrlHist();
        $.ajax({
            url: fiveDayQueryURL,
            method: "GET"
        }).then(function (fiveData) {
            fiveDayList = fiveData.list;
<<<<<<< HEAD
            for (var i = 4; i < fiveDayList.length; i += 8) {
=======
            for (var i = 0; i < fiveDayList.length; i += 8) {
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
                var day = fiveDayList[i];
                var dayIcon = day.weather[0].icon;
                var dayWeatherIcon = "https://openweathermap.org/img/wn/" + dayIcon + ".png";
                var dayIconEl = $("<img/>", {
                    id: "weather-icon",
                    src: dayWeatherIcon,
                    width: 50
                })
<<<<<<< HEAD
                console.log(fiveDayList);
                var dayTempEl = Math.floor(day.main.temp);
                var dayCard = $("<div>").addClass("card weather-card col-lg bg-info text-white mr-md-2 mb-3");
                var dayDate = $("<h5>").attr("style", "font-size:100%").addClass("card-title text-nowrap").text.date;
                var dayTemp = $("<p>").addClass("card-text").text("Temp: " + dayTempEl + " F");
                var dayUvIndexEl = $("<p>").addClass("card-text text-nowrap").text("UV Index: " + uvIndexEl);
                var dayHum = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + day.main.humidity);
                var today = moment().format("MMM Do YYYY");
                function incrementDate() {
                    for(var i = 0; i < 5; i++ ) {                         
                 }           
                };
                incrementDate(today);
                $(dayCard).append(dayIconEl);
                $(dayCard).append(today);
                $(dayCard).append(dayTemp);
                $(dayCard).append(dayUvIndexEl);
                $(dayCard).append(dayHum);
                $("#five-day-forecast").append(dayCard);
                //console.log(weatherData);
=======
                console.log(fiveData);
                var dayTempEl = Math.floor(day.main.temp);
                var dayCard = $("<div>").addClass("card weather-card col-lg bg-info text-white mr-md-2 mb-3");
                var dayDate = $("<h5>").attr("style", "font-size:100%").addClass("card-title text-nowrap").text(moment().add(1,'day').format('L'));
                var dayTemp = $("<p>").addClass("card-text").text("Temp: " + dayTempEl + " F");
                var dayHum = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + day.main.humidity);
                $(dayCard).append(dayDate);
                $(dayCard).append(dayIconEl);
                $(dayCard).append(dayTemp);
                $(dayCard).append(dayHum);
                $("#five-day-forecast").append(dayCard);
>>>>>>> 89067d2a85e6dcd042d554ada3d9e754f37f636f
            }
        })
    })
})