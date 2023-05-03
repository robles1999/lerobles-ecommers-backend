const express = require('express');
const routes = require('./routes');
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// The force option determines whether or not to drop and recreate
// the tables if they already exist.In this case, force: false means
// that the tables will not be dropped and recreated.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
