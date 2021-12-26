import React, { Fragment, useState } from 'react';
import Modal from './Modal';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('Ali');
  const [message, setMessage] = useState('');

  const [isActive, setIsActive] = useState(false);

  const defaultReset = () => {
    setEmail('');
    setName('');
    setMessage('');
  };

  const handleSubmit = () => {
    if (name !== '' && email !== '' && message !== '') setIsActive(true);
  };

  const toggleModal = () => {
    defaultReset();
    setIsActive(false);
  };

  return (
    <Fragment>
      <Modal isActive={isActive} title='Thank you for contacting' onClose={toggleModal}>
        <div>{name} your response has been submitted successfully</div>
      </Modal>
      <section className='mt-14 text-gray-600 body-font relative' id='contact-us'>
        <div className='absolute inset-0 bg-gray-300'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.4138098081107!2d74.21044541510526!3d31.402723060084046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd0bc7c5f71%3A0x879e9b82857bcd94!2sCOMSATS%20University%2C%20Lahore%20Campus!5e0!3m2!1sen!2s!4v1638211168865!5m2!1sen!2s'
            width='100%'
            height='100%'
            allowfullscreen=''
            loading='lazy'></iframe>
        </div>
        <div className='container px-5 py-24 mx-auto flex'>
          <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>Contact Us</h2>
            <p className='leading-relaxed mb-5 text-gray-600'>We'd love to entertain your queries</p>
            <div className='relative mb-4'>
              <label for='email' className='leading-7 text-sm text-gray-600'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label for='email' className='leading-7 text-sm text-gray-600'>
                Name
              </label>
              <input
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label for='message' className='leading-7 text-sm text-gray-600'>
                Message
              </label>
              <textarea
                type='text'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
            </div>
            <button onClick={handleSubmit} className='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'>
              Submit
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
