
module.exports = (sequelize, DataTypes) => {
    const UserProject = sequelize.define('UserProject', {
      initial_date: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
    });
  
    return UserProject;
  };