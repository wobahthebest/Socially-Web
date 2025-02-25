import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

const NavBar = async () => {
  const User = await currentUser();
  if (User) await syncUser();

  return (
    <nav className="sticky top-0 border-b w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href={"/"}
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              Socially
            </Link>
          </div>

          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
