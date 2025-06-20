const mongoose = require('mongoose');

const materiaalSchema = new mongoose.Schema({
  naam: {
    type: String,
    required: true
  },
  voorraad: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Materiaal', materiaalSchema);
