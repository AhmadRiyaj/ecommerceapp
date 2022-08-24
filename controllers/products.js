const { Products, Sequelize } = require("../models");

async function createnewProducts(req, res) {
  data = req.body;
  if (!data.name || !data.quantity || !data.cost || !data.CategoryId) {
    res
      .status(400)
      .send({ message: "Name ,Quantity and Cost must be provided." });
  }
  const name = data.name;
  const quantity = data.quantity;
  const cost = data.cost;
  const description = data.description;
  const CategoryId = data.CategoryId;
  try {
    // res.status(200).send({ message: name, quantity: quantity, cost: cost });
    const result = await Products.create({
      name,
      cost,
      description,
      quantity,
      CategoryId,
    });

    res.status(200).send({ message: "Product Created", result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server Error" });
  }
}

async function getAllProducts(req, res) {
  try {
    const result = await Products.findAll();
    console.log(result);
    res.status(200).send({ message: " Found", result });
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: "Server Error" });
  }
}

async function getProductbyId(req, res) {
  try {
    id = req.params.id;

    const result = await Products.findOne({
      where: { id: id },
    });

    console.log(result);
    res.status(200).send({ message: " Record Found", result });
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
}

async function updateProduct(req, res) {
  id = req.params.id;
  try {
    const result = await Products.findOne({ where: { id: id } });
    if (result) {
      result.name = req.body.name;
      result.description = req.body.description;
      result.cost = req.body.cost;
      result.quantity = req.body.quant;
      result.CategoryId = req.body.CategoryId;
      result.save();
      res.status(200).send({ message: "Product Updated Successfully", result });
    }
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
}

async function deleteProduct(req, res) {
  const productId = req.params.id;
  try {
    await Products.destroy({
      where: { id: productId },
    });

    res.send({ msg: "product delete successfully" });
  } catch (err) {
    res.status(500).send({ msg: "Internal server error", err });
  }
}

// async function filterbaseProducts(req, res) {
//   const name = req.query.name;
//   const CategoryId = req.query.CategoryId;
//   const mincost = req.query.cost;
//   const maxcost = req.query.cost;

//   if (name) {
//     const result = await Products.findAll({
//       where: { name: name },
//     });
//     res.status(200).send({ name, result });
//   }
//   if (CategoryId) {
//     const result = await Products.findAll({
//       where: { CategoryId: CategoryId },
//     });
//     res.status(200).send({ CategoryId, result });
//   }
//   if (mincost && maxcost) {
//     const result = await Products.findAll({
//       where: {
//         cost: { [Sequelize.Op.gte]: mincost, [Sequelize.Op.lte]: maxcost },
//       },
//     });
//     res.status(200).send({ mincost, maxcost, result });
//   } else if (mincost) {
//     const result = await Products.findAll({
//       where: {
//         cost: {
//           [Sequelize.Op.gte]: mincost,
//         },
//       },
//     });
//     res.status(200).send({ mincost, result });
//   } else if (maxcost) {
//     const result = await Products.findAll({
//       where: {
//         cost: {
//           [Sequelize.Op.lte]: maxcost,
//         },
//       },
//     });
//     res.status(200).send({ maxcost, result });
//   } else {
//     const result = await Products.findAll();
//     res.status(200).send({ message: "else part running", result });
//   }
// }

async function filterbaseProducts(req, res) {
  const CategoryId = req.query.CategoryId; // ?CategoryId=3
  const name = req.query.name; // ?name=
  const minCost = req.query.minCost; // ?minCost=450
  const maxCost = req.query.maxCost; // ?maxCost=350
  console.log("Request ", req.query);
  // res.send(req.query.name);
  if (CategoryId) {
    const result = await Products.findAll({
      where: {
        CategoryId: CategoryId,
      },
    });
    console.log(CategoryId);
    res.send(CategoryId);
  }
  if (name) {
    const result = await Products.findAll({
      where: {
        name: name,
      },
    });
    console.log(name);
    res.send(name);
  }
  if (minCost && maxCost) {
    const result = await Products.findAll({
      where: {
        cost: {
          [Sequelize.Op.gte]: minCost,
          [Sequelize.Op.lte]: maxCost,
        },
      },
    });

    res.send(minCost, maxCost);
  } else if (minCost) {
    const result = await Products.findAll({
      where: {
        cost: {
          [Sequelize.Op.gte]: minCost,
        },
      },
    });

    res.send(minCost);
  } else if (maxCost) {
    const result = await Products.findAll({
      where: {
        cost: {
          [Sequelize.Op.lte]: maxCost,
        },
      },
    });

    res.send(maxCost);
  } else {
    const result = await Products.findAll();
    res.send(result);
  }
}

module.exports = {
  createnewProducts,
  getAllProducts,
  getProductbyId,
  deleteProduct,
  updateProduct,
  filterbaseProducts,
};
