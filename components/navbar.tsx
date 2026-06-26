import Link from "next/link";
import NavItems from "./nav-items";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
          <span className="text-white font-mono font-bold text-sm">LF</span>
        </div>
        <span className="font-bold text-lg">LearnFlow</span>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems />
        {/* Replaced with real Clerk auth on Day 2 */}
        <Link href="/sign-in">
          <button className="btn-signin">Sign In</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
