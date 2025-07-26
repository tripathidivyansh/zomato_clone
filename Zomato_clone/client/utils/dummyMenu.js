export const generateDummyMenu = () => {
    const allDishes = [
      // Italian Cuisine
      {
        name: "Margherita Pizza",
        description: "Classic pizza with mozzarella cheese and fresh basil",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
        cuisine: "Italian"
      },
      {
        name: "Pepperoni Pizza",
        description: "Spicy pepperoni with melted cheese",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
        cuisine: "Italian"
      },
      {
        name: "Spaghetti Carbonara",
        description: "Creamy pasta with bacon and parmesan",
        price: 16.50,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        cuisine: "Italian"
      },
      {
        name: "Lasagna",
        description: "Layered pasta with meat sauce and cheese",
        price: 18.75,
        image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=400&h=300&fit=crop",
        cuisine: "Italian"
      },
      {
        name: "Fettuccine Alfredo",
        description: "Creamy pasta with parmesan sauce",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
        cuisine: "Italian"
      },

      // Indian Cuisine
      {
        name: "Butter Chicken",
        description: "Creamy Indian butter chicken with naan",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        cuisine: "Indian"
      },
      {
        name: "Chicken Tikka Masala",
        description: "Spicy grilled chicken in creamy tomato sauce",
        price: 14.50,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        cuisine: "Indian"
      },
      {
        name: "Biryani",
        description: "Fragrant rice with tender meat and spices",
        price: 16.75,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d60a?w=400&h=300&fit=crop",
        cuisine: "Indian"
      },
      {
        name: "Paneer Tikka",
        description: "Grilled cottage cheese with Indian spices",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        cuisine: "Indian"
      },
      {
        name: "Dal Makhani",
        description: "Creamy black lentils with butter",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        cuisine: "Indian"
      },

      // Chinese Cuisine
      {
        name: "Kung Pao Chicken",
        description: "Spicy diced chicken with peanuts and vegetables",
        price: 13.50,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d60a?w=400&h=300&fit=crop",
        cuisine: "Chinese"
      },
      {
        name: "Sweet and Sour Pork",
        description: "Crispy pork in tangy sauce",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d60a?w=400&h=300&fit=crop",
        cuisine: "Chinese"
      },
      {
        name: "Fried Rice",
        description: "Wok-fried rice with vegetables and egg",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d60a?w=400&h=300&fit=crop",
        cuisine: "Chinese"
      },
      {
        name: "Chow Mein",
        description: "Stir-fried noodles with vegetables",
        price: 10.50,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d60a?w=400&h=300&fit=crop",
        cuisine: "Chinese"
      },
      {
        name: "Dim Sum",
        description: "Steamed dumplings with various fillings",
        price: 11.75,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d60a?w=400&h=300&fit=crop",
        cuisine: "Chinese"
      },

      // Japanese Cuisine
      {
        name: "Sushi Rolls",
        description: "Assorted sushi rolls with wasabi and ginger",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        cuisine: "Japanese"
      },
      {
        name: "Ramen",
        description: "Noodles in rich broth with toppings",
        price: 14.25,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        cuisine: "Japanese"
      },
      {
        name: "Tempura",
        description: "Lightly battered and fried seafood/vegetables",
        price: 16.50,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        cuisine: "Japanese"
      },
      {
        name: "Teriyaki Chicken",
        description: "Grilled chicken with sweet teriyaki sauce",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        cuisine: "Japanese"
      },
      {
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        cuisine: "Japanese"
      },

      // Mexican Cuisine
      {
        name: "Tacos",
        description: "Soft corn tortillas with meat and salsa",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        cuisine: "Mexican"
      },
      {
        name: "Burritos",
        description: "Large flour tortilla filled with rice, beans, and meat",
        price: 11.50,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
        cuisine: "Mexican"
      },
      {
        name: "Quesadillas",
        description: "Grilled tortillas with melted cheese",
        price: 10.25,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        cuisine: "Mexican"
      },
      {
        name: "Enchiladas",
        description: "Rolled tortillas with sauce and cheese",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        cuisine: "Mexican"
      },
      {
        name: "Guacamole",
        description: "Fresh avocado dip with chips",
        price: 7.50,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        cuisine: "Mexican"
      },

      // American Cuisine
      {
        name: "Cheeseburger",
        description: "Juicy beef patty with cheese and toppings",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        cuisine: "American"
      },
      {
        name: "Chicken Wings",
        description: "Crispy wings with your choice of sauce",
        price: 13.50,
        image: "https://images.unsplash.com/photo-1567620832904-9fe5cf7dbca5?w=400&h=300&fit=crop",
        cuisine: "American"
      },
      {
        name: "BBQ Ribs",
        description: "Slow-cooked ribs with barbecue sauce",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        cuisine: "American"
      },
      {
        name: "Mac and Cheese",
        description: "Creamy pasta with melted cheese",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&h=300&fit=crop",
        cuisine: "American"
      },
      {
        name: "Caesar Salad",
        description: "Fresh romaine with parmesan and croutons",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
        cuisine: "American"
      },

      // Thai Cuisine
      {
        name: "Pad Thai",
        description: "Stir-fried rice noodles with eggs and peanuts",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
        cuisine: "Thai"
      },
      {
        name: "Green Curry",
        description: "Spicy coconut curry with vegetables",
        price: 14.50,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
        cuisine: "Thai"
      },
      {
        name: "Tom Yum Soup",
        description: "Hot and sour soup with shrimp",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
        cuisine: "Thai"
      },
      {
        name: "Mango Sticky Rice",
        description: "Sweet dessert with fresh mango",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
        cuisine: "Thai"
      },
      {
        name: "Thai Iced Tea",
        description: "Sweetened tea with condensed milk",
        price: 4.50,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
        cuisine: "Thai"
      },

      // Mediterranean Cuisine
      {
        name: "Hummus",
        description: "Chickpea dip with olive oil and pita",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        cuisine: "Mediterranean"
      },
      {
        name: "Falafel",
        description: "Crispy chickpea fritters with tahini",
        price: 10.50,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        cuisine: "Mediterranean"
      },
      {
        name: "Greek Salad",
        description: "Fresh vegetables with feta and olives",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        cuisine: "Mediterranean"
      },
      {
        name: "Shawarma",
        description: "Wrapped meat with vegetables and sauce",
        price: 12.75,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        cuisine: "Mediterranean"
      },
      {
        name: "Baklava",
        description: "Sweet pastry with nuts and honey",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        cuisine: "Mediterranean"
      },

      // Korean Cuisine
      {
        name: "Bibimbap",
        description: "Mixed rice bowl with vegetables and egg",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop",
        cuisine: "Korean"
      },
      {
        name: "Kimchi",
        description: "Fermented spicy cabbage side dish",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop",
        cuisine: "Korean"
      },
      {
        name: "Bulgogi",
        description: "Marinated grilled beef",
        price: 16.50,
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop",
        cuisine: "Korean"
      },
      {
        name: "Japchae",
        description: "Stir-fried glass noodles with vegetables",
        price: 13.25,
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop",
        cuisine: "Korean"
      },
      {
        name: "Tteokbokki",
        description: "Spicy rice cakes in gochujang sauce",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop",
        cuisine: "Korean"
      }
    ];
  
    // Return 3-6 random dishes from the expanded menu
    const shuffled = allDishes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 4) + 3);
  };
  