const model = require("../models/waterModel");

class WaterController {
    
    getWateringPlan(req, res) {
        let wateringPLan = model.getWateringPlan(parseInt(req.params.id));
        if(!wateringPLan) {
            res.status(404).send("Plan not found");
        } else {
            res.send(wateringPLan);
        }
    }

}

module.exports = new WaterController();