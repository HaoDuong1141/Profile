/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import pic from "./profile_pic.jpg";
import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <div className="flex flex-col justify-center items-center text-center pt-28 gap-y-16">
                <Image src={pic} alt="" className="h-[20%] w-[20%] rounded-full" />
                <div className="flex flex-col justify-around gap-8 text-2xl">
                    <div className="flex flex-row justify-evenly gap-12">
                        <Link
                            href="https://www.linkedin.com/in/haoduong1141/"
                            className="underline underline-offset-4 hover:scale-110"
                        >
                            LinkedIn
                        </Link>
                        <div>*</div>
                        <Link
                            href="https://github.com/HaoDuong1141"
                            className="underline underline-offset-4 hover:scale-110"
                        >
                            GitHub
                        </Link>
                        <div>*</div>
                        <div className="underline underline-offset-4">haoduong1141@gmail.com</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
