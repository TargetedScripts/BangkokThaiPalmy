/**
 * RestoSync SaaS - Store Configuration
 * Tenant: Bangkok Thai Takeaway (Palmerston North, NZ)
 */

const RESTOSYNC_CONFIG = {
  store: {
    id: "bangkokthai",
    name: "Bangkok Thai Takeaway",
    tagline: "Authentic Thai Cuisine in Palmerston North",
    phone: "06 222 3375",
    address: "287 Main Street, Palmerston North Central",
    gstNumber: "123-456-789",
    currency: "NZD",
    gstRate: 0.15,
    publicHolidaySurcharge: 0.15
  },
  
  branding: {
    logo: "assets/images/BangkokThaiLogo.png",
    altLogo: "assets/images/BTPLogo.jpg",
    heroImages: [
      "assets/images/Hero01.jpg",
      "assets/images/Hero02.jpg",
      "assets/images/Hero03.jpg"
    ]
  },

  features: {
    dailySetup: true,
    customizationAndBYO: true,
    orderTrackingBoard: true,
    digitalMenuAndWebsite: true,
    eodZReport: true,
    multiDevicePOS: true,
    staffRoster: false,
    recipeCosting: false,
    tableFloorPlan: false,
    hotelRoomCharge: false,
    mpiFoodSafety: true
  },

  menuItems: [
    // APPETISERS
    { id: "A1", name: "Spring Rolls", category: "Appetisers", price: 8.00, description: "Vegetables in spring roll wrappers, deep fried and served with sweet chilli sauce.", image: "assets/images/menu/springrolls.jpg", spiceLevel: 0, isFav: true, stock: 50 },
    { id: "A2", name: "6pcs Wontons", category: "Appetisers", price: 8.00, description: "Minced Chicken stuffed in crispy wonton skin, deep fried served with sweet chilli sauce.", image: "assets/images/menu/wontons.jpg", spiceLevel: 0, isFav: false, stock: 40 },
    { id: "A3", name: "3pcs Chicken Satays", category: "Appetisers", price: 9.00, description: "Skewers of chicken marinated with Thai spices, grilled and served with peanut sauce.", image: "assets/images/menu/chickensatays.jpg", spiceLevel: 0, isFav: true, stock: 40 },
    { id: "A4", name: "Steamed Prawn Wonton", category: "Appetisers", price: 10.00, description: "Minced prawn with herbs wrapped in wonton skin steamed and served with sauce.", image: "assets/images/menu/steamedprawnwonton.jpg", spiceLevel: 0, isFav: false, stock: 30 },
    { id: "A5", name: "Deep fried shrimps on toast", category: "Appetisers", price: 10.00, description: "Deep fried minced shrimp spread on toast served with sweet chilli sauce.", image: "assets/images/menu/deepfriedshrimpsontoast.jpg", spiceLevel: 0, isFav: false, stock: 25 },
    { id: "A6", name: "Roti & Satay Sauce", category: "Appetisers", price: 8.00, description: "Roti bread served with Bangkok Thai peanut satay sauce", image: "assets/images/menu/rotiandsataysauce.jpg", spiceLevel: 0, isFav: false, stock: 50 },
    { id: "A7", name: "8pcs Mixed Entrees", category: "Appetisers", price: 15.00, description: "Mixed selection of Curry Puffs, Spring Rolls, Wontons and Chicken Satays ...", image: "assets/images/menu/mixedentrees.jpg", spiceLevel: 0, isFav: true, stock: 35 },

    // SOUP
    { id: "B4", name: "Tom Kha Chicken", category: "Soup", price: 18.00, description: "Chicken in coconut milk soup flavoured with lemon grass, galangal, kafir lime ...", image: "assets/images/menu/tomkhachicken.jpg", spiceLevel: 1, isFav: false, stock: 30 },
    { id: "B5", name: "Tom Yum Prawns", category: "Soup", price: 22.00, description: "Spicy prawns soup flavoured with lemon grass, galangal, kafir lime leave, ...", image: "assets/images/menu/tomyumprawns.jpg", spiceLevel: 2, isFav: true, stock: 25 },
    { id: "B8", name: "Tom Kha Prawn", category: "Soup", price: 22.00, description: "Seafood in coconut milk soup flavoured with lemon grass, galangal, kafir lime ...", image: "assets/images/menu/tomkhaprawn.jpg", spiceLevel: 1, isFav: false, stock: 25 },
    { id: "B9", name: "Tom Yum Chicken", category: "Soup", price: 18.00, description: "Light and spicy soup flavoured with lemon grass, galangal, kafir lime leave, ...", image: "assets/images/menu/tomyumchicken.jpg", spiceLevel: 2, isFav: true, stock: 30 },

    // CURRY - SALAD
    { id: "D1", name: "Red Curry Roast Duck", category: "Curry - Salad", price: 19.00, description: "Roast duck cooked with pineapple, tomato, bamboo shoots and fresh ...", image: "assets/images/menu/redcurryroastduck.jpg", spiceLevel: 2, isFav: true, stock: 20 },
    { id: "D2", name: "Green Curry", category: "Curry - Salad", price: 18.00, description: "Green Curry with your choice of meat or vegetarian option in coconut milk ...", image: "assets/images/menu/greencurry.jpg", spiceLevel: 2, isFav: false, stock: 30 },
    { id: "D3", name: "Beef Massaman Curry", category: "Curry - Salad", price: 18.00, description: "Curry with stewed beef, potatoes, and coconut milk flavoured with palm suga...", image: "assets/images/menu/beefmassamancurry.jpg", spiceLevel: 1, isFav: true, stock: 25 },
    { id: "D4", name: "Red Curry", category: "Curry - Salad", price: 18.00, description: "Thai red curry with coconut milk, bamboo shoots and fresh vegetables ...", image: "assets/images/menu/redcurry.jpg", spiceLevel: 2, isFav: false, stock: 30 },
    { id: "D5", name: "Panang Curry", category: "Curry - Salad", price: 18.00, description: "Panang Curry with your choice of meat or vegetarian options.", image: "assets/images/menu/panangcurry.jpg", spiceLevel: 2, isFav: true, stock: 25 },
    { id: "G6", name: "LARB CHICKEN", category: "Curry - Salad", price: 18.00, description: "Spicy minced chicken salad with Thai herbs, ground roasted rice, and lime dressing.", image: "", spiceLevel: 2, isFav: false, stock: 20 },

    // WOK DISHES
    { id: "C1-C", name: "Sweet & Sour Chicken", category: "Wok Dishes", price: 18.00, description: "Stir fried chicken with Bangkok Thai sweet and sour sauce and vegetables.", image: "assets/images/menu/sweetandsourchicken.jpg", spiceLevel: 0, isFav: false, stock: 30 },
    { id: "C1-P", name: "Sweet & Sour Pork", category: "Wok Dishes", price: 18.00, description: "Stir fried pork with Bangkok Thai sweet and sour sauce and vegetables.", image: "assets/images/menu/sweetandsourpork.jpg", spiceLevel: 0, isFav: false, stock: 30 },
    { id: "C2-P", name: "Pork Garlic & Pepper", category: "Wok Dishes", price: 18.00, description: "Stir fried pork with garlic and pepper served with steamed vegetables. ...", image: "assets/images/menu/porkgarlicandpepper.jpg", spiceLevel: 0, isFav: false, stock: 30 },
    { id: "C2-C", name: "Chicken Garlic & Pepper", category: "Wok Dishes", price: 18.00, description: "Stir fried chicken with garlic and pepper served with steamed vegetables. ...", image: "assets/images/menu/chickengarlicandpepper.jpg", spiceLevel: 0, isFav: false, stock: 35 },
    { id: "C3-C", name: "Stir Fried Satay Sauce", category: "Wok Dishes", price: 18.00, description: "Our special peanut satay sauce with chicken and fresh vegetables stir fried.", image: "assets/images/menu/stirfriedsataysauce.jpg", spiceLevel: 0, isFav: true, stock: 35 },
    { id: "C4", name: "Beef With Oyster Sauce", category: "Wok Dishes", price: 18.00, description: "Stir fried beef with oyster sauce and fresh vegetables.", image: "assets/images/menu/beefwithoystersauce.jpg", spiceLevel: 0, isFav: true, stock: 30 },
    { id: "C6", name: "Chicken & Cashew Nuts", category: "Wok Dishes", price: 18.00, description: "Stir fried chicken with oyster sauce, mushroom, vegetables and cashew nu...", image: "assets/images/menu/chickenandcashewnuts.jpg", spiceLevel: 1, isFav: true, stock: 40 },
    { id: "C7", name: "Stir Fried Sweet Basil Chicken", category: "Wok Dishes", price: 18.00, description: "Stir fried sweet basil, garlic and chilli with choice of meat (or vegetarian ...", image: "assets/images/menu/stirfriedsweetbasilchicken.jpg", spiceLevel: 2, isFav: true, stock: 30 },

    // NOODLES & RICE
    { id: "H1", name: "Chicken Pad Thai", category: "Noodles & Rice", price: 18.00, description: "Rice noodle stir fried with Bangkok Thai pad thai sauce, bean sprout, chives an...", image: "assets/images/menu/chickenpadthai.jpg", spiceLevel: 0, isFav: true, stock: 45 },
    { id: "H1PR", name: "Prawn Padthai", category: "Noodles & Rice", price: 22.00, description: "Rice noodle stir fried with Bangkok Thai pad thai sauce, king prawns, bean sprout, and chives.", image: "assets/images/menu/prawnpadthai.jpg", spiceLevel: 0, isFav: true, stock: 30 },
    { id: "H3", name: "Chicken Fried Rice", category: "Noodles & Rice", price: 18.00, description: "Fried rice with chicken, beef pork, egg and vegetables.", image: "assets/images/menu/chickenfriedrice.jpg", spiceLevel: 0, isFav: false, stock: 40 },
    { id: "H2c", name: "Spicy Drunken Noodle CHICKEN", category: "Noodles & Rice", price: 18.00, description: "Rice noodle stir fried with garlic & basil paste, egg and vegetables.", image: "assets/images/menu/spicydrunkennoodlechicken.jpg", spiceLevel: 3, isFav: true, stock: 30 },
    { id: "N01", name: "Large Steamed Jasmin Rice", category: "Noodles & Rice", price: 3.00, description: "Steamed fragrant jasmine rice (large portion).", image: "", spiceLevel: 0, isFav: false, stock: 100 },
    { id: "N02", name: "Coconut Rice", category: "Noodles & Rice", price: 5.00, description: "Aromatic jasmine rice cooked with sweet coconut milk.", image: "", spiceLevel: 0, isFav: false, stock: 80 },
    { id: "N03", name: "Small Rice", category: "Noodles & Rice", price: 2.00, description: "Steamed fragrant jasmine rice (small portion).", image: "", spiceLevel: 0, isFav: false, stock: 100 },
    { id: "R3", name: "Roti 0", category: "Noodles & Rice", price: 5.00, description: "Plain toasted Thai roti bread.", image: "", spiceLevel: 0, isFav: false, stock: 60 },

    // ADD ON (EXTRA SAUCE, MEAT ETC)
    { id: "X01", name: "Extra Chicken", category: "Add On (extra Sauce, Meat Etc)", price: 3.00, description: "Additional portion of chicken.", image: "", spiceLevel: 0, isFav: false, stock: 100 },
    { id: "X02", name: "Extra Pork", category: "Add On (extra Sauce, Meat Etc)", price: 3.00, description: "Additional portion of pork.", image: "", spiceLevel: 0, isFav: false, stock: 100 },
    { id: "X03", name: "Extra Beef", category: "Add On (extra Sauce, Meat Etc)", price: 3.00, description: "Additional portion of beef.", image: "", spiceLevel: 0, isFav: false, stock: 100 },
    { id: "X04", name: "Extra Prawns", category: "Add On (extra Sauce, Meat Etc)", price: 5.00, description: "Additional portion of prawns.", image: "", spiceLevel: 0, isFav: false, stock: 100 },
    { id: "X05", name: "Extra Satay Sauce", category: "Add On (extra Sauce, Meat Etc)", price: 2.00, description: "Extra side of peanut satay sauce.", image: "", spiceLevel: 0, isFav: false, stock: 100 },
    { id: "X06", name: "Extra Cashew Nuts", category: "Add On (extra Sauce, Meat Etc)", price: 2.00, description: "Extra side of roasted cashew nuts.", image: "", spiceLevel: 0, isFav: false, stock: 100 }
  ]
};