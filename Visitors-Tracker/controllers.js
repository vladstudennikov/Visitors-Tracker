const settings = require("./settings").ServiceAPI;
const API = require(`${settings}`).API
const express = require("express");
const bodyParser = require('body-parser');
const PassportData = require('./services/PassportData');


const api = new API();
const router = express.Router();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get("/get", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (Object.keys(req.query).length === 0) { res.status(200).send(JSON.stringify(await api.getVisitors())); return; }
  if (Object.keys(req.query).length > 1) { res.status(404).send("URL cannot have several parameters"); return }

  let result;
  let status = 200;
  switch (Object.keys(req.query)[0]) {
    case "id": 
      try { 
        result = await api.getById(parseInt(req.query.id)); 
      } catch (err) { result = err.message; status = 404; }
      break;

    case "city": 
      try {
        result = await api.getByCity(req.query.city);
      } catch (err) { result = err.message; status = 404; }
      break;

    case "name": 
      try {
        result = await api.getByName(req.query.name); 
      } catch (err) { result = err.message; status = 404; }
      
      break;

    case "surname": 
      try { 
        result = await api.getBySurname(req.query.surname); 
      } catch(err) { result = err.message; status = 404; }
      
      break;
  }

  if (result === undefined) { res.sendStatus(404); return; }
  res.status(status).send(JSON.stringify(result));
})


router.post("/post", jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const data = req.body;
    await api.addVisitor(
      data.name,
      data.surname,
      data.patronym,
      data.city,
      data.address,
      new PassportData(data.passport.number, 
        data.passport.issued_by, 
        data.passport.issued_by).getAsDict()
    )
    res.status(200).send("Success");
  } catch (err) {
    console.log(err.message)
    res.status(400).send(err.message);
  }
})


router.delete("/delete", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (Object.keys(req.query).length === 0) { res.status(200).send(JSON.stringify(await api.getVisitors())); return; }
  if (Object.keys(req.query).length > 1) { res.status(404).send("URL cannot have several parameters"); return }

  let result;
  let status = 200;
  switch (Object.keys(req.query)[0]) {
    case "id": 
      try { 
        await api.deleteVisitorById(parseInt(req.query.id));
        result = `User with id = ${res.query.id} was successfully deleted`;
      } catch (err) { result = err.message; status = 404; }
      break;
  }

  if (result === undefined) { res.sendStatus(404); return; }
  res.status(status).send(JSON.stringify(result));
})


module.exports = router


