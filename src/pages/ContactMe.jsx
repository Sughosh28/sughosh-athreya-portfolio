import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from "react-top-loading-bar";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const loadingBarRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Message sent successfully", result.text);
          setIsSubmitted(true);
          setIsSending(false);
          toast.success(`Thank you for reaching out! I'll get back to you soon.`);
          if (loadingBarRef.current) {
            loadingBarRef.current.complete();
          }
          setTimeout(() => {
            setMessage(" ");
          }, 2500);
        },
        (error) => {
          console.log("Error sending message", error.text);
          setIsSending(false);
          toast.error("Failed to send the message. Please try again later.");
          if (loadingBarRef.current) {
            loadingBarRef.current.complete();
          }
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <LoadingBar color="#facc15" ref={loadingBarRef} shadow={true} />
      <section id="contact" className="py-20 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Feel free to reach out if you have any questions or just want to connect. I'm always excited to collaborate!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-yellow-200">
            {isSubmitted && (
              <div className="text-green-600 font-semibold mb-6 text-center">
                {message}
              </div>
            )}
            <div className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-200">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/50 text-gray-800 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Full Name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-200">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/50 text-gray-800 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Email"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-200">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/50 text-gray-800 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 min-h-[150px]"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg font-bold transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 shadow-lg"
                disabled={isSending}
              >
                {isSending ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </>
  );
};

export default ContactMe;
