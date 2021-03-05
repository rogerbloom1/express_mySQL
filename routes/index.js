const express = require("express");
const { getAllEmployees, getOneEmployee } = require("../db/queries/employees");

const router = express.Router();

router.get("/api/employees:id?", async (req, res, next) => {
    try {
        let { id } = req.params;
        if(id) {
            let data = await employees.getOneEmployee(id);
            res.status(200).json(data);
        } else {
        let data = await employees.allEmployees
        res.status(200).json(data);
        }
    } catch (error) {
        next(error);
    }
});

router.get("/api/employees/:id", (req, res, next) => {
    let { id } = req.params;
    try {
        res.json("Employee " + id);
    } catch (error) {
        next(error);
    }
});

module.exports = router;