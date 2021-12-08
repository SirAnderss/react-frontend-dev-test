import { AiOutlineGoogle } from 'react-icons/ai';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import styles from './SocialButtons.module.css';

type SocialButtonsProps = {
  active: boolean;
  setActive: (value: boolean) => void;
};

export default function SocialButtons({
  active,
  setActive,
}: SocialButtonsProps) {
  const socialLogin = (provider: string) => {
    console.log(provider);
  };
  return (
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
          onClick={() => socialLogin('gh')}
        />
        <AiOutlineGoogle
          className='text-2xl inline text-google-color cursor-pointer opacity-80 transform duration-200 hover:opacity-100 hover:scale-110'
          onClick={() => socialLogin('go')}
        />
      </div>
    </div>
  );
}
