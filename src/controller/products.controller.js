import maintenanceDao from "../dao/products.dao.js";

export const getAll = (req, res) => {
    maintenanceDao.getAll()
        .then(computerMaintenances => res.render('../src/views/index',{ computerMaintenances }))
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
}
    
export const getOne = (req, res) => {
    const serialNumber = req.params.serialNumber;
    maintenanceDao.getOne(serialNumber)
        .then(maintenanceRecord => {
            !maintenanceRecord ? res.json({
                 message: "Maintenance record not found" 
                }) : res.render('../src/views/edit', {maintenance: maintenanceRecord});
        })
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
};



export const insertOne = (req, res) => {
    maintenanceDao.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(err => {
            console.error(err);
            res.status(500).json({ status: 'Error en el servidor' });
        });
  };


  export const updateOne = (req, res) => {
    maintenanceDao
      .updateOne(req.params.serialNumber, req.body)
      .then((maintenanceRecord) => {
        !maintenanceRecord
          ? res.json({
              message: "Maintenance record not found",
            })
          : res.redirect("/");
      })
      .catch((err) => res.json({ status: "Server unavailable"}));
};


export const deleteOne = (req, res) => {
    maintenanceDao
        .deleteOne(req.params.serialNumber)
        .then((computerMaintenances) => {
            !computerMaintenances
                ? res.json({
                    message: "Maintenance record not found"
                })
            : res.redirect("/");
        })
    .catch(err=>res.json({status: "Server Unavailable"}));
}
