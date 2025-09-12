export const items = [
    // Burger Palace items
    {
        id: 1,
        restaurantId: 1,
        name: 'Classic Cheeseburger',
        ingredients: ['Beef patty', 'cheddar cheese', 'lettuce', 'tomato', 'onion', 'pickles', 'special sauce'],
        price: 8.99,
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 2,
        restaurantId: 1,
        name: 'Bacon Deluxe',
        ingredients: ['Beef Patty', 'bacon', 'cheddar cheese', 'lettuce', 'tomato', 'mayo'],
        price: 10.99,
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 3,
        restaurantId: 1,
        name: 'Veggie Burger',
        ingredients: ['Plant-based patty', 'lettuce', 'tomato', 'onion', 'pickles', 'vegan mayo'],
        price: 9.99,
        category: 'burgers',
        image: 'https://images.unsplash.com/photo-1525059696034-4967a729002e?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 4,
        restaurantId: 1,
        name: 'Double Trouble',
        ingredients: ['Two beef patties', 'double cheese', 'lettuce', 'tomato', 'onion', 'special sauce'],
        price: 12.99,
        category: 'burgers',
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 5,
        restaurantId: 1,
        name: 'Mushroom Swiss',
        ingredients: ['Beef patty', 'sautéed mushrooms', 'swiss cheese', 'truffle aioli'],
        price: 11.99,
        category: 'burgers',
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 6,
        restaurantId: 1,
        name: 'French Fries',
        ingredients: ['Crispy golden fries seasoned with our special salt blend.'],
        price: 3.99,
        category: 'sides',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 7,
        restaurantId: 1,
        name: 'Onion Rings',
        ingredients: ['Crispy battered onion rings served with dipping sauce.'],
        price: 4.99,
        category: 'sides',
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 8,
        restaurantId: 1,
        name: 'Milkshake',
        ingredients: ['Creamy vanilla', 'chocolate', 'strawberry milkshake'],
        price: 5.99,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 9,
        restaurantId: 1,
        name: 'Soft Drink',
        ingredients: ['Cola', 'lemon-lime', 'root beer'],
        price: 2.49,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&auto=format&fit=crop&q=60'
    },

    // Pizza Heaven items
    {
        id: 10,
        restaurantId: 2,
        name: 'Margherita',
        ingredients: ['Tomato sauce', 'Mozzarella', 'Fresh basil'],
        price: 9.99,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 11,
        restaurantId: 2,
        name: 'Pepperoni',
        ingredients: ['Tomato sauce', 'Mozzarella', 'Pepperoni'],
        price: 11.49,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 12,
        restaurantId: 2,
        name: 'Veggie Supreme',
        ingredients: ['Tomato sauce', 'Mozzarella', 'Bell peppers', 'Olives', 'Onions', 'Mushrooms'],
        price: 10.99,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 13,
        restaurantId: 2,
        name: 'Garlic Bread',
        ingredients: ['Fresh bread', 'Garlic butter', 'Parsley'],
        price: 4.99,
        category: 'sides',
        image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 14,
        restaurantId: 2,
        name: 'Soft Drink',
        ingredients: ['Cola', 'Lemon-lime', 'Orange soda'],
        price: 2.49,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 15,
        restaurantId: 2,
        name: 'Popular Combo',
        ingredients: ['Pepperoni Pizza', 'Garlic Bread', 'Soft Drink'],
        price: 16.99,
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60'
    },

    // Sushi Express items
    {
        id: 16,
        restaurantId: 3,
        name: 'California Roll',
        ingredients: ['Crab', 'Avocado', 'Cucumber', 'Rice', 'Seaweed'],
        price: 8.99,
        category: 'sushi',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 17,
        restaurantId: 3,
        name: 'Salmon Nigiri',
        ingredients: ['Salmon', 'Rice'],
        price: 6.49,
        category: 'sushi',
        image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 18,
        restaurantId: 3,
        name: 'Miso Soup',
        ingredients: ['Miso paste', 'Tofu', 'Seaweed', 'Green onion'],
        price: 3.99,
        category: 'sides',
        image: 'https://images.unsplash.com/photo-1588566565463-180a5ba2090e?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 19,
        restaurantId: 3,
        name: 'Green Tea',
        ingredients: ['Green tea leaves', 'Water'],
        price: 2.49,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=60'
    },

    // Tacos Fiesta items
    {
        id: 20,
        restaurantId: 4,
        name: 'Chicken Taco',
        ingredients: ['Chicken', 'Tortilla', 'Lettuce', 'Cheese', 'Salsa'],
        price: 4.99,
        category: 'tacos',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 21,
        restaurantId: 4,
        name: 'Beef Burrito',
        ingredients: ['Beef', 'Rice', 'Beans', 'Cheese', 'Tortilla'],
        price: 7.49,
        category: 'burritos',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 22,
        restaurantId: 4,
        name: 'Nachos',
        ingredients: ['Tortilla chips', 'Cheese', 'Jalapenos', 'Salsa'],
        price: 5.99,
        category: 'sides',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 23,
        restaurantId: 4,
        name: 'Horchata',
        ingredients: ['Rice', 'Milk', 'Cinnamon', 'Sugar'],
        price: 2.99,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&auto=format&fit=crop&q=60'
    },

    // Salad Bar items
    {
        id: 24,
        restaurantId: 5,
        name: 'Caesar Salad',
        ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan', 'Caesar dressing'],
        price: 7.99,
        category: 'salad',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 25,
        restaurantId: 5,
        name: 'Greek Salad',
        ingredients: ['Tomato', 'Cucumber', 'Feta', 'Olives', 'Onion'],
        price: 8.49,
        category: 'salad',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 26,
        restaurantId: 5,
        name: 'Quinoa Bowl',
        ingredients: ['Quinoa', 'Spinach', 'Cherry tomatoes', 'Avocado'],
        price: 9.49,
        category: 'bowls',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 27,
        restaurantId: 5,
        name: 'Fresh Juice',
        ingredients: ['Orange', 'Carrot', 'Apple'],
        price: 3.99,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&auto=format&fit=crop&q=60'
    },

    // Noodle House items
    {
        id: 28,
        restaurantId: 6,
        name: 'Chicken Ramen',
        ingredients: ['Noodles', 'Chicken broth', 'Chicken', 'Egg', 'Green onion'],
        price: 10.99,
        category: 'ramen',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 29,
        restaurantId: 6,
        name: 'Vegetable Stir Fry',
        ingredients: ['Noodles', 'Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce'],
        price: 9.49,
        category: 'noodles',
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 30,
        restaurantId: 6,
        name: 'Spring Rolls',
        ingredients: ['Rice paper', 'Vegetables', 'Soy sauce'],
        price: 4.99,
        category: 'sides',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 31,
        restaurantId: 6,
        name: 'Bubble Tea',
        ingredients: ['Tea', 'Milk', 'Tapioca pearls'],
        price: 4.49,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1602524206874-8ba0624cb313?w=400&auto=format&fit=crop&q=60'
    },

    // Coffee Corner items
    {
        id: 32,
        restaurantId: 7,
        name: 'Espresso',
        ingredients: ['Premium coffee beans', 'Hot water'],
        price: 3.99,
        category: 'coffee',
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 33,
        restaurantId: 7,
        name: 'Cappuccino',
        ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
        price: 4.99,
        category: 'coffee',
        image: 'https://images.unsplash.com/photo-1572286258217-d596874fb269?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 34,
        restaurantId: 7,
        name: 'Croissant',
        ingredients: ['Butter pastry', 'Fresh baked'],
        price: 3.49,
        category: 'pastry',
        image: 'https://images.unsplash.com/photo-1555507036-ab794f27364d?w=400&auto=format&fit=crop&q=60'
    },

    // Brew & Bean items
    {
        id: 35,
        restaurantId: 8,
        name: 'Cold Brew',
        ingredients: ['Cold brewed coffee', 'Ice'],
        price: 4.49,
        category: 'coffee',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 36,
        restaurantId: 8,
        name: 'Avocado Toast',
        ingredients: ['Sourdough bread', 'Fresh avocado', 'Lime', 'Salt'],
        price: 8.99,
        category: 'breakfast',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&auto=format&fit=crop&q=60'
    },

    // Night Owl Bar items
    {
        id: 37,
        restaurantId: 9,
        name: 'Classic Mojito',
        ingredients: ['White rum', 'Mint', 'Lime', 'Sugar', 'Soda water'],
        price: 12.99,
        category: 'cocktails',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 38,
        restaurantId: 9,
        name: 'Whiskey Sour',
        ingredients: ['Bourbon', 'Lemon juice', 'Sugar syrup', 'Egg white'],
        price: 14.99,
        category: 'cocktails',
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 39,
        restaurantId: 9,
        name: 'Nachos Supreme',
        ingredients: ['Tortilla chips', 'Cheese', 'Jalapeños', 'Guacamole'],
        price: 9.99,
        category: 'appetizers',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&auto=format&fit=crop&q=60'
    },

    // Rooftop Lounge items
    {
        id: 40,
        restaurantId: 10,
        name: 'Signature Martini',
        ingredients: ['Premium gin', 'Dry vermouth', 'Olives'],
        price: 16.99,
        category: 'cocktails',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&auto=format&fit=crop&q=60'
    },
    {
        id: 41,
        restaurantId: 10,
        name: 'Wine Selection',
        ingredients: ['Red/White wine', 'Premium selection'],
        price: 8.99,
        category: 'wine',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&auto=format&fit=crop&q=60'
    }
];

export const getItemsByRestaurantId = (restaurantId) => {
    return items.filter(item => item.restaurantId === restaurantId);
};

export const getItemsByCategory = (category) => {
    return items.filter(item => item.category === category);
};

export const getItemById = (id) => {
    return items.find(item => item.id === id);
};