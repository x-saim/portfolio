'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isMessageSent, setMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'saimxamir@gmail.com',
        'email_ybold4a',
        e.target,
        'wABNLMP1yPyQ_IEY-'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);

          // Automatically hide the alert after 5 seconds (5000 milliseconds)
          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id='contact' className='isolate  px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-[#AD954C] dark:text-gray-50 sm:text-4xl'>
          Contact Me!
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600 dark:text-gray-50'>
          I am available for Full-Time or Freelance positions. Let's Connect!
        </p>
      </div>

      {/* Show message confirmation and hide it after a few seconds */}
      {isMessageSent ? (
        <div className='mx-auto mt-6 max-w-xl'>
          <p className='text-green-600 text-center font-semibold'>
            Message Sent Successfully!
          </p>
        </div>
      ) : (
        <form
          onSubmit={sendEmail}
          action='#'
          method='POST'
          className='mx-auto mt-16 max-w-xl sm:mt-20'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div>
              <label
                htmlFor='first-name'
                className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50'
              >
                First name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  placeholder='First Name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='last-name'
                className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50'
              >
                Last name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  placeholder='Last Name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='subject'
                className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50'
              >
                Subject
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  placeholder='Subject'
                  autoComplete='subject'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50'
              >
                Email
              </label>
              <div className='mt-2.5'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Please enter email address'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='phone-number'
                className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50'
              >
                Phone number
              </label>
              <div className='relative mt-2.5'>
                <div className='absolute inset-y-0 left-0 flex items-center'>
                  <label htmlFor='country' className='sr-only'>
                    Country
                  </label>
                  <select
                    id='country'
                    name='country'
                    className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </div>
                <input
                  type='tel'
                  name='phone-number'
                  id='phone-number'
                  placeholder='Enter Phone Number'
                  autoComplete='tel'
                  className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50'
              >
                Message
              </label>
              <div className='mt-2.5'>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Please enter your message here...'
                  rows={4}
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <button
              type='submit'
              className='block w-full rounded-xl bg-[#AD954C] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Send message!
            </button>
          </div>
        </form>
      )}
      <div className='flex justify-center py-12'>
        <Link href='/#home'>
          <div className='rounded-full bg-slate-100 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <HiOutlineChevronDoubleUp className='text-[#AD954C]' size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
