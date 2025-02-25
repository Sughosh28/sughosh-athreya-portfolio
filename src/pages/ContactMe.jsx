import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const loadingBarRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    loadingBarRef.current?.continuousStart();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toast.success(
            `Message sent successfully! I'll get back to you soon.`,
            {
              icon: "🚀",
            }
          );
          loadingBarRef.current?.complete();
          setIsSending(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Message sending failed. Please try again.");
          loadingBarRef.current?.complete();
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <LoadingBar
        color="#e9e658"
        ref={loadingBarRef}
        shadow={true}
        style={{ height: "6px" }}
      />
      <section
        id="contact"
        className="py-20 bg-slate-950 min-h-screen flex items-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-800/10"></div>

        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-400 font-medium leading-relaxed">
              Have a project in mind? Let's create something amazing together.{" "}
              <br />I also offer freelancing services. Get in touch for a free
              consultation!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 backdrop-blur-lg bg-slate-900/50 p-8 rounded-2xl shadow-2xl border border-slate-800"
          >
            <div className="group">
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-950/50 text-white rounded-lg border border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-950/50 text-white rounded-lg border border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-950/50 text-white rounded-lg border border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-300 min-h-[150px] resize-y"
                placeholder="Send me a message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 px-6 bg-slate-800 text-white rounded-lg font-bold transform hover:scale-[1.02] hover:bg-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-70"
            >
              {isSending ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        <ToastContainer position="bottom-right" theme="dark" autoClose={2500} />
      </section>
    </>
  );
};

export default ContactMe;
