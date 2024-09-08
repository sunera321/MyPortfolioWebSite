import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '../../Utils/motion'
import { styles } from '../../styles'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(); // Reference to the form
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  }); // State to store form input values
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Get field name and value
    setForm({ ...form, [name]: value }); // Update form state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    // Send email using EmailJS
    emailjs.send(
      'service_5ud1x9k',         // Your EmailJS service ID
      'template_lfm6c7o',        // Your EmailJS template ID
      {
        form_name: form.name,     // Sender's name from form
        to_name: 'Sunera',        // Your name
        from_email: form.email,   // Sender's email from form
        to_email: 'konara2021@gmail.com', // Your email
        message: form.message     // Message content from form
      },
      'Cm-wskcFviAte0vjL'         // Your EmailJS user public key
    )
    .then(() => {
      setLoading(false); // Stop loading
      alert('Thank you for your message. We will get back to you soon.');

      // Reset form after submission
      setForm({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      setLoading(false); // Stop loading
      console.error('Email send error:', error);
      alert('Sorry, something went wrong. Please try again.');
    });
  };

  return (
    <section id='contact'>
      <div className='flex justify-center mt-16 mb-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)} // Animation for sliding in the form
          className='flex-[0.75] rounded-2xl bg-black-100 p-4' // Styling for the form container
        >
          <p className={styles.heroSubText}>Get in touch</p>
          <h5 className={styles.heroHeadText}>Contact</h5>

          {/* Contact form */}
          <form
            ref={formRef} // Reference to the form
            onSubmit={handleSubmit} // Form submission handler
            className='flex flex-col gap-5 mt-10' // Form styling
          >
            <label className='flex flex-col'>
              <span className='mb-4 font-medium text-white'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name} // Value from state
                onChange={handleChange} // Handle input changes
                className='px-6 py-4 rounded-lg outline-none placeholder:text-secondary bg-tertiary'
                placeholder='Enter your name'
              />
            </label>
            <label className='flex flex-col'>
              <span className='mb-4 font-medium text-white'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email} // Value from state
                onChange={handleChange} // Handle input changes
                className='px-6 py-4 rounded-lg outline-none placeholder:text-secondary bg-tertiary'
                placeholder='Enter your email'
              />
            </label>
            <label className='flex flex-col'>
              <span className='mb-4 font-medium text-white'>Your Message</span>
              <textarea
                rows="7"
                name='message'
                value={form.message} // Value from state
                onChange={handleChange} // Handle textarea changes
                className='px-6 py-4 rounded-lg outline-none placeholder:text-secondary bg-tertiary'
                placeholder='Enter your message'
              />
            </label>

            {/* Submit button */}
            <button
              type='submit'
              className='px-8 py-3 font-bold text-white rounded-lg bg-tertiary w-[20%]' // Button styling
            >
              {loading ? 'Sending...' : 'Send'} {/* Show "Sending..." if loading */}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
