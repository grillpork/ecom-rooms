'use client';

import { data } from '@/app/data';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
    <header id="header" className="w-full">
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
                  className="object-cover w-screen h-screen brightness-75 contrast-125"
                />
                {/* Text overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
          <button
            onClick={scrollPrev}
            className="bg-white/30 bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full text-black transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="bg-white/30 bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full text-black transition"
          >
            <FaArrowRight size={20} />
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
