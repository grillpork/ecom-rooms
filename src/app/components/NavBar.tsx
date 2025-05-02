"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTwitter as FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

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
  const [show, setShow] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

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

      // Auto Hide Navbar
      // if (currentScroll > lastScrollY.current && currentScroll > 100) {
      //   setShow(false); 
      // } else {
      //   setShow(true); 
      // }
      // lastScrollY.current = currentScroll;
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
      className={`fixed top-0 w-full shadow z-50 transition-transform duration-300 bg-black/20 backdrop-blur-2xl ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <section className="p-2 max-w-7xl mx-auto">
        <ul className="grid grid-cols-2 gap-4 justify-between items-center text-sm">
          <section className="flex gap-4">
            <FaFacebook />
            <FaYoutube />
            <FaXTwitter />
          </section>
          <section className="grid grid-cols-3">
            <span className="flex gap-2 items-center">
              <IoIosMail /> homeLive@gmail.com
            </span>
            <span className="flex gap-2 items-center">
              <IoCall /> Call: 099-999-9999
            </span>
            <span className="flex gap-4 items-center uppercase p-2 bg-yellow-500 font-semibold text-black">
              Book Appointment <FaArrowRight />
            </span>
          </section>
        </ul>
      </section>
      <hr className=" opacity-35"/>

      <section className="flex justify-between items-center px-2 py-6 max-w-7xl mx-auto">
        <ul>
          <Link href="/" className=" [font-family:var(--font-ovo)] text-2xl">HomeLive</Link>
        </ul>
        <div ref={navRef} className="relative flex justify-center gap-8 ">
          {NavItems.map(({ label, path }, index) => (
            <Link
              key={`${path}-${index}`}
              href={path}
              scroll={true}
              data-path={path.replace("#", "")}
              className={`text-lg ${
                active === path.replace("#", "")
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
      </section>
    </div>
  );
}
