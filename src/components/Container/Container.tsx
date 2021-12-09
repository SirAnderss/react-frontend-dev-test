import Cart from 'components/Cart/Cart';
import { useSelector } from 'react-redux';
import { RootState } from 'state/reducers';
import styles from './Container.module.css';

export default function Container({ children }: { children: React.ReactNode }) {
  const { active }: TCart = useSelector((state: RootState) => state.cart);

  return (
    <div className='block lg:flex'>
      <div>{children}</div>
      {active && (
        <>
          <div
            className={`relative bg-white lg:bg-transparent z-10 ${
              active ? styles.active : 'hidden'
            }`}
          />
          <Cart active={active!} />
        </>
      )}
    </div>
  );
}
