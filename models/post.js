'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: 'UserId',
        onDelete: 'CASCADE'
      })
      Post.belongsTo(models.Subforum, {
        foreignKey: 'SubforumId',
        onDelete: 'CASCADE'
      })
      Post.hasMany(models.Comment)
    }
  };
  Post.init({
    title: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    content: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    SubforumId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};