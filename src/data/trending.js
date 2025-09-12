// Plats tendances et sections spéciales
export const trendingDishes = [
    {
        id: 1,
        name: "Burger Deluxe Signature",
        description: "Double beef patty avec fromage artisanal, bacon croustillant et sauce secrète",
        price: 14.99,
        originalPrice: 18.99,
        rating: 4.8,
        prepTime: 15,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=60",
        restaurantName: "Burger Palace",
        restaurantId: 1,
        category: "trending"
    },
    {
        id: 2,
        name: "Pizza Quattro Stagioni",
        description: "Pizza italienne authentique avec 4 saisons de saveurs en une seule pizza",
        price: 16.50,
        rating: 4.9,
        prepTime: 25,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60",
        restaurantName: "Pizza Heaven",
        restaurantId: 2,
        category: "trending"
    },
    {
        id: 3,
        name: "Sushi Premium Set",
        description: "Assortiment de sushi premium avec saumon, thon et anguille",
        price: 22.00,
        rating: 4.7,
        prepTime: 20,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&auto=format&fit=crop&q=60",
        restaurantName: "Sushi Express",
        restaurantId: 3,
        category: "trending"
    },
    {
        id: 4,
        name: "Ramen Signature Bowl",
        description: "Bouillon riche aux légumes frais, nouilles artisanales et porc tendre",
        price: 13.50,
        rating: 4.6,
        prepTime: 18,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&auto=format&fit=crop&q=60",
        restaurantName: "Noodle House",
        restaurantId: 6,
        category: "trending"
    }
];

export const topRatedRestaurants = [
    {
        id: 10,
        name: 'Rooftop Lounge',
        category: 'bar',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.8,
        tags: ['Premium Bar', 'Rooftop View'],
        time: '5-10',
        badge: 'TOP RATED'
    },
    {
        id: 2,
        name: 'Pizza Heaven',
        category: 'Pizza',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.7,
        tags: ['Italia', 'Pizza'],
        time: '30-45',
        badge: 'TOP RATED'
    },
    {
        id: 7,
        name: 'Coffee Corner',
        category: 'cafe',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.6,
        tags: ['Coffee', 'Pastries'],
        time: '10-15',
        badge: 'TOP RATED'
    }
];

export const newRestaurants = [
    {
        id: 8,
        name: 'Brew & Bean',
        category: 'cafe',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.4,
        tags: ['Specialty Coffee', 'Breakfast'],
        time: '15-20',
        badge: 'NOUVEAU',
        isNew: true
    },
    {
        id: 9,
        name: 'Night Owl Bar',
        category: 'bar',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.2,
        tags: ['Cocktails', 'Late Night'],
        time: '5-10',
        badge: 'NOUVEAU',
        isNew: true
    },
    {
        id: 6,
        name: 'Noodle House',
        category: 'asian',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.5,
        tags: ['Asian', 'Noodles'],
        time: '20-40',
        badge: 'NOUVEAU',
        isNew: true
    }
];

export const specialOffers = [
    {
        id: 1,
        name: "Super Deal Burger",
        description: "2 Burgers + Frites + Boisson",
        price: 19.99,
        originalPrice: 28.99,
        discount: "30%",
        rating: 4.5,
        prepTime: 20,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&auto=format&fit=crop&q=60",
        restaurantName: "Burger Palace",
        restaurantId: 1,
        validUntil: "2024-02-15"
    },
    {
        id: 2,
        name: "Pizza Familiale",
        description: "Pizza Large + Garlic Bread + 2 Boissons",
        price: 24.99,
        originalPrice: 32.99,
        discount: "25%",
        rating: 4.7,
        prepTime: 30,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60",
        restaurantName: "Pizza Heaven",
        restaurantId: 2,
        validUntil: "2024-02-20"
    },
    {
        id: 3,
        name: "Menu Sushi Découverte",
        description: "12 pièces variées + Soupe Miso + Thé",
        price: 18.99,
        originalPrice: 25.99,
        discount: "27%",
        rating: 4.6,
        prepTime: 25,
        image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&auto=format&fit=crop&q=60",
        restaurantName: "Sushi Express",
        restaurantId: 3,
        validUntil: "2024-02-18"
    }
];

export const recommendedForYou = [
    {
        id: 1,
        name: 'Burger Palace',
        category: 'Burger',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.5,
        tags: ['American', 'Burgers'],
        time: '20-35',
        reason: 'Basé sur vos précédentes commandes'
    },
    {
        id: 3,
        name: 'Sushi Express',
        category: 'Sushi',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.5,
        tags: ['Japanese', 'Sushi'],
        time: '20-35',
        reason: 'Populaire dans votre quartier'
    },
    {
        id: 5,
        name: 'Salad Bar',
        category: 'healthy',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.4,
        tags: ['Healthy', 'Salads'],
        time: '20-35',
        reason: 'Correspond à vos préférences santé'
    }
];