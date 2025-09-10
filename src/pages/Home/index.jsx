import React from 'react'
import sliderImg from '../../../src/assets/images/slider_img.avif';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Category from '../../components/layout/Category';
import Restaurant from '../Restaurant';
const categories = [
  {
      name:'Pizza',
      icone: 'pizza',
      img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDA%3D'
  },
  {
    name:'Burger',
    icone: 'burger',
    img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnVyZ2VyfGVufDB8fDB8fHww'
  },
  {
      name:'Sushi',
      icone: 'sushi',
      img:'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&amp;h=200&amp;fit=crop&amp;crop=center"'
  },
  {
    name: 'Salads',
    icone: 'salad',
    img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&amp;h=200&amp;fit=crop&amp;crop=center'
  },
  {
    name:'Desserts',
    icone: 'dessert',
    img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&amp;h=200&amp;fit=crop&amp;crop=center'
  },
  {
    name:'Mexican',
    icone: 'mexican',
    img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&amp;h=200&amp;fit=crop&amp;crop=center'
  },
  {
    name:'Indian',
    icone: 'indian',
    img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&amp;h=200&amp;fit=crop&amp;crop=center'
  },
  {
    name:'Chinese',
    icone: 'chinese',
    img:'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=300&amp;h=200&amp;fit=crop&amp;crop=center'
  },
  {
    name:'Healthy',
    icone: 'healthy',
    img:'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeXxlbnwwfHwwfHx8MA%3D%3D'
  }

];
const restaurants = [
    {
        id: 1,
        name:'Burger Palace',
        category: 'Burger',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name:'Classic Cheesburger',
                ingredients: ['Beef patty','cheddar cheese', 'lettuce','tomato','onion','pickles','special sauce'],
                price: 8.99,
                category: 'popular'
            },
            {
                name: 'Bacon Deluxe',
                ingredients: ['Beef Paty','bacon','cheddar cheese','letuce','tomato','mayo'],
                price: 10.99,
                category:'popular'
            },
            {
               name:'Veggie Burger',
               ingredients: ['Plant-based patty','lettuce','tomato','onion','pickles','vegan mayo'],
               price: 9.99,
               category:'burgers'
            },
            {
               name:'Double Trouble',
               ingredients: ['Two beef patties','double cheese','lettuce','tomato','onion','special sauce'],
               price: 12.99,
               category:'burgers'
            },
            {
               name:'Mushroom Swiss',
               ingredients: ['Beef patty','sautéed mushrooms','swiss cheese','truffle aioli'],
               price: 11.99,
               category:'burgers'
            },
            {
               name:'French Fries',
               ingredients: ['Crispy golden fries seasoned with our special salt blend.'],
               price: 3.99,
               category:'sides'
            },
            {
               name:'Onion Rings',
               ingredients: ['Crispy battered onion rings served with dipping sauce.'],
               price: 4.99,
               category:'sides'
            },
            {
               name:'Milkshake',
               ingredients: ['Creamy vanilla','chocolate','strawberry milkshake'],
               price: 5.99,
               category:'drinks'
            },
            {
               name:'soft frink',
               ingredients: ['Cola','lemon-lime','root beer'],
               price: 2.49,
               category:'drinks'
            }
        ],
        rate:4.5,
        tags: ['American','Burgers'],
        time:'20-35'
    },
    {
        id: 2,
        name: 'Pizza Heaven',
        category: 'Pizza',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name: 'Margherita',
                ingredients: ['Tomato sauce', 'Mozzarella', 'Fresh basil'],
                price: 9.99,
                category: 'pizza'
            },
            {
                name: 'Pepperoni',
                ingredients: ['Tomato sauce', 'Mozzarella', 'Pepperoni'],
                price: 11.49,
                category: 'pizza'
            },
            {
                name: 'Veggie Supreme',
                ingredients: ['Tomato sauce', 'Mozzarella', 'Bell peppers', 'Olives', 'Onions', 'Mushrooms'],
                price: 10.99,
                category: 'pizza'
            },
            {
                name: 'Garlic Bread',
                ingredients: ['Fresh bread', 'Garlic butter', 'Parsley'],
                price: 4.99,
                category: 'sides'
            },
            {
                name: 'Soft Drink',
                ingredients: ['Cola', 'Lemon-lime', 'Orange soda'],
                price: 2.49,
                category: 'drinks'
            },
            {
                name: 'Popular Combo',
                ingredients: ['Pepperoni Pizza', 'Garlic Bread', 'Soft Drink'],
                price: 16.99,
                category: 'popular'
            }
        ],
        rate: 4.7,
        tags: ['Italia','Pizza'],
        time:'30-45'

    },
    {
        id: 3,
        name: 'Sushi Express',
        category: 'Sushi',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name: 'California Roll',
                ingredients: ['Crab', 'Avocado', 'Cucumber', 'Rice', 'Seaweed'],
                price: 8.99,
                category: 'sushi'
            },
            {
                name: 'Salmon Nigiri',
                ingredients: ['Salmon', 'Rice'],
                price: 6.49,
                category: 'sushi'
            },
            {
                name: 'Miso Soup',
                ingredients: ['Miso paste', 'Tofu', 'Seaweed', 'Green onion'],
                price: 3.99,
                category: 'sides'
            },
            {
                name: 'Green Tea',
                ingredients: ['Green tea leaves', 'Water'],
                price: 2.49,
                category: 'drinks'
            }
        ],
        rate: 4.5,
        tags: ['Japanese','Sushi'],
        time:'20-35'
    },
    { 
        id: 4,
        name: 'Tacos Fiesta',
        category:'mexican',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name: 'Chicken Taco',
                ingredients: ['Chicken', 'Tortilla', 'Lettuce', 'Cheese', 'Salsa'],
                price: 4.99,
                category: 'tacos'
            },
            {
                name: 'Beef Burrito',
                ingredients: ['Beef', 'Rice', 'Beans', 'Cheese', 'Tortilla'],
                price: 7.49,
                category: 'burritos'
            },
            {
                name: 'Nachos',
                ingredients: ['Tortilla chips', 'Cheese', 'Jalapenos', 'Salsa'],
                price: 5.99,
                category: 'sides'
            },
            {
                name: 'Horchata',
                ingredients: ['Rice', 'Milk', 'Cinnamon', 'Sugar'],
                price: 2.99,
                category: 'drinks'
            }
        ],
        rate: 4.3,
        tags: ['Mexican','Tacos'],
        time:'15-30'
    },
    {
        id: 5,
        name: 'Salad Bar',
        category:'healthy',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name: 'Caesar Salad',
                ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan', 'Caesar dressing'],
                price: 7.99,
                category: 'salad'
            },
            {
                name: 'Greek Salad',
                ingredients: ['Tomato', 'Cucumber', 'Feta', 'Olives', 'Onion'],
                price: 8.49,
                category: 'salad'
            },
            {
                name: 'Quinoa Bowl',
                ingredients: ['Quinoa', 'Spinach', 'Cherry tomatoes', 'Avocado'],
                price: 9.49,
                category: 'bowls'
            },
            {
                name: 'Fresh Juice',
                ingredients: ['Orange', 'Carrot', 'Apple'],
                price: 3.99,
                category: 'drinks'
            }
        ],
        rate: 4.4,
        tags: ['Healthy','Salads'],
        time:'20-35'
    },
    {
        id: 6,
        name: 'Noodle House',
        category:'asian',
        type: 'restaurant',
        img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name: 'Chicken Ramen',
                ingredients: ['Noodles', 'Chicken broth', 'Chicken', 'Egg', 'Green onion'],
                price: 10.99,
                category: 'ramen'
            },
            {
                name: 'Vegetable Stir Fry',
                ingredients: ['Noodles', 'Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce'],
                price: 9.49,
                category: 'noodles'
            },
            {
                name: 'Spring Rolls',
                ingredients: ['Rice paper', 'Vegetables', 'Soy sauce'],
                price: 4.99,
                category: 'sides'
            },
            {
                name: 'Bubble Tea',
                ingredients: ['Tea', 'Milk', 'Tapioca pearls'],
                price: 4.49,
                category: 'drinks'
            }
        ],
        rate: 4.5,
        tags: ['Asian','Noddles'],
        time:'20-40'
    },
    {
        id: 7,
        name: 'Coffee Corner',
        category: 'cafe',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name: 'Espresso',
                ingredients: ['Premium coffee beans', 'Hot water'],
                price: 3.99,
                category: 'coffee'
            },
            {
                name: 'Cappuccino',
                ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
                price: 4.99,
                category: 'coffee'
            },
            {
                name: 'Croissant',
                ingredients: ['Butter pastry', 'Fresh baked'],
                price: 3.49,
                category: 'pastry'
            }
        ],
        rate: 4.6,
        tags: ['Coffee', 'Pastries'],
        time: '10-15'
    },
    {
        id: 8,
        name: 'Brew & Bean',
        category: 'cafe',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name: 'Cold Brew',
                ingredients: ['Cold brewed coffee', 'Ice'],
                price: 4.49,
                category: 'coffee'
            },
            {
                name: 'Avocado Toast',
                ingredients: ['Sourdough bread', 'Fresh avocado', 'Lime', 'Salt'],
                price: 8.99,
                category: 'breakfast'
            }
        ],
        rate: 4.4,
        tags: ['Specialty Coffee', 'Breakfast'],
        time: '15-20'
    },
    {
        id: 9,
        name: 'Night Owl Bar',
        category: 'bar',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name: 'Classic Mojito',
                ingredients: ['White rum', 'Mint', 'Lime', 'Sugar', 'Soda water'],
                price: 12.99,
                category: 'cocktails'
            },
            {
                name: 'Whiskey Sour',
                ingredients: ['Bourbon', 'Lemon juice', 'Sugar syrup', 'Egg white'],
                price: 14.99,
                category: 'cocktails'
            },
            {
                name: 'Nachos Supreme',
                ingredients: ['Tortilla chips', 'Cheese', 'Jalapeños', 'Guacamole'],
                price: 9.99,
                category: 'appetizers'
            }
        ],
        rate: 4.2,
        tags: ['Cocktails', 'Late Night'],
        time: '5-10'
    },
    {
        id: 10,
        name: 'Rooftop Lounge',
        category: 'bar',
        type: 'quick_bite',
        img: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        items: [
            {
                name: 'Signature Martini',
                ingredients: ['Premium gin', 'Dry vermouth', 'Olives'],
                price: 16.99,
                category: 'cocktails'
            },
            {
                name: 'Wine Selection',
                ingredients: ['Red/White wine', 'Premium selection'],
                price: 8.99,
                category: 'wine'
            }
        ],
        rate: 4.8,
        tags: ['Premium Bar', 'Rooftop View'],
        time: '5-10'
    }
];
const index = () => {
  return (
    <main className='mt-[8.125rem] flex-1'>
       <section className='mt-[20px] mb-[60px] my-8 mx-0 md:my-[3rem] md:mx-0 lg:my-16 lg:mx-0'>
            <div className='container mx-auto w-[90%]'>
            <div className='flex flex-col lg:flex-row relative'>
               {/**slider content description */}
               <div className='flex flex-1   h-auto border-transparent border-0 lg:flex-row'>
                  <div className='flex-1 h-full bg-gradient-to-r from-[#22C55E] to-[#15803D] border-0 rounded-tl-[15px] rounded-tr-[15px] text-center py-[10px] text-white flex flex-col justify-center items-center leading-normal md:text-center md:items-center md:pl-10 md:rounded-tl-[15px] md:rounded-tr-[15px] md:rounded-bl-none md:rounded-br-none md:leading-relaxed lg:text-left lg:items-start lg:rounded-tl-lg lg:rounded-bl-lg lg:rounded-tr-none '> 
                    <h3 className='text-xl lg:text-2rem mb-2 sm:mb-4'>50% OFF Your First order</h3>
                    <span className='mb-4 sm:mb-6 sm:text-base md:text-lg opacity-90 line-clamp-2 sm:line-clamp-none'>Use code: welcome50</span>
                    <button className='ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-white text-black hover:bg-gray-100 font-medium px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base'>Order Now</button> 
                  </div>
               </div>
               {/**slider content img */}
               <div className='flex-1 relative md:static md:flex-1'>
                 <img src={sliderImg} alt="slider" className='w-full h-full object-cover rounded-b-xl lg:rounded-bl-none lg:rounded-br-[15px] lg:rounded-tr-[15px]'/>
                 {/** slider opacity */}
                 <div className='absolute w-full h-full top-0 left-0 lg:mt-[70px]'>
                    <div className='w-11/12 flex justify-between mt-10 mx-auto md:mt-[120px] md:mx-auto md:mb-0 lg:w-[97%]'>
                        <button className='bg-white w-10 h-10 rounded-full text-black cursor-pointer flex items-center justify-center shadow-lg opacity-80 hover:opacity-100 hover:shadow-xl transition-all duration-300'>
                          <HiChevronLeft className="w-5 h-5" />
                        </button>
                        <button className='bg-white w-10 h-10 rounded-full text-black cursor-pointer flex items-center justify-center shadow-lg opacity-80 hover:opacity-100 hover:shadow-xl transition-all duration-300'>
                          <HiChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
               </div>
            </div>
           </div> 
       </section>
     {/**categories section */}
     <div className='container mx-auto w-[90%] my-8 md:my-12 lg:my-16'>  
        <div className="mb-6">
          <h2 className='text-xl sm:text-2xl font-bold mb-2 text-gray-800'>What are you Craving?</h2> 
          <p className="text-gray-600 text-sm sm:text-base">Discover delicious food from various cuisines</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {
            categories.map((category, index) => {
               return ( <Category 
                key={index}
                name={category.name}
                icon={category.icone}
                img={category.img}
              />)
            })
          }
        </div>
     </div>
     {/**cafes and bars section */}
     <>
     <div className='container mx-auto w-[90%]'> 
       <div className='flex flex-col my-8 mx-0 md:my-12 md:mx-0 lg:my-[4rem] lg:mx-0'>
           <div className="flex justify-between items-center mb-4 sm:mb-6">
             <h2 className='text-xl sm:text-2xl font-bold'>Quick Bites</h2>
             <button className="text-orange-500 hover:text-orange-600 font-medium text-sm sm:text-base transition-colors duration-200">
               View All
             </button>
           </div>
           <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 md:gap-4'>
            {restaurants.filter(place => place.type === 'quick_bite').slice(0, 3).map(place => 
              <Restaurant 
                key={place.id}
                img={place.img}
                name={place.name}
                rate={place.rate}
                time={place.time}
                tags={place.tags}
              />
            )}
           </div>
       </div>
     </div>
     </>

     {/**restaurants section */}
     <>
     <div className='container mx-auto w-[90%]'> 
       <div className='flex flex-col my-8 mx-0 md:my-12 md:mx-0 lg:my-[4rem] lg:mx-0'>
           <div className="flex justify-between items-center mb-4 sm:mb-6">
             <h2 className='text-xl sm:text-2xl font-bold'>Featured Restaurants</h2>
             <button className="text-orange-500 hover:text-orange-600 font-medium text-sm sm:text-base transition-colors duration-200">
               View All
             </button>
           </div>
           <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 md:gap-4'>
            {restaurants.filter(restaurant => restaurant.type === 'restaurant').slice(0, 6).map(restaurant => 
              <Restaurant 
                key={restaurant.id}
                img={restaurant.img}
                name={restaurant.name}
                rate={restaurant.rate}
                time={restaurant.time}
                tags={restaurant.tags}
              />
            )}
           </div>
       </div>
     </div>
     </>  

    </main>
  )
}

export default index
