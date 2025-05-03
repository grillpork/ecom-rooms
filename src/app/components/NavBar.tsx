"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTwitter as FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavItems = [
  { label: "Home", path: "#header" },
  { label: "Room", path: "#room" },
  { label: "Services", path: "#services" },
  { label: "Preview", path: "#preview" },
  { label: "Contact", path: "#contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("");
  const [style, setStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true)

  const hdlBtn = () => { setIsOpen(!isOpen) }

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Detect active section
      NavItems.forEach(({ path }) => {
        const id = path.replace("#", "");
        const el = document.getElementById(id);
        if (el && currentScroll >= el.offsetTop - 100) {
          setActive(id);
        }
      });

    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeEl = navRef.current?.querySelector(
      `[data-path="${active}"]`
    ) as HTMLElement;
    if (activeEl) {
      setStyle({ left: activeEl.offsetLeft, width: activeEl.offsetWidth });
    }
  }, [active]);

  return (
    <div
      className="fixed top-0 w-full shadow z-50 transition-transform duration-300 bg-black/20 backdrop-blur-2xl "
    >
      <section className="p-2 max-w-7xl mx-auto">
        <ul className="grid grid-cols-2 gap-4 justify-between items-center text-sm">
          <section className="flex gap-4">
            <FaFacebook />
            <FaYoutube />
            <FaXTwitter />
          </section>
          <section className="grid md:grid-cols-3">
            <span className="hidden md:flex gap-2 items-center">
              <IoIosMail /> homeLive@gmail.com
            </span>
            <span className="hidden md:flex gap-2 items-center">
              <IoCall /> Call: 099-999-9999
            </span>
            <span className="flex w-full gap-4 justify-center items-center uppercase p-2 bg-yellow-500 font-semibold text-black">
              Book Appointment <FaArrowRight />
            </span>
          </section>
        </ul>
      </section>
      <hr className=" opacity-35" />

      <section className="flex justify-between items-center px-2 py-6 max-w-7xl mx-auto">
        <ul>
          <Link href="/" className=" [font-family:var(--font-ovo)] text-2xl">HomeLive</Link>
        </ul>
        <div ref={navRef} className="relative hidden md:flex justify-center gap-8 ">
          {NavItems.map(({ label, path }, index) => (
            <Link
              key={`${path}-${index}`}
              href={path}
              scroll={true}
              data-path={path.replace("#", "")}
              className={`text-lg ${active === path.replace("#", "")
                  ? "text-gray-100"
                  : "text-gray-100/50"
                }`}
            >
              {label}
            </Link>
          ))}
          <div
            className="absolute bottom-0 h-[2px] bg-yellow-600 transition-all duration-300"
            style={style}
          />
        </div>

        <section onClick={hdlBtn} className=" flex flex-col gap-1.5 items-end">
          <div className=" w-2 h-0.5 bg-white"></div>
          <div className=" w-6 h-0.5 bg-white"></div>
          <div className=" w-4 h-0.5 bg-white"></div>
        </section>


      </section>
      <div
        className={`top-112 w-full h-fit   fixed z-50 origin-left transition-transform duration-500 ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        style={{ transformOrigin: "bottom" }}
      >
        <ul className="flex flex-col gap-8 justify-end items-center h-full bg-neutral-900 py-12 rounded-t-4xl ">
          {NavItems.map(({ label, path }, index) => (
            <Link
              key={`${path}-${index}`}
              href={path}
              scroll={true}
              data-path={path.replace("#", "")}
              className={`text-3xl ${active === path.replace("#", "")
                  ? "text-gray-100"
                  : "text-gray-100/50"
                }`}
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
