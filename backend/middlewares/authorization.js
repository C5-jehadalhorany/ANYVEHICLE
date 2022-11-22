const connection = require("../models/db");

const authorization = (string) => {
    return function (req, res, next) {
        const user_id = req.token.userId;
        const data = [user_id];
        const query = `SELECT * FROM users WHERE id=?`;
        connection.query(query, data, (err, result) => {
            const query = `SELECT * FROM role_permissions INNER JOIN permissions ON role_permissions.permission_id= permissions.id WHERE role_permissions.role_id = (?) AND permissions.permission = (?)`;
            const data = [result[0].role_id, string];
            connection.query(query, data, (err, result) => {
                if (result.length) {
                    next();
                } else {
                    res.status(400).json({ message: "unauthorized" });
                }
            });
        });
    };
};


module.exports = authorization;