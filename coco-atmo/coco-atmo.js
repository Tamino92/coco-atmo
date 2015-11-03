/**
 * http://usejsdoc.org/
 */
var netatmo = require('netatmo');
 
var auth = {
  "client_id": "5638935245a1e31e4875249c",
  "client_secret": "o6wqG9NFjkovWknn5M2tL9FLd",
  "username": "dominiquegallet@hotmail.com",
  "password": "#Castafi0re",
};


 
var api = new netatmo(auth);
 
// Get User 
// See Docs: http://dev.netatmo.com/doc/restapi/getuser 
api.getUser(function(err, user) {
  console.log(user);
});
 
// Get Devicelist 
// See docs: http://dev.netatmo.com/doc/restapi/devicelist 
api.getDevicelist(function(err, devices, modules) {
  console.log(devices);
  console.log(modules);
});
 
// Get Measure 
// See docs: http://dev.netatmo.com/doc/restapi/getmeasure 
var options = {
  device_id: '',
  scale: 'max',
  type: ['Temperature', 'CO2', 'Humidity', 'Pressure', 'Noise'],
};
 
api.getMeasure(options, function(err, measure) {
  console.log(measure.length);
  console.log(measure[0]);
});
 
// Get Thermstate 
// See docs: http://dev.netatmo.com/doc/restapi/getthermstate 
var options = {
  device_id: '',
  module_id: '',
};
 
api.getThermstate(options, function(err, result) {
  console.log(result);
});