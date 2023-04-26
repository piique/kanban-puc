module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('Card', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      estimated_pomodoros: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
      },
      estimated_member_pomodoros: {
        type: DataTypes.INTEGER,
      },
      used_pomodoros: {
        type: DataTypes.FLOAT,
      },
      final_time: {
        type: DataTypes.FLOAT,
      },
      created_at: {
        type: DataTypes.STRING(11),
      },
      finished_at: {
        type: DataTypes.STRING(11),
      },
    });
  
    return Card;
  };