import { Schema, model } from "mongoose";

const computerMaintenanceSchema = new Schema({
    serialNumber: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    processor: String,
    ram: String,
    storage: String,
    maintenanceType: String,
    maintenanceDescription: String,
    maintenanceDate: {
        type: Date,
        default: Date.now
    },
    technician: String,
    status: {
        type: String,
        enum: ["In maintenance", "Fixed", "Irreparable"],
        default: "In maintenance"
    }
});

export default model('ComputerMaintenance', computerMaintenanceSchema);
