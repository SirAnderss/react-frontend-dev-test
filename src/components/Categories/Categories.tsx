import { useRef, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Slider from 'react-slick';
import CategoryDetail from './CategoryDetail';

type CategoriesProps = {
  categories: TCategory[];
};

const settings = {
  arrows: false,
  infinity: true,
  speed: 500,
  slidesToShow: 8,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Categories({ categories }: CategoriesProps) {
  const [currentId, setCurrentId] = useState(1);
  const sliderRef = useRef<Slider>(null);

  return (
    <div className='w-11/12 relative lg:w-10/12 lg:mx-auto lg:flex lg:justify-between'>
      <div className='w-full py-8 lg:w-11/12'>
        <Slider {...settings} ref={sliderRef}>
          {categories.map(category => (
            <CategoryDetail
              key={category.id}
              category={category}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          ))}
        </Slider>
      </div>
      <button
        className='absolute top-1/2 -right-5 bg-gray-100 rounded-xl shadow-md transform -translate-y-1/2'
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <BiChevronRight className='text-4xl' />
      </button>
    </div>
  );
}
