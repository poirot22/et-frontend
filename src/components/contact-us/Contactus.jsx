import React from "react";
import { useSpring, animated } from "react-spring";

export default function ContactUs() {
  // Define fade-in animation for contact information
  const infoAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  // Define fade-in animation for contact form
  const formAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800, delay: 300 },
  });

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Animated Contact Information */}
          <animated.div style={infoAnimation} className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <ul className="list-disc ml-6">
              <li className="mb-2">
                <strong>Email:</strong> info@example.com
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li>
                <strong>Address:</strong> 123 College Street, Cityville, State,
                ZIP
              </li>
            </ul>
          </animated.div>

          {/* Animated Contact Form */}
          <animated.div style={formAnimation}>
            <h2 className="text-2xl font-semibold">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </animated.div>
        </div>
      </div>
    </div>
  );
}
