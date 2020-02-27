const Transaction = require('../models/Transaction');

/**
 * @route   GET /api/v1/transactions
 * @desc    Get All Transactions
 * @access  Public
 */
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};

/**
 * @route   POST /api/v1/transactions
 * @desc    Add New Transaction
 * @access  Public
 */
exports.addTransaction = async (req, res) => {
  try {
    const { description, amount } = req.body;

    const transaction = await Transaction.create({
      description, amount,
    });

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors)
        .map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};

/**
 * @route   DELETE /api/v1/transactions/:id
 * @desc    Delete Single Transaction
 * @access  Public
 */
exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: `No Transactions Found with ID ${id}`,
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: `Successfully Deleted Transaction ${id}`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};
