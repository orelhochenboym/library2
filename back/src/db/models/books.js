module.exports = function (sequelize, DataTypes) {
  const books = sequelize.define(
    "books",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      page_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      current_page: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reading_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      published_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "books",
      schema: "library",
      timestamps: false,
    }
  );

  books.associate = function (models) {
    books.hasOne(models.reading_statuses, {
      foreignKey: "id",
      as: 'id_alias',
      sourceKey: "reading_status",
    });
  };

  return books;
};
