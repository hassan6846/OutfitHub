[
    {
      _id: ObjectId("category_id_1"),
      name: "Men",
      SubCategory: [
        {
          name: "Shoes",
          color: "Black",
          size: "10",
          brand: "Nike"
        },
        {
          name: "Belts",
          color: "Brown",
          size: "L",
          material: "Leather"
        },
        {
          name: "T-Shirts",
          color: "Blue",
          size: "M",
          fabric: "Cotton"
        }
        ,{
            name: "T-Shirts",
            color: "Blue",
            size: "M",
            fabric: "Cotton"
        }
        // Other men's categories
      ]
    },
    {
      _id: ObjectId("category_id_2"),
      name: "Women",
      children: [
        // Women's categories and subcategories
      ]
    },
    {
      _id: ObjectId("category_id_3"),
      name: "Kids",
      children: [
        // Kids' categories and subcategories
      ]
    },
    // Other top-level categories
  ]
  