const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: [true, 'Please enter a description for your transaction'],
  },
  amount: {
    type: Number,
    required: [true, 'Please enter a positive or negative number'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Transaction', TransactionSchema);
