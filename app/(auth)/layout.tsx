import Image from "next/image";
import { ReactNode } from "react";
import bgImg from "@/public/login_background.jpg";
import logoImg from "@/public/netflix_logo.svg";

export default function AuthLayout({children}: {children: ReactNode}) {
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">  
            <Image 
                src={bgImg} 
                alt="background image" 
                className=" sm:flex sm:object-cover -z-10 brightness-50" 
                fill 
                objectFit="cover" 
                objectPosition="center"
                priority
            />
            <Image
                src={logoImg}
                alt="logo"
                className="absolute left-4 object-contain md:left-10 md:top-6"
                width={120}
                height={120}
                priority
            />
            {children}
        </div>
        
    )
}