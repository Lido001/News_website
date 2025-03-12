// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="text-center p-4 bg-gray-800 mt-10">
//       © 2025 News World. All Rights Reserved.
//     </footer>
//   );
// };

// export default Footer;

import map_pin from "../assets/map-pin (1).png";
import email from "../assets/mail.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import shield_check from "../assets/shield-check.png";



const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {/* Left: About & Contact Info */}
        <div>
          <h2 className="text-2xl font-bold">News World</h2>
          <p className="mt-2 text-sm">Your trusted source for the latest breaking news and updates.</p>
          <div className="mt-4 space-y-2">
            <ul className="flex flex-col gap-y-3">
              <li className="flex gap-x-3"><img src={map_pin} alt="" /><p>New York, USA</p></li>
              <li className="flex gap-x-3"><img src={email} alt="" /><p>contact@newsworld.com</p></li>
              <li className="flex gap-x-3"><img src={phone} alt="" /><p>+1 234 567 890</p></li>
            </ul>
          </div>
        </div>

        {/* Middle: Social Media & Partners */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="hover:text-gray-200"><img src={linkedin} alt="" /></a>
            <a href="#" className="hover:text-gray-200"><img src={twitter} alt="" /></a>
            <a href="#" className="hover:text-gray-200"><img src={facebook} alt="" /></a>
            <a href="#" className="hover:text-gray-200"><img src={instagram} alt="" /></a>
          </div>

          <h3 className="mt-6 text-lg font-semibold">Official Partners</h3>
          <p className="text-sm mt-2">CNN, BBC, Reuters, Al Jazeera, Bloomberg</p>
        </div>

        {/* Right: Privacy & Corporate Info */}
        <div className="text-right">
          <h3 className="text-lg font-semibold">Legal</h3>
          <p className="text-sm mt-2"><a href="#"><span className="text-white hover:underline">Privacy Policy</span></a></p>
          <p className="text-sm"><a href="#" > <span className="text-white hover:underline">Terms of Service</span></a></p>

          <div className="mt-4 flex items-center justify-end">
            <img className="mr-2" src={shield_check} alt="" />
            <p className="text-sm">Certified Secure</p>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-8 text-center border-t border-white pt-4 text-sm">
        © {new Date().getFullYear()} News World. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

