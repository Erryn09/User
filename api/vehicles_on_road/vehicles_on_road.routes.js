var VehiclesOnRoad = require('./vehicles_on_road.controller');

module.exports = function(router) {
    router.post('/vehicles_on_road', VehiclesOnRoad.createVehicle);
    router.get('/vehicles_on_road', VehiclesOnRoad.getVehicles);
}