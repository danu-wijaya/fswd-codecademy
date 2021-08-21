/**
Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

For example, 283 K converts to 10 °C which converts to 50 °F.

 */

// it's kelvin temp
const Kelvin = 293;

// it's convert kelvin to celcius, since celcius is 273 degrees les than kelvin
const Celcius = Kelvin - 273;

// it will convert celcius to fahrenheit
let fahrenheit = Celcius * (9 / 5) + 32;

// round up the result
fahrenheit = Math.floor(fahrenheit);

console.log(`the temprature is ${fahrenheit} degrees Fahrenheit`);
