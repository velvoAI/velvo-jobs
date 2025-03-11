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
      <Link href="/login">
       <h1>Login </h1>
        </Link> <Link href="/signup">
       <h1>Sign up </h1>
        </Link>
        
        <ModeToggle />
      </div>
    </div>
  );
}
