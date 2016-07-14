function doWork(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			console.log('done');
			reject();
		}, 1000)
	});
}


doWork().then(function(){
	return doWork();
}).then(function(){
	console.log('all done');
}, function(){
    	console.log('all not done');
});



function getLocation(){
   return new Promise(function(resolve, reject){
         resolve('Philadelphia');
   });
}

function getWeather(location){
	return new Promise(function(resolve,reject){
       resolve('it\'s 78 in Philadelphia');
	});
       
}

getLocation().then(function(location){
      getWeather(location).then(function(currentWeather){
           console.log(currentWeather);
      });
});