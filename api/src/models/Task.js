const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Task",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      attach: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      links: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      branch: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
};
