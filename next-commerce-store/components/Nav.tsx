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
      <Link href="/about" className="hover:text-black text-neutral-600">
        About Us
      </Link>
      <Link href="/shop" className="hover:text-black text-neutral-600">
        Shop
      </Link>
      <Link href="/contact" className="hover:text-black text-neutral-600">
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
