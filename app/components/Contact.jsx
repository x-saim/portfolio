'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { contactFormFields } from '../config/contactFormFields';
import FormField from './FormField';

const Contact = () => {
  const [formState, setFormState] = useState({
    isLoading: false,
    isMessageSent: false,
    error: null
  });
  const [formData, setFormData] = useState({});

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      if (validateForm(formData)) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        
        setFormState(prev => ({ ...prev, isMessageSent: true }));
        setTimeout(() => {
          setFormState(prev => ({ ...prev, isMessageSent: false }));
        }, 5000);
      }
    } catch (error) {
      setFormState(prev => ({ ...prev, error: 'Failed to send message. Please try again.' }));
    } finally {
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const validateForm = (formData) => {
    const requiredFields = [
      'first-name',
      'last-name',
      'subject',
      'email',
      'message',
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setFormState(prev => ({
          ...prev,
          error: `Please fill in the "${field.replace('-', ' ')}" field.`
        }));
        return false;
      }
    }

    return true;
  };

  return (
    <div id='contact' className='isolate px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-[#AD954C] dark:text-gray-50 sm:text-4xl'>
          Contact Me!
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600 dark:text-gray-50'>
          I am available for Full-Time, Contract, or Freelance positions.
          Let&apos;s Connect!
        </p>
      </div>

      {/* Show message confirmation and hide it after a few seconds */}
      {formState.isMessageSent ? (
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
            {contactFormFields.map((field) => (
              <FormField
                key={field.id}
                field={field}
                value={formData[field.id] || ''}
                onChange={handleInputChange}
              />
            ))}
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
          </div>
          <div className='mt-10'>
            <button
              type='submit'
              disabled={formState.isLoading}
              className='block w-full rounded-md border border-white bg-black px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-black hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:opacity-50'
            >
              {formState.isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {formState.error && (
              <p className='mt-2 text-sm text-red-600 text-center'>
                {formState.error}
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
