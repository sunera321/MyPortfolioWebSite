import React from 'react'
import { motion } from 'framer-motion'
import { useState ,useRef } from 'react'
import {slideIn } from '../../Utils/motion'
import { styles } from '../../styles'
import emailjs from '@emailjs/browser'
  

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    console.log(form)
    e.preventDefault()
    setLoading(true)
    emailjs.send('service_5ud1x9k', 'template_lfm6c7o',
      {
        form_name: form.name,
        to_name: 'sunera',
        from_email: form.email,
        to_email:'konara2021@gmail.com',
        message: form.message

      },
      'Cm-wskcFviAte0vjL'
    )
    .then(()=>{
      setLoading(false);
      alert("Thank you for your message. We will get back to you soon.")

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }),
    (error) => {
      setLoading(false);
      alert("Sorry, something went wrong")
  }
}
  
  return (
    <section id='contact'>
    <div className='flex justify-center mt-16 mb-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2,1)} className='flex-[0.75] rounded-2xl bg-black-100 p-8'>
        <p className={styles.heroSubText}>Get in touch</p>
        <h5 className={styles.heroHeadText}>Contact</h5>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 mt-10'
        >
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='px-6 py-4 rounded-lg outline-none placeholder:text-secondary bg-tertiary '
              placeholder='Enter your name'
            />
            </label>
            <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='px-6 py-4 rounded-lg outline-none placeholder:text-secondary bg-tertiary '
              placeholder='Enter your email'
            />
            </label>
            <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Manage</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              className='px-6 py-4 rounded-lg outline-none placeholder:text-secondary bg-tertiary '
              placeholder='Enter your message'
            />
            </label>

            <button
              type='submit'
              className='px-8 py-3 font-bold text-white rounded-lg bg-tertiary w-[20%]'
              >
                {loading ? 'sending...' : 'Send '}
              </button>

        </form>
      </motion.div>
        
    </div>
    </section>
  )
}

export default Contact