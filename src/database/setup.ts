import sequelize from './connection';

const db_setup = sequelize.sync()
.then((res:any)=>console.log('Se crearon todas las tablas con éxito'))
.catch((res:any)=>console.log('Ocurrió algún error al crear las tablas'));;
export default db_setup;