import ComputerMaintenance from "../model/produtsmodel.js";

const maintenanceDao = {};

maintenanceDao.getAll = async () => {
    const maintenanceRecords = await ComputerMaintenance.find();
    return maintenanceRecords;
};

maintenanceDao.getOne = async (serialNumber) => {
    const maintenanceRecord = await ComputerMaintenance.findOne({ serialNumber: serialNumber });
    return maintenanceRecord;
};

maintenanceDao.insertOne = async (maintenanceRecord) => {
    return await ComputerMaintenance.create(maintenanceRecord);
};

maintenanceDao.updateOne = async (serialNumber, maintenanceRecord) => {
    return await ComputerMaintenance.findOneAndUpdate({ serialNumber: serialNumber }, maintenanceRecord);
};

maintenanceDao.deleteOne = async (serialNumber) => {
    return await ComputerMaintenance.findOneAndDelete({ serialNumber: serialNumber });
};

export default maintenanceDao;
