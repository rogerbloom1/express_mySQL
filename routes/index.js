const express = require("express");

const router = express.Router();

router.get("/api/employees", (req, res, next) => {
    try {
        res.json("Employees");
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
