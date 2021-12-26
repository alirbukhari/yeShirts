/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ShoppingBagIcon, MenuIcon, XIcon, LoginIcon, UserCircleIcon } from '@heroicons/react/outline';

import HeroImage from '../assets/images/hero.png';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '', current: false },
  { name: 'Contact', href: '#contact-us', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = ({ user }) => {
  return (
    <div className='h-screen flex flex-col' style={{ background: 'radial-gradient(#fff, #ffd6d6)' }}>
      <Disclosure as='nav' className=''>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-white hover:bg-gray-700 focus:outline-none'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? <XIcon className='block h-6 w-6' aria-hidden='true' /> : <MenuIcon className='block h-6 w-6' aria-hidden='true' />}
                  </Disclosure.Button>
                </div>
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  {/* Website Title */}
                  <div className='flex-shrink-0 flex items-center text-red-700 font-bold text-2xl'>yeShirts</div>

                  <div className='hidden sm:block sm:ml-6 sm:flex justify-center items-center flex-grow'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(item.current ? 'bg-red-900 text-white' : 'text-gray-700 hover:bg-red-900 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                          aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <Link className='p-1 rounded-full text-red-800 hover:text-red-800 focus:outline-none' to={user ? '/profile' : '/login'}>
                    <span className='sr-only'>{user ? 'Profile' : 'Login'}</span>
                    {user ? <UserCircleIcon className='h-6 w-6' aria-hidden='true' /> : <LoginIcon className='h-6 w-6' aria-hidden='true' />}
                  </Link>

                  <button type='button' className='mr-4 p-1 rounded-full text-red-800 hover:text-red-800 focus:outline-none'>
                    <span className='sr-only'>View notifications</span>
                    <ShoppingBagIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(item.current ? 'bg-red-900 text-white' : 'text-gray-700 hover:bg-red-900 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className='flex flex-col flex-grow justify-center items-center space-y-4 overflow-hidden px-4 md:flex-row-reverse'>
        <div className='w-64 h-64 md:w-3/5 overflow-hidden md:h-auto'>
          <img src={HeroImage} alt='Workout' className='w-100 h-100 object-cover' />
        </div>
        <div className='text-center space-y-6 md:w-2/5'>
          <div className='font-bold text-2xl md:text-5xl'>
            Give Your Workout <br /> A New Style!
          </div>
          <div className='text-sm md:text-lg'>Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come.</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
