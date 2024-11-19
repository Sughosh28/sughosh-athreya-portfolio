import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

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
          setIsSending(false)
          setMessage("Thank you for reaching out! I'll get back to you soon.")
          setTimeout(() => {
            setMessage(" ")
          }, 2500);
        },
        (error) => {
          console.log("Error sending message", error.text);
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-5xl lg:text-4xl font-bold text-yellow-500 mb-8">
          Get in Touch
        </h2>
        <p className="text-lg mb-8">Feel free to reach out if you have any questions or just want to connect.</p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          {isSubmitted && (
            <div className="text-green-500 font-semibold mb-4">
              {message}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-yellow-500 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-yellow-500 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-yellow-500 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
