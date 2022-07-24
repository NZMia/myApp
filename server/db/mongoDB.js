const mongoose = require('mongoose');
const { MONGO_URI, MONGO_URL_PRODUCTION } = process.env;

exports.connect = () => {
    mongoose
    .connect(MONGO_URL_PRODUCTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}
