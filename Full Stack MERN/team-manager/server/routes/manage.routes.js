const playerController = require("../controllers/manage.controller");

module.exports = (app) => {
    app.post('/api/players', playerController.createPlayer);
    app.get('/api/players',playerController.findAllPlayer);
    app.get('/api/players/:id', playerController.findOnePlayer);
    app.put('/api/players/:id',playerController.updatePlayer);
    app.delete('/api/players/:id', playerController.deletePlayer);
};