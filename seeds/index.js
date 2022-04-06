const sequelize = require('../config/connection');
const seedHandyman = require('./handymanData');
const seedCustomer = require('./customerData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedHandyman();

  await seedCustomer();

  process.exit(0);
};

seedAll();