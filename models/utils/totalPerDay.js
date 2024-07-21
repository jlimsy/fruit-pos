const totalPerDay = [
  {
    $unwind: "$items", // Include the $unwind stage
  },
  {
    $group: {
      _id: {
        date: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$createdAt",
          },
        },
      },
      totalPricePerDay: {
        $sum: "$totalPrice",
      },
      quantityProductsPerDay: {
        $sum: "$items.quantity",
      },
    },
  },
  {
    $sort: {
      "_id.date": 1, // Sort by date ascending
    },
  },
];

module.exports = { totalPerDay };
