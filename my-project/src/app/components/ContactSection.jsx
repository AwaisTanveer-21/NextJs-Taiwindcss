"use client";

import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Visit Us",
      details: "123 Main Street, Rawalpindi, Pakistan",
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Call Us",
      details: "+92 300 0000000",
      extra: "+92 300 1111111",
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email Us",
      details: "info@corvit.com",
      extra: "support@corvit.com",
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Working Hours",
      details: "Monday - Saturday: 9:00 AM - 8:00 PM",
      extra: "Sunday: Closed",
    },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: "#", color: "hover:bg-blue-600" },
    { icon: <FiTwitter />, url: "#", color: "hover:bg-blue-400" },
    { icon: <FiInstagram />, url: "#", color: "hover:bg-pink-600" },
    { icon: <FiLinkedin />, url: "#", color: "hover:bg-blue-700" },
    { icon: <FiYoutube />, url: "#", color: "hover:bg-red-600" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all hover:bg-white border border-gray-100 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{info.details}</p>
                    {info.extra && (
                      <p className="text-gray-500 text-xs">{info.extra}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-sm mb-3">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`bg-white p-2 rounded-full shadow-sm hover:text-white transition-all ${social.color} hover:scale-110`}
                    aria-label="Social media"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <FiCheckCircle className="text-4xl text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white`}
                        placeholder="+92 300 0000000"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.subject ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white`}
                        placeholder="Course Inquiry"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <FiAlertCircle /> {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white resize-none`}
                      placeholder="Write your message here..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <FiAlertCircle /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-200"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
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
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.208040189583!2d73.0476766!3d33.6944068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df955b3e363cd3%3A0x4bfa629b9e3592ea!2sRawalpindi!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="CORVIT+ Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}