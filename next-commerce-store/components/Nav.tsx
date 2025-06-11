import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-6 font-semibold">
      <Link href="/" className="hover:text-black text-neutral-600">
        Home
      </Link>
      <Link href="/services" className="hover:text-black text-neutral-600">
        Services
      </Link>
      <Link href="/resource" className="hover:text-black text-neutral-600">
        Resource
      </Link>
      <Link href="/about" className="hover:text-black text-neutral-600">
        About Us
      </Link>
    </nav>
  );
};

export default Nav;
