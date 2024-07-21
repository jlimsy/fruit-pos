const fruitPerDay = [
  {
    $group: {
      _id: {
        $dateToString: {
          format: "%Y-%m-%d",
          date: "$createdAt",
        },
      },
      orders: {
        $push: {
          items: "$items",
          totalPrice: "$totalPrice",
        },
      },
    },
  },
  { $unwind: "$orders" },
  { $unwind: "$orders.items" },
  {
    $lookup: {
      from: "products",
      localField: "orders.items.fruit",
      foreignField: "_id",
      as: "productDetails",
    },
  },
  { $unwind: "$productDetails" },
  {
    $group: {
      _id: {
        date: "$_id",
        fruit: "$orders.items.fruit",
        productName: "$productDetails.fruit",
        productPrice: "$productDetails.price",
      },
      totalQuantity: {
        $sum: "$orders.items.quantity",
      },
      totalPrice: {
        $first: "$orders.totalPrice",
      },
    },
  },
  {
    $group: {
      _id: "$_id.date",
      totalPrice: { $sum: "$totalPrice" },
      fruitSales: {
        $push: {
          fruit: "$_id.fruit",
          productName: "$_id.productName",
          productPrice: "$_id.productPrice",
          totalQuantity: "$totalQuantity",
          totalPricePerProduct: {
            $multiply: ["$_id.productPrice", "$totalQuantity"],
          },
        },
      },
    },
  },

  {
    $sort: {
      "_id.date": 1, // Sort by date ascending
    },
  },
];

module.exports = { fruitPerDay };
