const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (error) {
    console.log(`Error Connecting to DB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;
