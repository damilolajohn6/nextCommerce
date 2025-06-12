import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Nav from "./Nav";
import MobileMenu from "./mobile-menu"; // 👈 Import here
import Topbar from "./Topbar";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b bg-slate-50 shadow-lg ">
      <Container>
        <Topbar />
        <div className="relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Desktop Navs */}
          <div className="hidden lg:flex items-center gap-10 space-x-4">
            <MainNav data={categories} />
            <Nav />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-x-4">
            <NavbarActions />
            <MobileMenu categories={categories} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
