import Link from "next/link";
import Theme from "./Theme";
import Image from "next/image";
import pic from "@/app/profile_pic.jpg";

const Navbar = () => {
    return (
        <div className="flex justify-evenly items-center text-white bg-neutral-900 h-16 text-3xl font-bold">
            <Link href="/" className="flex flex-row justify-center items-center">
                <Image src={pic} alt="" className="h-10 w-10 rounded-full" />
                <div className="pr-[650px] pl-8">Hao Duong</div>
            </Link>
            <div className="flex gap-32">
                <Link href="/resumes" className="hover:scale-110">
                    <div>Resumes</div>
                </Link>
                <Link href="/about_me" className="hover:scale-110">
                    <div>About Me</div>
                </Link>
                <Link href="/projects" className="hover:scale-110">
                    <div>Projects</div>
                </Link>
            </div>
            <div className="flex justify-center items-center pb-8 pl-4 pr-8 hover:scale-110">
                <Theme />
            </div>
        </div>
    );
};

export default Navbar;
