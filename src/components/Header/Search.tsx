import useWindowSize from 'hooks/useWindowSize';
import { FiSearch } from 'react-icons/fi';
import styles from './Search.module.css';

type SearchProps = {
  active?: boolean;
  setActive: (active: boolean) => void;
};

export default function Search({ active, setActive }: SearchProps) {
  const size = useWindowSize();

  return (
    <>
      {size.width > 1024 ? (
        <SearchBody active={active} setActive={setActive} />
      ) : active && size.width < 1024 ? (
        <SearchBody active={active} setActive={setActive} />
      ) : (
        <FiSearch
          className='text-xl text-gray-700 absolute right-28 top-1/2 transform -translate-y-1/2 cursor-pointer lg:hidden'
          onClick={() => setActive(!active)}
        />
      )}
    </>
  );
}

const SearchBody = ({ active, setActive }: SearchProps) => (
  <div
    className={`lg:w-2/3 lg:relative ${
      active ? styles.active : 'lg:block lg:opacity-100'
    }`}
  >
    <input
      type='text'
      className={`w-full py-2 pl-4 text-gray-600 tracking-wide rounded-xl focus:outline-none lg:bg-gray-200 ${
        active ? styles['form-input'] : ''
      }`}
      placeholder='Search'
    />
    <FiSearch
      className='text-xl text-gray-700 absolute right-28 top-1/2 transform -translate-y-1/2 cursor-pointer lg:right-4'
      onClick={() => console.log('search')}
    />
  </div>
);
