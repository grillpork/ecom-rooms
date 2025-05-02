import Link from "next/link";
import { BsChat } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function Footer() {
    return (
        <footer id="contact" className=" h-screen w-full bg-no-repeat bg-center bg-cover grid grid-rows-2" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(/room_1.jpg) ' }}>
            <section className=" flex justify-center items-center border-b-1">
                <div className="text-center space-y-6">
                    <h1 className=" uppercase text-yellow-500 font-bold">you dream it, we design it</h1>
                    <h1 className=" text-6xl w-200 mx-auto">We can build you the rooms of your dreams</h1>
                    <button className=" px-8 py-4 bg-gray-800 rounded-full flex items-center gap-4 mx-auto cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-150">Chat now <BsChat /></button>
                </div>
            </section>
            <section className="grid grid-cols-7 py-32 gap-12 max-w-7xl mx-auto">
                <div className="col-span-2 space-y-6">
                    <div className=" text-4xl font-bold">HOMELIVE</div>
                    <p className="text-white/50">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nesciunt deserunt fugit eaque nihil explicabo enim sint aperiam ratione sit, necessitatibus numquam id? Ipsum sit saepe ipsa dignissimos at odit.</p>
                    <div>
                        <ul className=" flex items-center gap-6 text-white/50">
                            <FaFacebook size={20}/>
                            <FaYoutube size={24}/>
                            <IoIosMail size={24}/>
                        </ul>
                    </div>
                </div>
                <ul className="grid grid-cols-3 gap-8 col-span-3">
                    {contactLinks.map((item, index) => (
                        <li key={index}>
                            <h3 className="text-white font-bold mb-4">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.des.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.path} className="text-gray-300 hover:text-white">
                                            {link.linkName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className=" col-span-2 space-y-6">
                    <p>SUBSCRIBE TO OUR NEWS LATTER</p>
                    <p className=" text-white/50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error doloribus voluptatem molestiae sunt. Nostrum.
                    </p>
                    <form className=" w-full p-2 bg-gray-700 flex">
                        <input type="email" placeholder="Enter your email." className=" focus:outline-0 px-2" />
                        <button className=" text-sm text-yellow-500 text-center w-full">SUBSCRIBE</button>    
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
