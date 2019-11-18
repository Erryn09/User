var mongoose = require('mongoose');
var vehiclesSchema = require('./vehicles.model');
var axios = require('axios');

vehiclesSchema.statics = {
    create : function(data, cb) {
        var vehicle = new this(data);
        vehicle.save(cb);
    },

    get: function(query, cb) {
        var vehicles = []
        axios.get('http://localhost:4000/api/vehicles_on_road')
            .then((response) => {
                vehicles = response.data.vehicles.map((vehicle) => vehicle.tag_id);
                this.find({ tag_id: { $in: [ ...vehicles ] } }, cb);
            })
            .catch((error) => {
                console.log(error);
            })
        
    },

    getById: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var vehiclesModel = mongoose.model('Vehicles', vehiclesSchema);
module.exports = vehiclesModel;