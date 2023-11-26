import React from "react";
import Image from "next/image";
import Game from "@/Images/Resume_Game.png";
import Web from "@/Images/Resume_Web.png";
import Software from "@/Images/Resume_Software.png";

const ResumePage = () => {
    return (
        <div>
            <div className="flex justify-center text-center text-5xl font-bold pt-24">Resumes</div>
            <div className="flex flex-col items-center text-2xl p-24 gap-24 underline underline-offset-2">
                <div>
                    <div>Web Development:</div>
                    <Image src={Game} height={1200} width={600} className="pt-8"></Image>
                </div>
                <div>
                    <div>Game Development:</div>
                    <Image src={Web} height={1200} width={600} className="pt-8"></Image>
                </div>
                <div>
                    <div>Software Development:</div>
                    <Image src={Software} height={1200} width={600} className="pt-8"></Image>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;
