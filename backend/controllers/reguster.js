const connection = require("../models/db");

const bcrypt = require("bcrypt");

const salt = 10;

const register = async (req, res) => {
    const { firstName,
        email,
        password,
        role_id } = req.body

    const encryptedpassword = await bcrypt.hash(password, salt);
    const query = `INSERT INTO users (firstName,email,password,role_id) VALUES(?,?,?,?)`;
    const data = [firstName, email, encryptedpassword, role_id];
    connection.query(query, data, (err, result) => {
        if (err) {
            res.status(409).json({
                success: false,
                massage: "the email already exists",
                err: err.message
            });
        }
        res.status(200).json({
            success: "true",
            massage: "Account created successfully",
            result
        });
    });
};

module.exports = { register }
