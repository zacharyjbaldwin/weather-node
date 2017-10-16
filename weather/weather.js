const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/bfd8535dbd34683605b9032c9df5a736/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                heatIndex: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather data.');
        }
    });
};

module.exports.getWeather = getWeather;
