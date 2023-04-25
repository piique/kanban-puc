
module.exports = (sequelize, DataTypes) => {
    const Pomodoro = sequelize.define('Pomodoro', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pomodoro_period: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pomodoro_interval: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Pomodoro;
  };
  