import React from 'react'
import sliderImg from '../../../src/assets/images/slider_img.avif';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
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
    </main>
  )
}

export default index
