export const restaurants = [
    {
        id: 1,
        name: 'Burger Palace',
        category: 'Burger',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.5,
        tags: ['American', 'Burgers'],
        time: '20-35',
        isFavorite: false,
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
        isFavorite: false
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
        isFavorite: false
    },
    { 
        id: 4,
        name: 'Tacos Fiesta',
        category: 'mexican',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.3,
        tags: ['Mexican', 'Tacos'],
        time: '15-30',
        isFavorite: false
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
        isFavorite: false
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
        isFavorite: false
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
        isFavorite: false
    },
    {
        id: 8,
        name: 'Brew & Bean',
        category: 'cafe',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.4,
        tags: ['Specialty Coffee', 'Breakfast'],
        time: '15-20',
        isFavorite: false
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
        isFavorite: false
    },
    {
        id: 10,
        name: 'Rooftop Lounge',
        category: 'bar',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        rate: 4.8,
        tags: ['Premium Bar', 'Rooftop View'],
        time: '5-10',
        isFavorite: false
    }
];

export const getRestaurantById = (id) => {
    return restaurants.find(restaurant => restaurant.id === id);
};

export const getRestaurantsByType = (type) => {
    return restaurants.filter(restaurant => restaurant.type === type);
};

export const getRestaurantsByCategory = (category) => {
    return restaurants.filter(restaurant => restaurant.category === category);
};