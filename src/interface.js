// $(document).ready(function() {
//   var thermostat = new Thermostat();
//   $('#temperature').text(thermostat.temperature);
// })
// $('#temp-up').on('click', function() { // event listener
//   thermostat.increaseTemperature(); // update model
//   $('#temperature').text(thermostat.temperature); // update view
// })
//
// $('#temp-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
//   thermostat.decreaseTemperature();
//   $('#temperature').text(thermostat.temperature);
// })
//
// function updateTemperature() {
//   $('#temperature').text(thermostat.temperature);
// }

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };
});
$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
})

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
 });

// function updateTemperature() {
//   $('#temperature').text(thermostat.temperature);
//   $('#temperature').attr('class', thermostat.energyUsage());
// }
