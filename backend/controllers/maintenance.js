const connection = require("../models/db");

const mainten = (req, res) => {
    const { cartype, carmodel, note } = req.body
    const requester_id = req.token.userId
    const query = `INSERT INTO maintenance (cartype, carmodel, note,requester_id) VALUES(?,?,?,?)`;
    const data = [cartype, carmodel, note, requester_id]
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(404).json({
                success: false,
                massage: "something went wrong while creating new mainten",
                err: err.message
            });
        }
        return res.status(201).json({
            success: true,
            massage: "the mainten has been created success",
            result: result,
        });
    });
};


const getmaintenforadmin = (req, res) => {
    const userId = req.token.userId
    const role = req.token.role

    // console.log(userId,role);
    if (role === "admin") {
        const query = `SELECT * FROM maintenance WHERE is_deleted=0;`
        connection.query(query, (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    massage: "server error",
                    err: err.message,
                })
            }
            return res.status(200).json({
                success: true,
                massage: "All the mainten",
                result: result,
            });
        })
    } else {
        const query = `SELECT * FROM maintenance WHERE is_deleted=0 and requester_id=?;`;
        const data =[userId]
        connection.query(query,data, (err, result) => {
            console.log(userId);
            if (err) {
                return res.status(500).json({
                    success: false,
                    massage: "server error",
                    err: err.message,
                })
            };
            return res.status(200).json({
                success: true,
                massage: `the mainten ${userId}`,
                result: result,
            });
        })
    }
}

module.exports = {
    mainten ,
    getmaintenforadmin
}