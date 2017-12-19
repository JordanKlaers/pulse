'use strict'

var Gpio = require('pigpio').Gpio
var green = new Gpio(17, {mode: Gpio.OUTPUT})

green.pwmWrite(255); // high blocks
console.log("high");

setInterval(function() {
  green.pwmWrite(255);
  console.log("high");
  setTimeout(function(){
    green.pwmWrite(0);
    console.log("low");
  },200);
}, 15000)
