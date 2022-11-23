const connection = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const login = (req, res) => {
    const { password } = req.body
    const email = req.body.email.toLowerCase();
    const query = `SELECT * FROM roles INNER JOIN users ON users.role_id=roles.id WHERE email=?`;
    const data = [email];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.json({ err: err.message });
        };
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (err) return res.json({ err: err.message });
                if (response) {
                    const payload = {
                        userId: result[0].id,
                        role_id: result[0].role_id,
                        role:result[0].role,
                    };
                    const secret = process.env.SECRET;
                    const token = jwt.sign(payload, secret);
                    return res.status(200).json({ token });
                } else {
                    return res.status(200).json({
                        success: false,
                        message: `the password you have entered is incorrect`,
                    });
                }
            });
        } else {
            return res.status(404)
                .json({
                    success: false,
                    message: "The email doesn't exist",
                });
        }
    });
};


module.exports = {
    login,
};
