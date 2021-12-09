import { logout } from 'firebase-app/auth';
import Image from 'next/image';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'state';
import { RootState } from 'state/reducers';
import SocialButtons from './SocialButtons';
import styles from './SocialButtons.module.css';

export default function UserCart() {
  const [active, setActive] = useState<boolean>(false);

  const { quantity }: TCart = useSelector((state: RootState) => state.cart);
  const userState: any = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const { openCart, unSetUser } = bindActionCreators(actionCreators, dispatch);

  const handleLogout = () => {
    logout();
    setActive(false);
    unSetUser();

    toast('Bye bye!', {
      icon: '👏',
    });

    if (typeof window !== 'undefined') sessionStorage.removeItem('oul_');
  };

  return (
    <>
      {userState.user ? (
        <div className='relative flex items-center'>
          <Image
            src={userState.user.avatar}
            alt={userState.user.username}
            width={40}
            height={40}
            className='rounded-full cursor-pointer'
            onClick={() => setActive(!active)}
          />
          <div
            className={`absolute top-11 right-4 px-4 py-2 bg-white text-gray-600 font-semibold rounded tracking-wide cursor-pointer hover:text-gray-800 ${
              styles.card
            } ${active && userState.user ? styles.active : 'hidden'}`}
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      ) : (
        <div className='relative'>
          <AiOutlineUser
            className='text-2xl text-gray-700 cursor-pointer'
            onClick={() => setActive(!active)}
          />
          <SocialButtons
            active={!userState.user && active}
            setActive={setActive}
          />
        </div>
      )}
      <div
        className={`w-8 h-8 grid place-items-center text-lg font-semibold text-gray-700 rounded-xl lg:w-12 lg:h-12 lg:text-xl ${
          quantity! > 0 ? 'cursor-pointer bg-custom-yellow ' : 'bg-gray-300'
        }`}
        onClick={() => quantity! > 0 && openCart(true)}
      >
        {quantity! > 0 ? (
          quantity
        ) : (
          <AiOutlineShoppingCart className='text-xl' />
        )}
      </div>
      <Toaster />
    </>
  );
}
