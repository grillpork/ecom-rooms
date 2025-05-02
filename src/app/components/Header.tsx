'use client';

import { data } from '@/app/data';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

export default function Header() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <header id="header" className="  w-full">
      <section className="relative overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <Image
                  src={item.ImgUrl}
                  alt={item.name}
                  width={1280}
                  height={500}
                  className="object-cover w-screen h-screen brightness-50 contrast-125"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center flex flex-col gap-6 items-center">
                  <h1 className=' font-bold text-7xl'>{item.name}</h1>
                  <article>
                    <h2 className=' text-base font-light'>$ {item.price} Deposit</h2>
                    <p className=' text-base font-light'>3D Design & Measurement</p>
                  </article>
                  <button className=' flex items-center gap-4 px-8 py-4 text-base bg-white text-black w-fit rounded-full cursor-pointer hover:scale-110 transition-all duration-150'>Visit show room <GoArrowRight/></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
          <button
            onClick={scrollPrev}
            className="bg-white/30 bg-opacity-50 hover:scale-120 p-3 rounded-full cursor-pointer text-white transition"
          >
            <GoArrowLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="bg-white/30 bg-opacity-50 hover:scale-120 p-3 rounded-full cursor-pointer text-white transition"
          >
            <GoArrowRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-white  outline-1 outline-offset-2' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>
    </header>
  );
}
