import React, { useState, useEffect } from "react";
import "./LoginPage.css"; // Import CSS file for custom styles
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "", // Added password field
  });

  const [token, setToken] = useState("");
  const [otp, setOtp] = useState(""); // State for OTP
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      setIsLoggedIn(true);
      navigate("/adminPortal?isAccessedByAdmin=true");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateOTP = () => {
    // Generate a random 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);

    // Send the OTP to the user via email
    const emailParams = {
      to_email: formData.email,
      otp: generatedOtp,
      from_name: "Admin Portal",
    };

    // Send email using EmailJS

    emailjs
      .send(
        "service_4h24m6f", // Service ID from EmailJS dashboard
        "template_nvgh5fc", // Template ID from EmailJS dashboard

        emailParams,

        "2fjwtkkub4ypg6Z8x" // User ID from EmailJS dashboard
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },

        (error) => {
          console.error("Error sending email:", error.text);
        }
      );

    console.log("Generated OTP:", generatedOtp);
    setOtp(generatedOtp.toString());
  };

  const handleOTPVerification = () => {
    // Verify OTP logic here
    // For simplicity, let's compare the entered OTP with the generated one
    if (formData.otp === otp) {
      // OTP verification successful
      // Proceed with desired action (e.g., grant access to admin interface)
      toast.success("OTP verified successfully");
      localStorage.setItem("admin", JSON.stringify({ token }));
      setIsLoggedIn(true); // Set isLoggedIn to true after OTP verification
      navigate("/adminPortal?isAccessedByAdmin=true");
    } else {
      // Incorrect OTP entered
      // Display error message or handle accordingly
      toast.error("Incorrect OTP entered.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        // Assuming you have an API endpoint at localhost:9000/verifyAdmin
        const response = await axios
          .post("http://localhost:9000/verifyAdmin", formData)
          .then((response) => {
            console.log(response.data);
            if (response.data.status === 200) {
              setToken(response.data.token);
              generateOTP();
              setIsLoggedIn(true);
            } else {
              // window.alert("Invalid credentials");
              // window.location.reload();
            }
          });
      } catch (error) {
        console.error("Error:", error);
        // Handle error or display error message
      }
    }
  };

  useEffect(() => {
    const animateText = () => {
      const text = "Welcome to Admin Portal";
      const typingDelay = 100; // Time delay between typing each letter
      let index = 0;
      const typingElement = document.getElementById("typing-animation");
      
      if (typingElement) {
        const textAnimation = setInterval(() => {
          const animatedText = text.slice(0, index);
          typingElement.innerText = animatedText;
          index++;
  
          if (index > text.length) {
            clearInterval(textAnimation);
          }
        }, typingDelay);
      }
    };
  
    animateText();
  
    return () => clearInterval(animateText);
  }, []);
  

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Left half of the screen with animation */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            <span id="typing-animation" className="typing-animation"></span>
          </h2>
        </div>
      </div>
      {/* Right half of the screen with login form */}
      <div
        className={`w-full lg:w-1/2 flex justify-center items-center ${
          isLoggedIn ? "hidden" : "block"
        }`}
      >
        <div className="max-w-md w-full lg:max-w-lg bg-white p-8 rounded shadow-lg">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">
            Authorize yourself to Access Admin Interface
          </h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {/* OTP input field and verify button */}
      <div
        className={`w-full lg:w-1/2 flex justify-center items-center ${
          isLoggedIn ? "block" : "hidden"
        }`}
      >
        <div className="max-w-md w-full lg:max-w-lg bg-white p-8 rounded shadow-lg">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">
            Verify OTP
          </h2>
          <form className="space-y-6" onSubmit={handleOTPVerification}>
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                autoComplete="otp"
                required
                value={formData.otp}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 text-gray-900"
                placeholder="Enter the OTP sent to your email"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
