import Cart from 'components/Cart/Cart';
import { useState } from 'react';
import styles from './Container.module.css';

export default function Container({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(true);
  return (
    <div className='block lg:flex'>
      <div className=''>{children}</div>
      <div
        className={`relative bg-transparent ${
          active ? styles.active : 'hidden'
        }`}
      >
        <Cart active={active} />
      </div>
    </div>
  );
}
