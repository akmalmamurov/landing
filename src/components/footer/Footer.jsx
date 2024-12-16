import { Link } from "react-scroll";
import { Container } from "../container";
import { navLinks } from "@/data";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-footerBg pt-[68px] pb-8">
      <Container>
        <div className="flex justify-between items-center mb-[47px]">
          <p className="font-medium text-sm text-[#939EA4] md:block hidden">
            ©2023 Yourcompany
          </p>
          <h2 className="font-black text-[26px] text-titleColor">Landing</h2>
          <button className="Btn">Purchase Now</button>
        </div>
        <div className="border-b border-[#CDD1D4] mb-5"></div>
        {/* footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ul className="flex gap-[60px] md:mb-0 mb-5">
            {navLinks.map(({ id, title, link }) => (
              <li
                key={id}
                className="cursor-pointer text-velvetRobe font-medium text-sm tracking-wide "
              >
                <Link
                  activeClass="footerActive"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-[30px]">
            <div className="iconBox group">
              <FaFacebookF className="icon" />
            </div>
            <div className="iconBox group">
              <FaLinkedinIn className="icon" />
            </div>
            <div className="iconBox group">
              <FaTwitter className="icon" />
            </div>
            <div className="iconBox group">
              <FaYoutube className="icon" />
            </div>
            <div className="iconBox group">
              <FaInstagram className="icon" />
            </div>
          </div>
        </div>
        <p className="font-medium text-sm text-[#939EA4] md:hidden block mt-5 text-center">
            ©2023 Yourcompany
          </p>
      </Container>
    </footer>
  );
};

export default Footer;
