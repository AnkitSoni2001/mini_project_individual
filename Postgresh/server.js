const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const cors = require('cors')
const database = require('./config/sequelize');

// Middleware
app.use(bodyParser.json());
app.use(cors())

// Routes
app.use(userRoutes);

const PORT = process.env.PORT || 8000;


database.sync().then(() =>{
    console.log("Connected to database");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

// const express = require('express');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// app.use(cors());
// app.use(express.json());
// const port = 8000;

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'employees',
//     password: 'root',
//     port: 5432, // Default PostgreSQL port
// });

// class UserData {
//     async createTable(tableName) {
//         try {
//             const checkTable = await this.tableExist(tableName);
//             if (checkTable === false) {
//                 const query = `CREATE TABLE ${tableName} (Id serial PRIMARY KEY, Name varchar(30), Email varchar(50), Password varchar(50))`;
//                 await pool.query(query);
//                 console.log('Table created');
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     async tableExist(tableName) {
//         try {
//             const result = await pool.query(`SELECT table_name FROM information_schema.tables WHERE table_name = $1`, [tableName]);
//             return result.rowCount > 0;
//         } catch (err) {
//             console.log(err);
//             return false;
//         }
//     }

//     async userInput(tableName, userInfo) {
//         try {
//             if (await this.tableExist(tableName)) {
//                 const query = `INSERT INTO ${tableName}(Name, Email, Password) VALUES ($1, $2, $3)`;
//                 await pool.query(query, [userInfo.name, userInfo.email, userInfo.password]);
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }

// const obj = new UserData();

// app.get('/signin', async (req, res) => {
//     await obj.createTable('UsersData');
//     res.send('Hello World');
// });

// app.post('/signup', async (req, res) => {
//     const data = req.body;
//     if (data.name && data.email && data.password) {
//         await obj.createTable('UsersData');
//         // Validating whether the user exists or not
//         const existUserQuery = 'SELECT * FROM UsersData WHERE Email = $1';
//         const userExistData = await pool.query(existUserQuery, [data.email]);
//         console.log(userExistData.rowCount);

//         if (userExistData.rowCount > 0) {
//             res.json({ message: 'User already exists' });
//         } else {
//             await obj.userInput('UsersData', data).then(() => {
//                 res.json({ message: 'userCreated' });
//             });
//         }
//     } else {
//         res.json({ message: 'All fields are required!' });
//     }
// });

// app.post('/signin', async (req, res) => {
//     const data = req.body;
//     console.log(data.password);
//     console.log(data.email);

//     if (data.email && data.password) {
//         try {
//             const userQuery = 'SELECT * FROM UsersData WHERE Email = $1';
//             const userData = await pool.query(userQuery, [data.email]);
//             console.log(userData);

//             if (userData.rowCount > 0) {
//                 const user = userData.rows[0];
//                 if (user.password === data.password) {
//                     res.json({ message: 'Sign-in successful' });
//                 } else {
//                     res.json({ message: 'Invalid credentials' });
//                 }
//             } else {
//                 res.json({ message: 'User not found' });
//             }
//         } catch (error) {
//             console.error('Error during sign-in:', error);
//             res.status(500).json({ message: 'Internal server error' });
//         }
//     } else {
//         res.status(400).json({ message: 'All fields are required' });
//     }
// });

// app.post('/myprofile', async (req, res) => {
//     const employeeEmail = req.params.email;

//     try {
//         const employeeQuery = 'SELECT * FROM Employees WHERE Email = $1';
//         const employeeData = await pool.query(employeeQuery, [employeeEmail]);

//         if (employeeData.rowCount !== 0) {
//             const employee = employeeData.rows[0];
//             res.json(employee);
//         } else {
//             res.json({ message: 'Employee not found' });
//         }
//     } catch (error) {
//         console.error('Error fetching employee profile:', error);
//         res.json({ message: 'Internal server error' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
