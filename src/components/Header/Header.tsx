import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.css';
import Search from './Search';
import UserCart from './UserCart';

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <header className='w-full h-16 px-4 mx-auto relative flex items-center gap-4 bg-white lg:h-20 lg:w-10/12 justify-between'>
      <div className='flex  h-full items-center gap-4'>
        <div
          className={`w-6 h-0.5 relative -mt-1 bg-gray-800 cursor-pointer ${styles.menu}`}
        />
        <Link href='/'>
          <a
            className={`text-xl font-semibold lg:text-2xl ${
              !active ? styles.active : 'hidden lg:block'
            }`}
          >
            Chukwudi
          </a>
        </Link>
      </div>
      <Search active={active} setActive={setActive} />
      <UserCart />
    </header>
  );
}
