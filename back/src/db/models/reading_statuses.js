export default function (sequelize, DataTypes) {
    const reading_statuses = sequelize.define(
      "reading_statuses",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "reading_statuses",
        schema: "library",
        timestamps: false,
      },
    );
  
    return reading_statuses;
  };