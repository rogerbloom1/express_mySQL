const express = require("express");
const apiRouter = require("./routes");
const { Query } = require("../models");

const app = express();

app.use(express.json());

app.use(apiRouter);

const oneEmployee = async (id) => {
    return Query("SELECT EmployeeID, FirstName, LastName, Title FROM employees WHERE EmployeeID = ?", [id]);
};

const allEmployees = async () => {
    return Query("SELECT EmployeeID, FirstName, LastName, Title FROM employees");
};
const addEmployee = async (body) => {
    return Query("INSERT INTOemployees SET ?", [body]);
};
const updateEmployee = async (body, id) => {
    return Query("UPDATE employees SET ? WHERE EmployeeID = ?", [body, id]);
};
const removeEmployee = async (id) => {
    return Query("DELETE from employees WHERE EmployeeID = ?", [id]);
};

module.exports = {
    allEmployees,
    oneEmployee,
    addEmployee,
    updateEmployee,
    removeEmployee
};

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ errors: { err: err.message } });
});

app.listen(3000,  () => console.log("Listening on port 3000 ..." ));