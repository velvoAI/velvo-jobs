import NavBar from "@/components/NavBar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="md:h-screen">
      <div className=" fixed z-40 w-full">
        <NavBar />
      </div>
      <div className="md:h-screen ">
        <BackgroundBeamsWithCollision>
          <div className="text-2xl relative z-20 md:text-4xl  lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            <div className="relative mx-auto inline-block w-max   [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] ">
              <div className="absolute  text-4xl md:text-5xl  lg:text-7xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Job Hunting Made Easy</span>
              </div>
              <div className="relative  text-4xl md:text-5xl  lg:text-7xl bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className=""> Job Hunting Made Easy</span>
              </div>
            </div>
            <br />
            <div className="pt-3 text-gray-700 md:text-2xl text-2xl  lg:text-4xl">
              Find, Apply & Grow with{" "}
              <Link href="/user/jobs">
                <span className=" px-2 hover:text-gray-500 text-purple-900">
                  Velvo
                </span>
              </Link>
              Jobs!
              <div className="flex w-full max-w-sm items-center space-x-2 mx-auto mt-4 pt-8 font-normal tracking-normal"> 
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
}
