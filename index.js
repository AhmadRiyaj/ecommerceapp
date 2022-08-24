const { serverport } = require("./config/config.server");

const { sequelize, Categories, Products, Roles } = require("./models");

require("dotenv").config();

const express = require("express");
const { CategoryRoute, productsroute, authRoute } = require("./routes");

const app = express();

app.use(express.json());
app.use(authRoute);
app.use(CategoryRoute);
app.use(productsroute);

app.listen(serverport, async () => {
  console.log("Server is running", serverport);
  await init();
});

async function init() {
  try {
    await sequelize.sync();
    const defaultCategories = [
      {
        name: "Beauty",
        description: "Beauty Category",
      },
      {
        name: "Electronics",
        description: "Electronics Category",
      },
      {
        name: "Clothes",
        description: "Clothes Category",
      },
    ];
    const categoriesresult = Categories.bulkCreate(defaultCategories);
    console.log(categoriesresult);

    defaultProducts = [
      {
        name: "Make Up Kit",
        cost: 15000,
        description: "Nyka Make Up Kit",
        quantity: 3,
        CategoryId: 1,
      },
      {
        name: "Tv",
        cost: 5000,
        description: "Smart Tv",
        quantity: 2,
        CategoryId: 2,
      },
      {
        name: "Shirt",
        cost: 5000,
        description: "Woolen Shirt",
        quantity: 2,
        CategoryId: 3,
      },
    ];
    const productresult = Products.bulkCreate(defaultProducts);
    console.log(productresult);
    defaultRole = [
      {
        name: "Admin",
      },
      {
        name: "User",
      },
    ];

    const RoleResult = Roles.bulkCreate(defaultRole);
    console.log(RoleResult);
  } catch (error) {
    console.log(error);
  }
}
