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

    // getById: function(query, cb) {
    //     this.find(query, cb);
    // },

    // update: function(query, updateData, cb) {
    //     this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    // },

    // delete: function(query, cb) {
    //     this.findOneAndDelete(query,cb);
    // }
}

var vehiclesOnRoadModel = mongoose.model('VehiclesOnRoad', vehiclesOnRoadSchema);
module.exports = vehiclesOnRoadModel;