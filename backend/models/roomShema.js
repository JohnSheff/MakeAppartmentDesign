const {Schema} = require ('mongoose');
const mongoose = require ('mongoose');
const roomSchema = new Schema ({
  srcPlint:Array,
  sill:Array,
  light:Array,
  molding:Array,
  elecric:Array,
  colorWall:Array,
  srcSample:Array,
  srcDoor:Array,
  preset:Array,
});

module.exports = mongoose.model ('Roomdb', roomSchema);
