import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quae modi, facilis consectetur deserunt eos minima impedit voluptate in dolor magni consequuntur amet, exercitationem optio placeat sed qui libero voluptas ratione perspiciatis non eaque velit possimus aspernatur. Sapiente itaque neque excepturi voluptate autem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore explicabo, incidunt aliquam quos quibusdam corrupti ipsa enim temporibus vel cumque dignissimos, minima molestiae illo possimus facere sed, provident a? Deserunt sunt impedit suscipit corrupti totam, aut, itaque quas ipsam magnam, quae asperiores officiis.</p>

        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eaque, incidunt iste odit nemo libero ab, quaerat facilis voluptatum tenetur tempora rem quos fugiat saepe soluta repellendus corporis pariatur iure dolorem? Doloremque repellendus laboriosam maxime earum. Voluptatem, at. Porro, officiis voluptates! Voluptatibus, cum.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime repudiandae cupiditate iure. Temporibus nesciunt soluta molestiae dolores deleniti nam nemo.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime repudiandae cupiditate iure. Temporibus nesciunt soluta molestiae dolores deleniti nam nemo.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime repudiandae cupiditate iure. Temporibus nesciunt soluta molestiae dolores deleniti nam nemo.</p>
        </div>

      </div>

      <NewsletterBox/>


    </div>
    
    
  )
}

export default About