// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
const csv = require("csvtojson");
const csvFilePath = "/Users/markalbright/Desktop/clear/accurate/charts/config/oeeCSV2JSON.csv";
// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/data", function (req, res) {
    var dbQuery = "SELECT * FROM dieCuttingOEE.shiftMonthly";
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  app.get("/api/seed", function (req, res) {
    csv()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        console.log(jsonObj);
        res.json(jsonObj);
      });
  });
};
