import mongoose  from "mongoose";

mongoose.connect(process.env.CONECTION_STRING_DB)
.then(db=> console.log('Conexion Exitosa a la base'))
.catch(err=>console.error(err));

export default mongoose;