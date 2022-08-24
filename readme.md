npm init
npm install express,mysql2,sequelize,body-parser --save
npm install dotenv
npm install sequelize-cli
npx sequelize init

npx sequelize db:create

npx sequelize model:generate --name Categories --attributes name:text,description:text

get,put,delete api created for categories

npx sequelize model:generate --name Products --attributes name:text,cost:integer,description:text,cost:integer

get,put,delete api created for Products

npx sequelize model:generate --name User --attributes username:text,email:text,password:text
npx sequelize model:generate --name Role --attributes name:text

npm i bcrypt

npm i --save-dev jest change script to jest for testing
