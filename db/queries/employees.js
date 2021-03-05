const { Query } = require("../models");


const allEmployees = async () => {
    return Query("SELECT * FROM employees");
};

const oneEmployee = async (id) => {
    return Query("SELECT * FROM employees WHERE EmployeeID = ?", [id]);
};

const addEmployee = async (body) => {
    return Query("INSERT INTO employees VALUES ?", [body]);
};

const updateEmployee = async (id, body) => {
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
