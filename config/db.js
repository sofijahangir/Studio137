const mongoose = require('mongoose');

const mongoConnect = async () => {
  const connection = await mongoose.connect(
    'mongodb+srv://jahangir:j@cluster0.8ttcw3p.mongodb.net/?retryWrites=true&w=majority',
    {},
  );
  console.log('Connected to Studio-137 Database.');
};

module.exports = mongoConnect;
