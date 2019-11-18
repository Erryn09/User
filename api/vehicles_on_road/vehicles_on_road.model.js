var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var vehiclesOnRoadSchema = new Schema({
    tag_id:{
        type: String,
        unique : true,
        required : true
    }
},{ collection : 'vehicles_on_road' }, {
    timestamps: true
});

module.exports = vehiclesOnRoadSchema;