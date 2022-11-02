import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneId: {
    field: 'phoneid',
    type: DataTypes.STRING,
    allowNull: false
  },
  itemId: {
    field: 'itemid',
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fullPrice: {
    field: 'fullprice',
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  screen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  capacity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false
});

export async function getAll() {
  const result = await Product.findAll();

  return result;
}

