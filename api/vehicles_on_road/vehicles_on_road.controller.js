var Vehicles = require('./vehicles_on_road.dao');

exports.createVehicle = function (req, res, next) {
    var vehicle = {
        tag_id: req.body.tag_id
    };

    Vehicles.create(vehicle, function(err, vehicle) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Vehicle Created Successfully",
            vehicle
        })
    })
}

exports.getVehicles = function(req, res, next) {
    Vehicles.get({}, function(err, vehicles) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            vehicles: vehicles
        })
    })
}
