const express = require("express");
const morgan = require("morgan");
const apiRouter = require("./routes");
const { Query } = require("./db/models");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(apiRouter);


app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ errors: { err: err.message } });
});

app.listen(3000,  () => console.log("Listening on port 3000 ..." ));