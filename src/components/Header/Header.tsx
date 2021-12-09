import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/reducers';
import styles from './Header.module.css';
import Search from './Search';
import UserCart from './UserCart';

export default function Header() {
  const [activeSearch, setActiveSearch] = useState<boolean>(false);

  const { active }: TCart = useSelector((state: RootState) => state.cart);

  return (
    <header className='w-full h-16 px-4 relative flex items-center justify-between gap-4 bg-white lg:h-20 lg:w-10/12'>
      <div className='flex h-full items-center gap-4'>
        <div
          className={`w-6 h-0.5 relative -mt-1 bg-gray-800 cursor-pointer ${styles.menu}`}
        />
        <Link href='/'>
          <a
            className={`text-xl font-semibold lg:text-2xl ${
              !activeSearch ? styles.active : 'hidden lg:block'
            }`}
          >
            Chukwudi
          </a>
        </Link>
      </div>
      <Search active={activeSearch} setActive={setActiveSearch} />
      {!active && (
        <div className='flex h-full items-center gap-4 absolute right-4 lg:fixed lg:right-10'>
          <UserCart />
        </div>
      )}
    </header>
  );
}
