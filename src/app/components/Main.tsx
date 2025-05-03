'use client'
import { FaArrowRight } from "react-icons/fa";
import { data } from "../data";
import { CiPlay1 } from "react-icons/ci";
import Image from 'next/image';
import { FaCirclePlay } from "react-icons/fa6";
import Link from "next/link";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Main() {

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <main className="w-full  px-6">
      <section className="w-full md:max-w-7xl mx-auto m-24">
        <div className="grid gap-4  md:grid-cols-3">
          <aside className="flex gap-3 relative">
            <h1  data-aos="fade-down" className="text-7xl">25</h1>
              <div className=" bg-yellow-500 h-1/2 w-0.5"></div>
            <div data-aos="fade-up" className=" font-semibold">
              <h2>Years</h2>
              <h2>Experience</h2>
              <h2>Working</h2>
            </div>
          </aside>

          <header>
            <p  data-aos="fade-down" className="text-yellow-500 uppercase">About</p>
            <h1  data-aos="fade-up" className="text-3xl">Creative solutions by professional designers</h1>
          </header>

          <section  className="space-y-4">
            <p data-aos="fade-down"  className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
              eligendi laboriosam odio, quisquam libero ad repudiandae laborum ab
              sequi aspernatur nam reprehenderit quos animi quas sint explicabo
              aperiam vero consectetur.
            </p>
            <button data-aos="fade-left" className="flex gap-4 items-center px-4 py-2 rounded-full bg-gray-700 cursor-pointer ">
              Continue reading <FaArrowRight />
            </button>
          </section>
        </div>
      </section>

      <section id="room" className="w-full py-12 px-8 md:px-24 mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-12 md:gap-8 mx-auto w-full ">
          {data.map((item, index) => (
            <article 
              key={index}
               data-aos="fade-up"
               data-aos-delay={index * 100}
              className="bg-neutral-600 group cursor-pointer">
              <div
                className="space-y-56 md:space-y-96 p-8 group-hover:bg-center bg-cover transition-all duration-500"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${item.ImgUrl})`,
                }}
              >
                <h2 className=" uppercase text-xl">{item.name}</h2>
                <div className=" space-y-4">
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                    facilis ea aut maxime magnam possimus accusantium tempore
                    deleniti officia amet?
                  </p>
                  <Link href="/" className=" uppercase flex gap-4 items-center w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-yellow-500 
                    after:bg-yellow-800 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Read more <FaArrowRight /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto py-24">
        <div data-aos="fade-up">
            <p  className=" text-sm uppercase text-yellow-500 mb-2">why choose us</p>
            <h1 className=" text-4xl font-semibold">Extremely high standard of </h1>
            <h1 className=" text-4xl font-semibold">customer satisfaction</h1>
            <div className="flex flex-col md:grid md:grid-cols-4 gap-16 my-24">
                {serviceItems.map(( item, index) => (
                    <div 
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100} 
                      className=" flex flex-col gap-6 justify-center items-center">
                        <div className=" w-32 h-32 bg-gray-700  rounded-full"></div>
                        <h1 className=" uppercase font-semibold">{item.title}</h1>
                        <p className="text-center text-gray-400 px-2 ">{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="preview" className="py-12 md:p-18">
         <div className="grid place-content-center py-16 px-8 md:p-12 xl:grid-cols-2 gap-12 bg-no-repeat bg-cover bg-center bg-fixed " style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/workingRoom_1.jpg)"}}>
                <section data-aos="fade-up" className="grid place-content-center gap-4 md:gap-12">
                    <p  className="text-yellow-500">PROMO VIDEO</p>
                    <h1  className="text-3xl md:text-6xl font-semibold ">Ensuring safe experience from design to installation</h1>
                    <p  className="w-1/2 text-white/50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in magni suscipit dicta fugiat placeat vero officiis, quasi perspiciatis mollitia.</p>
                    <button className=" flex items-center cursor-pointer gap-4 px-8 py-4 hover:scale-110 hover:shadow-lg transition-all duration-150 bg-gray-800 w-fit rounded-full">MOORE VIDEO <CiPlay1/></button>
                </section>

                <div  data-aos="fade-up" data-aos-delay="100" className=" relative ">
                    <Image src={'/workingRoom_1.jpg'} alt="" width={1000} height={1000} className="w-full h-full object-cover"/>
                    <div className=" cursor-pointer absolute top-1/2 left-1/2 transform -translate-1/2 text-7xl opacity-50 hover:scale-110 hover:shadow-lg transition-all duration-150 "><FaCirclePlay/></div>
                </div>
         </div>
      </section>
    </main>
  );
}

const serviceItems = [
    {
        title: "Full Services",
        icon: "",
        details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum facere ratione ipsum maxime. "
    },
    {
        title: "Dell Value",
        icon: "",
        details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum facere ratione ipsum maxime. "
    },
    {
        title: "Partner",
        icon: "",
        details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum facere ratione ipsum maxime. "
    },
    {
        title: "Integrity",
        icon: "",
        details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum facere ratione ipsum maxime. "
    },
]