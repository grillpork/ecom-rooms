import Link from "next/link";
import { BsChat } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function Footer() {
    return (
        <footer
  id="contact"
  className="w-full bg-no-repeat bg-center bg-cover flex flex-col text-white mt-24"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(/room_1.jpg)"
  }}
>
  <section className="flex flex-col justify-center items-center text-center border-b border-white/10 py-44">
    <div className="space-y-6 max-w-2xl">
      <h1 className="uppercase text-yellow-500 font-bold text-sm">
        you dream it, we design it
      </h1>
      <h1 className="text-3xl md:text-5xl font-semibold px-8">
        We can build you the rooms of your dreams
      </h1>
      <button className="px-6 py-3 cursor-pointer bg-gray-800 rounded-full flex items-center justify-center gap-3 mx-auto hover:scale-105 hover:shadow-lg transition-all duration-150">
        Chat now <BsChat />
      </button>
    </div>
  </section>

  <section className="flex flex-col lg:flex lg:flex-row gap-12 max-w-7xl mx-auto px-4 py-16">
    <div className="col-span-2 space-y-4 text-center lg:text-left">
      <div className="text-3xl font-bold">HOMELIVE</div>
      <p className="text-white/50 text-sm max-w-sm mx-auto md:mx-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt deserunt fugit eaque nihil explicabo.
      </p>
      <ul className="flex justify-center lg:justify-start gap-6 text-white/50">
        <FaFacebook size={20} />
        <FaYoutube size={24} />
        <IoIosMail size={24} />
      </ul>
    </div>

    <ul className="grid grid-cols-3  md:grid-cols-3 gap-8  text-center md:text-left">
      {contactLinks.map((item, index) => (
        <li key={index}>
          <h3 className="text-white font-bold mb-3">{item.title}</h3>
          <ul className="space-y-2">
            {item.des.map((link, idx) => (
              <li key={idx}>
                <Link href={link.path} className="text-gray-300 hover:text-white text-sm">
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>

    <div className=" flex flex-col items-center md:items-start gap-4  ">
      <p className="uppercase text-sm font-semibold">Subscribe to our Newsletter</p>
      <p className="text-white/50 text-sm max-w-sm mx-auto md:mx-0 text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error doloribus.
      </p>
      <form className="flex flex-col md:flex-row items-center  bg-gray-700 rounded overflow-hidden w-full md:w-fit md:px-1">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-auto px-4 py-2 text-white focus:outline-none"
        />
        <button className="w-full sm:w-auto px-6 py-2 text-yellow-500 text-sm bg-gray-800 hover:bg-gray-900">
          SUBSCRIBE
        </button>
      </form>
    </div>
  </section>
</footer>

    );
}


const contactLinks = [
    {
        title: "About Us",
        des: [
            { linkName: "Our Story", path: "/about" },
            { linkName: "Our Team", path: "/team" },
            { linkName: "Our Designers", path: "/designers" },
            { linkName: "Careers", path: "/careers" },
            { linkName: "Testimonials", path: "/testimonials" },
            { linkName: "Partners", path: "/partners" },
            { linkName: "Contact Us", path: "/contact" },
        ],
    },
    {
        title: "Explore",
        des: [
            { linkName: "All Rooms", path: "/rooms" },
            { linkName: "Interior Design", path: "/design-services" },
            { linkName: "Blog & Ideas", path: "/blog" },
        ],
    },
    {
        title: "Quick Links",
        des: [
            { linkName: "FAQs", path: "/faq" },
            { linkName: "How It Works", path: "/how-it-works" },
            { linkName: "Get a Quote", path: "/quote" },
            { linkName: "Book a Room", path: "/book-room" },
            { linkName: "Privacy Policy", path: "/privacy-policy" },
            { linkName: "Terms of Service", path: "/terms" },
        ],
    },
];
