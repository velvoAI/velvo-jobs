import Link from "next/link";
import { NavigationMenuLeft } from "./Navigation-menu";
import { ModeToggle } from "./themeToggle";

export default function NavBar() {
  return (
    <div className="md:flex md:justify-between md:items-center px-20 py-4">
      <div>
        <NavigationMenuLeft />
      </div>
      <div className="flex items-center gap-8 px-2">
      <div>
      <Link href="/login">
       <h1>Login </h1>
       </Link> 
      </div>
       <div className=" font-medium border-2 border-gray-800 rounded-md px-4 py-2 hover:bg-violet-100 cursor-pointer">
       <Link href="/signup">
       <h1 >Sign up </h1>
        </Link>
       </div>
        
        <ModeToggle />
      </div>
    </div>
  );
}
