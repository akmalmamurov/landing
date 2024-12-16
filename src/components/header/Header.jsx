import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { Container } from "../container";
import { navLinks } from "@/data";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="sticky top-0 z-10 py-3 bg-white/95">
      <Container>
        {/* nav links */}
        <div className="flex items-center justify-between ">
          <ul className="hidden gap-8 lgl:flex">
            {navLinks.map(({ id, title, link }) => (
              <li
                key={id}
                className="cursor-pointer text-navColor/80 font-medium text-sm tracking-wide hover:text-navColor/75 hover:-translate-y-1 duration-300"
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* logo */}
          <h2 className="font-black text-[26px] text-titleColor">Landing</h2>
          <button className="bg-bgBlue w-[160px] h-[26px]  justify-center items-center capitalize font-medium text-white text-sm hover:bg-bgBlue/90  duration-300 lg:flex hidden">
            Buy Now
          </button>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center justify-center w-10 h-10 text-xl text-linkColor rounded-full lgl:hidden "
          >
            <FiMenu />
          </span>
          {/* mobile menu */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-1/2 h-screen overflow-scroll absolute top-0 right-0 bg-white p-4 scrollbar-hide rounded-l-3xl shadow-2xl"
                ref={menuRef}
              >
                <div className="relative flex flex-col items-start">
                  <ul className="flex flex-col gap-3 mt-4">
                    {navLinks.map(({ id, title, link }) => (
                      <li
                        key={id}
                        className="cursor-pointer text-navColor/90 font-normal text-sm tracking-wide hover:text-navColor/75  duration-300"
                      >
                        <Link
                          activeClass="active"
                          to={link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={handleCloseMenu}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <span
                    onClick={handleCloseMenu}
                    className="absolute right-4 top-4 text-2xl cursor-pointer text-linkColor"
                  >
                    <MdClose />
                  </span>
                </div>
                <button className="bg-bgBlue w-full h-[26px] flex justify-center items-center capitalize font-medium text-white text-sm hover:bg-bgBlue/90  duration-300 mt-4">
                  Buy Now
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
