const dbConfig = require("./config.json");
const Sequelize = require('sequelize')
require('dotenv').config(); 

const sequelize = new Sequelize({
    dialect: 'postgres', // Replace 'postgres' with your actual dialect
    username: 'postgres',
    password: 'root',
    database: 'Users',
    host: 'localhost',
    port: 5432, // Replace with your database port
});

// const sequelize = new Sequelize({
//     dialect: 'postgres',
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
// });

module.exports = sequelize;



// require('dotenv').config(); // Load environment variables from .env file

// const Sequelize = require('sequelize');

// const sequelize = async () => {
//   try {
//     const sequelize2 = new Sequelize({
//       dialect: 'postgres', // Specify the PostgreSQL dialect explicitly
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_DATABASE,
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//     });

//     await sequelize2.authenticate(); // Test the connection

//     console.log('Connection to the database has been established successfully.');

//     return sequelize2;
//   } catch (err) {
//     throw new Sequelize.SequelizeConnectionError(err); // Reject with a ConnectionError
//   }
// };

// module.exports = sequelize;



