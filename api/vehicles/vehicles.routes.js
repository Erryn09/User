var Vehicles = require('./vehicles.controller');

module.exports = function(router) {
    router.post('/vehicles', Vehicles.createVehicle);
    router.get('/vehicles', Vehicles.getVehicles);
    router.get('/road-vehicles', Vehicles.getVehiclesOnRoad);
    router.get('/vehicle/:tag_id', Vehicles.getVehicle);
    router.put('/vehicle/:id', Vehicles.updateVehicle);
    router.delete('/vehicle:id', Vehicles.removeVehicle);
}