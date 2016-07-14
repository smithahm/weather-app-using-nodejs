var request = require('request');

function getWeather(location){

	return new Promise(function(resolve, reject){
		if(!location){
			return reject('No location provided');
		}

	var loc = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + loc +'&appid=5ff42f8d26ea9c779cefc7850a72c095&units=imperial';

	request({
	url: url,
    json: true}, function(error, response, body){
           if(error){
           	  return reject('unable to fetch weather');
           }else{
           	resolve('It\'s ' + body.main.temp + ' in ' + body.name);
           }

    });
   })

}

getWeather().then(function(currentWeather){
  console.log(currentWeather);
}, function(error){
  console.log(error);
});