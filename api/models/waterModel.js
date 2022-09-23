class WateringPlan {

    constructor(name, day, time) {
        this.name = name;
        this.day = day;
        this.time = time;
    }
}

class WateringPlanModel {
    static ID = 1;

    constructor() {
        this.wateringPlans = new Map();
    }

    createWateringPlan(wateringPlan) {
        wateringPlan.id = WateringPlanModel.ID++;
        // console.log(event.date);
        this.wateringPlans.set(wateringPlan.id, wateringPlan);
        return this.getWateringPlan(wateringPlan.id);
    }

    getWateringPlans() {
        return Array.from(this.wateringPlans.values());
    }

    getWateringPlan(id) {
        if (typeof id !== "number") {
            throw new Error(`Given id must be an number, but is a ${typeof id}`);
        }

        let wateringPlan = null;
        wateringPlan = this.wateringPlans.get(id);

        return wateringPlan;
    }
    
}

const model = new WateringPlanModel();

model.createWateringPlan(new WateringPlan("Test", "Monday", "12:00"));
model.createWateringPlan(new WateringPlan("Test", "Tuesday", "12:00"));

module.exports = model;