import { FaArrowRight } from "react-icons/fa";
import { data } from "../data";
import { CiPlay1 } from "react-icons/ci";
import Image from 'next/image';
import { FaCirclePlay } from "react-icons/fa6";

export default function Main() {
  return (
    <main className="w-full">
      <section className="max-w-7xl mx-auto m-24">
        <div className="grid grid-cols-3">
          <aside className="flex gap-3 relative">
            <h1 className="text-7xl">25</h1>
            <div>
              <h2>Years</h2>
              <h2>Experience</h2>
              <h2>Working</h2>
            </div>
          </aside>

          <header>
            <p className="text-yellow-500 uppercase">About</p>
            <h1 className="text-3xl">Creative solutions by professional designers</h1>
          </header>

          <section className="space-y-4">
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
              eligendi laboriosam odio, quisquam libero ad repudiandae laborum ab
              sequi aspernatur nam reprehenderit quos animi quas sint explicabo
              aperiam vero consectetur.
            </p>
            <button className="flex gap-4 items-center px-4 py-2 rounded-full bg-gray-700">
              Continue reading <FaArrowRight />
            </button>
          </section>
        </div>
      </section>

      <section id="room" className="w-full px-24 mx-auto">
        <div className="grid grid-cols-4 gap-8 mx-auto w-full">
          {data.map((item, index) => (
            <article key={index} className="bg-neutral-600">
              <div
                className="space-y-96 p-8 bg-center bg-cover"
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
                  <a href="/" className=" uppercase flex gap-4 items-center">Read more <FaArrowRight/></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto py-24">
        <div>
            <p className=" text-sm uppercase text-yellow-500 mb-2">why choose us</p>
            <h1 className=" text-4xl font-semibold">Extremely high standard of </h1>
            <h1 className=" text-4xl font-semibold">customer satisfaction</h1>
            <div className="grid grid-cols-4 gap-8 my-24">
                {serviceItems.map(( item, index) => (
                    <div key={index} className=" flex flex-col gap-6 justify-center items-center">
                        <div className=" w-32 h-32 bg-gray-700  rounded-full"></div>
                        <h1 className=" uppercase font-semibold">{item.title}</h1>
                        <p className="text-center text-gray-400 px-2 ">{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="promotion" className="p-18">
         <div className="grid place-content-center p-12 grid-cols-2 gap-12 bg-no-repeat bg-cover bg-center bg-fixed " style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/workingRoom_1.jpg)"}}>
                <section className="grid place-content-center gap-12">
                    <p className="text-yellow-500">PROMO VIDEO</p>
                    <h1 className=" text-6xl font-semibold ">Ensuring safe experience from design to installation</h1>
                    <p className="w-132">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in magni suscipit dicta fugiat placeat vero officiis, quasi perspiciatis mollitia.</p>
                    <button className=" flex items-center gap-4 px-8 py-4 cursor-pointer bg-gray-800 w-fit rounded-full">MOORE VIDEO <CiPlay1/></button>
                </section>

                <div className=" relative">
                    <Image src={'/workingRoom_1.jpg'} alt="" width={1000} height={1000} className=" filter"/>
                    <div className=" absolute top-1/2 left-1/2 transform -translate-1/2 text-7xl opacity-50"><FaCirclePlay/></div>
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