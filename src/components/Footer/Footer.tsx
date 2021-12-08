import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='w-full h-20 mt-8 pb-1 flex flex-col justify-end items-center text-gray-700 bg-gray-50'>
      <div className='flex gap-3 mb-2'>
        <a
          href='https://twitter.com/SirAnderss'
          target='_blank'
          rel='noreferrer'
        >
          <AiOutlineTwitter className='text-2xl ' />
        </a>
        <a
          href='https://www.instagram.com/sir.andersson/'
          target='_blank'
          rel='noreferrer'
        >
          <AiOutlineInstagram className='text-2xl ' />
        </a>

        <a
          href='https://github.com/SirAnderss/'
          target='_blank'
          rel='noreferrer'
        >
          <AiOutlineGithub className='text-2xl ' />
        </a>
      </div>
      &copy; {new Date().getFullYear()} Andersson Ramirez. Todos los derechos
      reservados.
    </div>
  );
}
