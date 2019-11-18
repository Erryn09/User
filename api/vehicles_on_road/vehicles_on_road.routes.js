var VehiclesOnRoad = require('./vehicles_on_road.controller');

module.exports = function(router) {
    router.post('/vehicles_on_road', VehiclesOnRoad.createVehicle);
    router.get('/vehicles_on_road', VehiclesOnRoad.getVehicles);
    // router.get('/vehicle/:tag_id', Vehicles.getVehicle);
    // router.put('/vehicle/:id', Vehicles.updateVehicle);
    // router.delete('/vehicle:id', Vehicles.removeVehicle);
}