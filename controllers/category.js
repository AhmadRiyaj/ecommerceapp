const { Categories } = require("../models");

async function createCategory(req, res) {
  const data = req.body;

  if (!data.name) {
    res.status(400).send({ message: "Please fill all credentials" });
  }
  const name = data.name;
  const description = data.description;

  try {
    const result = await Categories.create({ name, description });
    console.log(result);
    res.status(200).send({ message: "Category Created Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
    console.log(error);
  }
}

// find all data

async function getAllCategory(req, res) {
  try {
    const result = await Categories.findAll();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server Error" });
  }
}

async function getCategorbyId(req, res) {
  try {
    id = req.params.id;
    const result = await Categories.findOne({
      where: {
        id: id,
      },
    });
    res.send(result);
  } catch (error) {
    console.log("error");
    res.status(500).send({ message: "Server Error" });
  }
}

async function updateCategory(req, res) {
  id = req.params.id;
  result = await Categories.findOne({
    where: {
      id: id,
    },
  });

  if (result) {
    result.name = req.body.name;
    result.description = req.body.description;
    result.save();
    res.status(200).send({ message: "Updated", result });
  } else {
    console.log("Error ");
  }
}

async function deleteCategory(req, res) {
  id = req.params.id;
  try {
    await Categories.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).send({ message: "Server Error" });
  }
}

module.exports = {
  createCategory,
  getAllCategory,
  getCategorbyId,
  updateCategory,
  deleteCategory,
};
