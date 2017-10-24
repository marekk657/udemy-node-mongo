const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {

    // GET /api
    app.get('/api', DriversController.greeting);

    // POST /api/drivers
    app.post('/api/drivers', DriversController.create);

    // PUT /api/drivers/{id}
    app.put('/api/drivers/:id', DriversController.edit);

    // DELETE /api/drivers/{id}
    app.delete('/api/drivers/:id', DriversController.delete);

    // GET /api/drivers
    app.get('/api/drivers', DriversController.index);
};