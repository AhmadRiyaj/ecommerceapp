async function validatename(req, res, next) {
  const data = req.body;
  if (!data.name) {
    res.status(400).send({ message: "Please fill the name field." });
    return;
  }
  next();
}

module.exports = { validatename };
