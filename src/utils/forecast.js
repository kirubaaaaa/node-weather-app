const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fd05ac88a1e06abe1f959739bb313a6f&&query='+latitude+","+longitude+'&units=f'
console.log(url)

  request({url,"json":true},(error,{body})=>{
      if(error)
      {
        callback("No internet ra ambi",undefined);
      }
      else if(body.error)
      {
        callback(body.error.info,undefined);
      }
      else{

        callback(undefined,'Actual temperature is '+body.current.temperature+ ',degrees but it feelsLike '+body.current.feelslike+' degrees.');
      }
  })
}
module.exports = forecast