var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var vehiclesSchema = new Schema({
    tag_id:{
        type: String,
        unique : true,
        required : true
    },owner:{
        type: String,
        unique : false,
        required : true
    },plate_no:{
        type: String,
        unique : false,
        required : true
    },
    insurance_exp : {
        type: String,
        unique : false,
        required : true
    },vehicle_license_exp : {
        type: String,
        unique : false,
        required : true
    },road_worthiness : {
        type: String,
        unique : false,
        required : true
    },date : {
        type: Date,
        unique : false
    }
},{ collection : 'vehicles' }, {
    timestamps: true
});

module.exports = vehiclesSchema;