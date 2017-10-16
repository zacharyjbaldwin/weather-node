#!/usr/bin/env node
'use strict';

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const yargs = require('yargs');

const argv = yargs
    .options({
        address: {
            alias: 'a',
            demand: true,
            describe: 'The address for which to fetch weather information.',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .alias('version', 'v')
    .argv;

geocode.geocodeAddress(argv.address, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        // console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.latitude, results.longitude, (error, results) => {
            console.log(`The current temperature is ${results.temperature} but it feels like ${results.heatIndex}`);
        });
    }
});

// bfd8535dbd34683605b9032c9df5a73
// weather.getWeather();
