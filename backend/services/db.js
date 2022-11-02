import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'd8o7le5m6sh22i',
  'ruxfhxvmwidupx',
  'be76fa062fd382b6ab3ce1bd910e3fd6fed758de53fe568bb00af3302df6c192',
  {
    host: 'ec2-52-19-188-149.eu-west-1.compute.amazonaws.com',
    port: 5432,
    schema: 'public',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);
