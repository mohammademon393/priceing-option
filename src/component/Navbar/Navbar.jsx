import { Menu, X } from 'lucide-react';
import Links from './Links';
import { useState } from 'react';


const navbarItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" }
];

const Navbar = () => {

  const links = navbarItems.map((raout) => <Links raout={raout} key={raout.id}></Links>);

  const [open, setOpen] = useState(false);

    return (
      <div className="flex justify-between mx-10 mt-5">
        <span onClick={() => setOpen(!open)} className="flex gap-3">
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden text-black"></Menu>
          )}

          <ul className={`md:hidden bg-amber-300 absolute duration-1000
            ${open ? 'top-14' : '-top-40'}
            `}>{links}</ul>

          <h3>Navber</h3>
        </span>

        <ul className="hidden md:flex gap-5">{links}</ul>

        <button className="btn">Sign in</button>
      </div>
    );
};

export default Navbar;