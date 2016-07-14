var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs').option('location',{
  alias: 'l',
  demand: false,
  type: 'string'
}).argv;


if(typeof argv.location === 'string' && argv.location.length > 0){
  weather(argv.location).then(function(currentWeather){
     console.log(currentWeather)
  }, function(error){
    console.log(error);
  })
}else{
location().then(function(location){
   return weather(location.city);
}).then(function(currentWeather){
  console.log(currentWeather)
}).catch(function(error){
  console.log(error);
});

}