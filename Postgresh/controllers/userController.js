const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds (adjust as needed)
// Create a new user
exports.createUser = async (req, res) => {
    console.log(req.body);

    try {
        if (req.body.name && req.body.email && req.body.password) {
            const { name, email, password } = req.body;
            // Check if a user with the same email already exists
            const existingUser = await User.findOne({ where: { email: req.body.email } });
            console.log(existingUser);
            if (existingUser) {
                // User with the same email already exists
                res.status(200).json({ message: "User already exists" });
            } else {
                // Hash the password before storing it in the database
                const hashedPassword = await bcrypt.hash(password, saltRounds);
                // Create a new user
                const user = await User.create({
                    name: name,
                    email: email,
                    password: hashedPassword
                });
                res.status(201).json({ message: "User created", user });
            }
        } else {
            return res.status(200).json({ message: "Missing name, email, or password" });
        }
    } catch (error) {
        res.status(200).json({ error: error.message });
    }
};

exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {

        // Check if a user with the provided email exists
        const existingUser = await User.findOne({ where: { email: email } });
        // console.log(existingUser.dataValues);
        // console.log(password);

        if (existingUser) {
            // User with the provided email exists, now verify the password
            bcrypt.compare(password, existingUser.dataValues.password, (err, result) => {
                if (err) {
                    console.error(err);
                }
                if (result) {
                    // Password is correct, user is authenticated
                    return res.status(200).json({ message: 'Login Successfully' });
                } else {
                    // Password is incorrect
                    return res.status(201).json({ message: 'Password Incorrect' });
                }
            });
        } else {
            // User with the provided email does not exist
            return res.status(201).json({ message: 'User does not exist' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

