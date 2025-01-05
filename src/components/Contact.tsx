import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up"> Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                Drop me a line, give me call, or send me a message by submitting the forme.
            </p>
            <div className='flex gap-3 items-start' data-aos="zoom-in-up">
                <AiOutlineMail size={30}/> hamzaakram442266@gmail.com
            </div>
            <div className='flex gap-3 items-start' data-aos="zoom-in-up">
            <BsTelephone size={30}/> 031689516689
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-none cursor-text text-black border border-green-600'
                id='name' />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text"
                className='h-[40px] bg-none cursor-text text-black border border-green-600'
                id='email' />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="message">Message</label>
                <textarea
                className='bg-none cursor-text text-black border border-green-600'
                id='message' rows={8} cols={2} >
                </textarea>
            </div>
            <button className='bg-green-700 p-2 px-6 hover:bg-green-600' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
