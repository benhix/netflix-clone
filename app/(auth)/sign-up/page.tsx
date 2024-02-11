import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleSignInButton from "@/app/components/googleSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function SignUp() { 
    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/home')
    }


    return (
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:pd-14">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
                <div className="space-y-4 mt-5">
                    <Input type="email" autoComplete="off" name="email" placeholder="Email" className="bg-[#333] placeholder:test-xs placeholder:text-gray-400 w-full inline-block" />
                    <Input type="password" autoComplete="off" name="email" placeholder="Password" className="bg-[#333] placeholder:test-xs placeholder:text-gray-400 w-full inline-block" />
                    <Button type="submit" variant="destructive" className="w-full bg-[#e50914]">Sign Up</Button>
                </div>
            </form>
            <div className="text-gray-500 text-small mt-2">
                Already have an account? 
                <Link className="text-white px-3 hover:underline" href={"/login"}>
                    Login now!
                </Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <GoogleSignInButton />
            </div>

        </div>
    )
}