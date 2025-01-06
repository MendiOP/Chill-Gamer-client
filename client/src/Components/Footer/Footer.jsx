import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import game1 from "../../assets/game1.avif";
import game2 from "../../assets/game2.png";
import game3 from "../../assets/game3.jpg";
import game4 from "../../assets/game4.jpg";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-gray-100 text-gray-700 dark:bg-faltu dark:text-faltu py-8 flex flex-col items-center justify-center mt-14">
      {/* Logo Section */}
      <div className="mb-8 mx-auto">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <img
            src={logo}
            alt="Chill Gamer Logo"
            className="w-14 h-14 rounded-full"
          />
          <span className="text-3xl font-bold text-center sm:text-left">
            Just Chill & Play
          </span>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-around mb-8 w-full">
        {/* Overview Section */}
        <div className="mb-8 md:mb-0 w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-4">Overview</h3>
          <ul className="space-y-2 text-center">
            <li>About</li>
            <li>Help Center</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Digital Services Act</li>
            <li>Terms of Use</li>
            <li>Cookies Settings</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="mb-8 md:mb-0 w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="https://www.facebook.com/PUBGMOBILE.BD.OFFICIAL"
              aria-label="Facebook"
              target="_blank"
            >
              <FaFacebookF className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/pubgmobile?igsh=MWxubXhwdzRuam4yeg=="
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/pubgmobile?igsh=MWxubXhwdzRuam4yeg=="
              aria-label="Twitter"
              target="_blank"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Explore Other Brands Section */}
        <div className="w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-4">Explore Other Brands</h3>
          <ul className="flex flex-wrap justify-center items-center gap-3 sm:justify-start">
            <li className="w-16 h-16 mb-2">
              <img
                className="w-full h-full rounded-lg"
                src={game1}
                alt="Game 1"
              />
            </li>
            <li className="w-16 h-16 mb-2">
              <img
                className="w-full h-full rounded-lg"
                src={game2}
                alt="Game 2"
              />
            </li>
            <li className="w-16 h-16 mb-2">
              <img
                className="w-full h-full rounded-lg"
                src={game3}
                alt="Game 3"
              />
            </li>
            <li className="w-16 h-16 mb-2">
              <img
                className="w-full h-full rounded-lg"
                src={game4}
                alt="Game 4"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500 mx-auto">
        <p>
          Video and Images from Chill&Chill Corporation.
          <br />
          Every title, data and credits provided by Chillion.
        </p>
        <p className="mt-2">© 2024 GAHOMARASARA, INC. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
