function getWeather(city){
	if (city) {
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (this.status==200 && this.readyState==4) {
			var formattedData=formatWeather(JSON.parse(xhr.responseText));
			document.getElementById("weather-data").innerHTML=formattedData;
			document.getElementById('cityname').value="";
		}
	};
	xhr.open("GET","api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=83b1aee0a8eda152ab3f7c21f3bc0007");
	}
	
	xhr.send();
  }

  	else () {
  	var error='<div class="alert alert-danger alert-dismissible text-center" role="alert">';
		error+='<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		error+='You must enter a city name!</div>';
	document.getElementById('error').innerHTML=error;
  }
	return false;


function formatWeather(data){
	return "<h3>Current Weather for " + data.name + ", " + data.sys.country + "</h3>" + 
			"<p>Weather: " + data.weather[0].main+ "</p>" + 
			"<p>Weather Description: " + data.weather[0].description + img + "logo.png" + data.weather[0].icon + ".png'/>" + "</p>" + 
			"<p>Temperature: " + data.main.temp + "&deg;F</p>" + 
			"<p>UV: " + data.main.ultraViolate + "hUv</p>" + 
			"<p>Humidity: " + data.main.humidity + "%</p>" + 
			"<p>Min Temperature: " + data.main.temp_min + "&deg;F</p>" + 
			"<p>Max Temperature: " + data.main.temp_max + "&deg;F</p>" + 
			"<p>Wind Speed: " + data.wind.speed + "m/s</p>";
}


function getForecast(city,days){
	var days = ("5")
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (this.status==200 && this.readyState==4) {
			var formattedData=formatForecast(JSON.parse(xhr.responseText));
			document.getElementById("forecast").innerHTML=formattedData;
			document.getElementById('cityname').value="";
			document.getElementById('days').value=""
		}
	};
	xhr.open("GET","api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml="+ city + "&cnt=" + days + "&appid=83b1aee0a8eda152ab3f7c21f3bc0007");
	xhr.send();
	return false;
}

function formatForecast(data){
	var table="";
	for (var i = 0; i < data.list.length; i++) {
		table += "<tr>";
		table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'/></td>";
		table += "<td>" + data.list[i].weather[0].main + "</td>";
		table += "<td>" + data.list[i].weather[0].description + "</td>";
		table += "<td>" + data.list[i].temp.morn + "&deg;F</td>";
		table += "<td>" + data.list[i].temp.night + "&deg;F</td>";
		table += "<td>" + data.list[i].temp.min + "&deg;F</td>";
		table += "<td>" + data.list[i].temp.max + "&deg;F</td>";
		table += "<td>" + data.list[i].ultraViolate + "hUV</td>";
		table += "<td>" + data.list[i].humidity + "%</td>";
		table += "<td>" + data.list[i].speed + "m/s</td>";
		table += "</tr>";
	}
	return table;
}