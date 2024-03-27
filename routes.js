const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/home", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

router.get("/product/:id", (req, res) => {
  res.send({
    id: req.params.id,
  });
});

router.get("/data", (req, res) => {
  const data = {
    nama: "Dewantoro",
    umur: 28,
    pekerjaan: "Web Developer",
  };
  res.json(data);
});

module.exports = router;
