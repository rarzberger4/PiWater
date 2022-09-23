const { Router } = require('express');
const waterController = require('../controllers/waterController');

const routes = Router();

routes.get('/wateringPlans/:id', waterController.getWateringPlan);

module.exports = routes;