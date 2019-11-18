var mongoose = require('mongoose');
var vehiclesOnRoadSchema = require('./vehicles_on_road.model');

vehiclesOnRoadSchema.statics = {
    create : function(data, cb) {
        var vehicle = new this(data);
        vehicle.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },
}

var vehiclesOnRoadModel = mongoose.model('VehiclesOnRoad', vehiclesOnRoadSchema);
module.exports = vehiclesOnRoadModel;