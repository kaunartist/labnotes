var fortune = require('fortune');
var options = {
  db: 'demo_app'
};
var port = process.argv[2] || 1337;

var app = fortune(options);
app.resource('job', {
  date: Date,
  name: String,
  duration: Number,
  current: Number,
  vector: ['speedpower'],
  raster: ['speedpower'],
  material: String,
  notes: String
}).resource('speedpower', {
  speed: Number,
  power: Number,
}).listen(port);

console.log('Listening on port ' + port + '...');
