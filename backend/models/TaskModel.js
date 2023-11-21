import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('tasks',{
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    status: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();