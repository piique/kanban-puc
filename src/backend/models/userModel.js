
module.exports = (sequelize, DataTypes) => {

const user = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(265),
        allowNull: false,
    },
    manager: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    balance: {
        type: DataTypes.FLOAT,
    },
});
return user
}