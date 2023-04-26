module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    });
  
    return Status;
  };