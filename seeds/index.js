
const sequelize = require('../config/connection');

const seedHandyman = require('./handymanData');
const seedCustomer = require('./customerData');

const seedReview = require('./reviewData');

const seedListing = require('./listingData');
const seedTag = require('./tagData');
const seedSpecialty = require('./specialtyData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedHandyman();

  await seedCustomer();

  await seedReview();

  await seedTag();
  
  await seedSpecialty();

  await seedListing();

  process.exit(0);
};

seedAll();