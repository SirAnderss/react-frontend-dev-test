import { authWithSocialProvider } from 'firebase-app/auth';
import toast, { Toast, Toaster } from 'react-hot-toast';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'state';
import styles from './SocialButtons.module.css';

type SocialButtonsProps = {
  active: boolean;
  setActive: (value: boolean) => void;
};

type UserNotificationProps = {
  user: { name: string | null | undefined; avatar: string | null | undefined };
  t: Toast;
};

export default function SocialButtons({
  active,
  setActive,
}: SocialButtonsProps) {
  const dispatch = useDispatch();

  const { setUser } = bindActionCreators(actionCreators, dispatch);

  const socialLogin = async (provider: string): Promise<void> => {
    const user: TUser = await authWithSocialProvider(provider);

    if (user?.uid) {
      setActive(false);

      setUser(user);
      if (typeof window !== 'undefined')
        sessionStorage.setItem('oul_', window.btoa(JSON.stringify(user)));

      toast.custom(t => (
        <UserNotification
          user={{ name: user?.username, avatar: user?.avatar }}
          t={t}
        />
      ));

      return;
    }

    toast.error(
      'Upps, something went wrong, try again later or contact the administrator'
    );
  };

  return (
    <>
      <div
        className={`absolute -top-2/3 right-7 w-40 py-3 px-4 bg-white leading-10 text-center rounded z-1 ${
          styles.card
        } ${active ? styles.active : 'hidden'}`}
      >
        <h2 className='text-xl font-semibold tracking-wide lg:text-base'>
          Login with
        </h2>
        <div className=''>
          <BsTwitter
            className='text-2xl inline mr-4 text-twitter-color cursor-pointer opacity-80 transform duration-200 hover:opacity-100 hover:scale-110'
            onClick={() => socialLogin('twitter')}
          />
          <BsGithub
            className='text-2xl inline mr-4 cursor-pointer opacity-80 transform duration-200 hover:opacity-100 hover:scale-110'
            onClick={() => socialLogin('github')}
          />
          <AiOutlineGoogle
            className='text-2xl inline text-google-color cursor-pointer opacity-80 transform duration-200 hover:opacity-100 hover:scale-110'
            onClick={() => socialLogin('google')}
          />
        </div>
      </div>
      <Toaster />
    </>
  );
}

const UserNotification = ({ user, t }: UserNotificationProps) => (
  <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className='flex-1 w-0 p-4'>
      <div className='flex items-start'>
        <div className='flex-shrink-0 pt-0.5'>
          {/*
          <img
            className='h-10 w-10 rounded-full'
            src={user?.avatar}
            alt={user?.name | "User avatar"}
          /> */}
        </div>
        <div className='ml-3 flex-1 items-center'>
          <p className='text-sm font-medium text-gray-900'>
            {user.name} Welcome!!!
          </p>
        </div>
      </div>
    </div>
    <div className='flex border-l border-gray-200'>
      <button
        onClick={() => toast.dismiss(t.id)}
        className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
      >
        Close
      </button>
    </div>
  </div>
);
