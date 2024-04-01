const router = require("express").Router();
const connection = require("../../config/mysql");

router.get("/user", (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM users",
    },
    (err, results) => {
      if (err) {
        res.send({
          status: "error",
          response: "failed to get users",
        });
      } else {
        res.send({
          status: "success",
          response: results,
        });
      }
    }
  );
});

module.exports = router;
