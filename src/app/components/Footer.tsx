import Link from "next/link";
import { BsChat } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className=" h-screen w-full bg-no-repeat bg-center bg-cover grid grid-rows-2" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(/room_1.jpg) '}}>
            <section className=" flex justify-center items-center border-b-1">
                <div className="text-center space-y-6">
                    <h1 className=" uppercase text-yellow-500 font-bold">you dream it, we design it</h1>
                    <h1 className=" text-6xl w-200 mx-auto">We can build you the rooms of your dreams</h1>
                    <button className=" px-6 py-4 bg-gray-800 rounded-full flex items-center gap-4 mx-auto">Let's chat now <BsChat/></button>
                </div>
            </section>
            <section className="flex">
                <div>
                    <div>LOGO</div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nesciunt deserunt fugit eaque nihil explicabo enim sint aperiam ratione sit, necessitatibus numquam id? Ipsum sit saepe ipsa dignissimos at odit.</p>
                    <div>
                        <ul>

                        </ul>
                    </div>
                </div>
                <ul className="grid grid-cols-3">
                    <div>
                        <h1>About</h1>
                        <ul>
                            <Link href="/">About us</Link>
                            <Link href="/">About us</Link>
                            <Link href="/">About us</Link>
                            <Link href="/">About us</Link>
                        </ul>
                    </div>
                    <div>
                        <h1>About</h1>
                        <ul>
                            <Link href="/">About us</Link>
                            <Link href="/">About us</Link>
                            <Link href="/">About us</Link>
                            <Link href="/">About us</Link>
                        </ul>
                    </div>
                    <div>
                        <h1>About</h1>
                        <ul>
                            <Link href="/">About us</Link>
                            <Link href="/">About us</Link>
                            <Link href="/">About us</Link>
                            <Link href="/">About us</Link>
                        </ul>
                    </div>
                </ul>
                <div></div>
            </section>
        </footer>
    );
}