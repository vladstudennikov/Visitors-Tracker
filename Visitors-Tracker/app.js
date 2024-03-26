const express = require('express');
const visitors = require("./controllers");
const cors = require("cors")

const PORT = 8080;
const app = express();
app.use(cors());
app.use("/visitors", visitors);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});
