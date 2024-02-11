

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import googleIcon from "@/public/google.svg";
import { signIn } from "next-auth/react";
import GithubSignInButton from "@/app/components/githubSignInButton";
import GoogleSignInButton from "@/app/components/googleSignInButton";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {}

export default async function Login() {
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect('/home')
    }
    
    return (
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:pd-14">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-3xl font-semibold text-white">Login</h1>
                <div className="space-y-4 mt-5">
                    <Input type="email" name="email" placeholder="Email" className="bg-[#333] placeholder:test-xs placeholder:text-gray-400 w-full inline-block" />
                    <Button type="submit" variant="destructive" className="w-full bg-[#e50914]">Login</Button>
                </div>
            </form>
            <div className="text-gray-500 text-small mt-2">
                Dont have an account? 
                <Link className="text-white px-3 hover:underline" href={"/sign-up"}>
                    Sign Up now!
                </Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <GithubSignInButton />
                <GoogleSignInButton />
            </div>

        </div>
    )
}