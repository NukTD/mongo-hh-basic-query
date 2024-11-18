db.pizzaOrders.findOne(
  { customer_name: "Zoe" },
  { total_price: 1, customer_name: 1, _id: 0 }
);
