const Order = require("../../models/OrderModel");

const GetAllOrders = async (req, res, next) => {
  try {
    // Extract the `orderState` from query params and convert it to boolean
    const { orderState } = req.query;
    let filter = {};

    // Check if orderState is provided in the query and convert it to boolean
    if (orderState !== undefined) {
      filter.orderState = orderState === "true"; // Convert string "true"/"false" to boolean
    }

    // Fetch orders from the database based on the filter
    const orders = await Order.find(filter);

    // Return the fetched orders
    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "🖕 Stop Fukin with da server dmbasss",
      log: error.message,
    });
    console.log(error.message);
  }
};

module.exports = GetAllOrders;
