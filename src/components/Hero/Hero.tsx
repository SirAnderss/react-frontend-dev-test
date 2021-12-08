import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Title from './Title';

export default function Hero() {
  return (
    <>
      <div className='w-full relative pt-8 mx-auto lg:w-10/12 lg:flex'>
        <div className='w-full h-semi-full absolute bottom-0 left-0 bg-custom-yellow opacity-20 rounded-t-2xl -z-1 lg:h-48 lg:rounded-3xl'></div>
        <div className='w-10/12 h-60 mx-auto relative lg:w-80 lg:ml-20'>
          <Image
            src='https://i.postimg.cc/fLb4DyPm/headerimage.png'
            alt='Hero'
            layout='fill'
          />
        </div>
        <div className='w-full mt-4 py-4 flex flex-col items-center justify-center gap-2 text-custom-orange lg:flex-row lg:p-6'>
          <div className='w-full text-center lg:w-10/12'>
            <div className='w-full flex items-center justify-center gap-4'>
              <h2 className='text-2xl font-semibold'>
                $0 delivery for 30 days!
              </h2>
              <Image
                src='https://i.postimg.cc/mr14Htj4/d.png'
                alt='Hero'
                width={40}
                height={40}
              />
            </div>
            <p className='text-gray-600 lg:text-sm'>
              $0 delivery fee for order over $10 for 30 days
            </p>
          </div>
          <div className='lg:w-3/12 lg:h-full lg:flex lg:items-end lg:justify-end'>
            <Link href='/'>
              <a className='text-sm font-semibold'>
                Learn more <HiOutlineArrowNarrowRight className='inline' />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Title />
    </>
  );
}
