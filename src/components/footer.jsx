import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>Department of Emerging Technologies</p>
          <p className="text-sm">Copyright&#169;2024</p>
        </div>

        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>CVR College of Engineering</p>
          <p className="text-sm">Vastunagar, Mangalpalli (V), Ibrahimpatnam (M),</p>
          <p className="text-sm">Rangareddy (D), Telangana 501 510</p>
        </div>

        <div className="text-center md:text-left">
          <p>Quick Links</p>
          <a href="#" className="text-blue-400 hover:text-blue-600">Developers</a>
        </div>
      </div>
    </div>
  );
}
