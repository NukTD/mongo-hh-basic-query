db.pizzaOrders.updateMany(
  { customer_name: "Jack" }, // เงื่อนไขการค้นหา
  { $set: { isAdmin: false } } // เพิ่มหรืออัปเดต key-value pair
);

db.pizzaOrders.updateMany(
  {}, // ไม่มีเงื่อนไข (อัปเดตทุก Document)
  { $set: { country: "Thailand" } } // เพิ่มหรืออัปเดต key-value pair
);

db.pizzaOrders.updateOne(
  { customer_name: "M" }, // เงื่อนไขการค้นหา
  {
    $set: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: "2022-01-01T10:48:40Z",
    },
  },
  { upsert: true } // ใช้ upsert เพื่อสร้าง Document ใหม่ถ้าไม่มี Document ตรงกับเงื่อนไข
);
