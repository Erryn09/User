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

// exports.getVehicle = function(req, res, next) {
//     Vehicles.getById({tag_id: req.params.tag_id}, function(err, vehicle) {
//         if(err) {
//             res.json({
//                 error: err
//             })
//         }
//         res.json({
//             vehicle
//         })
//     })
// }

// exports.updateVehicle = function(req, res, next) {
//     var vehicle = {
//         tag_id: req.body.tag_id,
//         owner: req.body.owner,
//         plate_no: req.body.plate_no,
//         road_worthiness: req.body.road_worthiness,
//         insurance: req.body.insurance,
//         vehicle_license_exp: req.body.vehicle_license_exp,
//     }
//     Vehicles.update({_id: req.params.id}, vehicle, function(err, vehicle) {
//         if(err) {
//             res.json({
//                 error : err
//             })
//         }
//         res.json({
//             message : "Vehicle updated successfully",
//             vehicle
//         })
//     })
// }

// exports.removeVehicle = function(req, res, next) {
//     Vehicles.delete({tag_id: req.params.tag_id}, function(err, vehicle) {
//         if(err) {
//             res.json({
//                 error : err
//             })
//         }
//         res.json({
//             message : "Vehicle deleted successfully"
//         })
//     })
// }
