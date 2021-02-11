import React from 'react';

import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex justify-between w-5/6 items-center border-b-4 border-green-400 p-6 m-auto'>
      <img src={Logo} alt='logo' />
      <h1 className='text-2xl text-green-400 font-bold'>
        The Beagle Todo List
      </h1>
    </div>
  );
};

export default Header;
