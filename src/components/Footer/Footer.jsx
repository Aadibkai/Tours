import React from "react";
import FooterLogo from "../../assets/travel.png";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-black py-10 relative overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container mx-auto ">
        <div className="flex flex-row justify-center items-center w-[100%] gap-8 px-50">
          {/* Logo and Company Information */}

          <div className="flex gap-2 justify-center items-center">
            <img
              src={FooterLogo}
              alt="TravelTime"
              className="h-[8rem] w-auto "
            />

            <div className="text-center md:text-left w-[50%] px-8">
              <h1 className="text-xl sm:text-3xl font-bold mt-2">TravelTime</h1>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facere ab hic accusamus omnis dolor voluptatibus illo, tempore
                eum tenetur.
              </p>
              <div className="flex flex-col mt-4">
                <div className="flex items-center">
                  <FaLocationArrow className="mr-2" />
                  <p>Pune, Maharashtra</p>
                </div>
                <div className="flex items-center mt-1">
                  <FaMobileAlt className="mr-2" />
                  <p>+91 8007633650</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="w-[50%] ">
            <h1 className="text-xl font-bold mb-3">Important Links</h1>
            <ul className="flex flex-col gap-2">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="hover:text-primary transition duration-300"
                >
                  <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
