"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiArrowRight,
} from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="CORVIT+"
                width={50}
                height={60}
                className="rounded"
              />
              <div>
                <h2 className="text-xl font-bold text-white">CORVIT+</h2>
                <p className="text-xs text-gray-400">Institute of Technology</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Empowering future tech leaders with industry-relevant IT education 
              and practical skills development since 2009.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FiFacebook className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <FiTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <FiInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <FiYoutube className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/web-development" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/courses/mobile-app" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/courses/data-science" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Data Science & AI
                </Link>
              </li>
              <li>
                <Link href="/courses/cloud-computing" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link href="/courses/cyber-security" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link href="/courses/ai-ml" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-blue-400 mt-0.5" />
                <span className="text-sm text-gray-400">
                  123 Main Street,<br />
                  Rawalpindi, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-blue-400" />
                <span className="text-sm text-gray-400">+92 300 0000000</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-blue-400" />
                <span className="text-sm text-gray-400">info@corvit.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FiClock className="text-blue-400" />
                <span className="text-sm text-gray-400">Mon-Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-medium text-sm mb-2">
                Subscribe to Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-sm text-white placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors text-white flex items-center gap-1 text-sm"
                >
                  Subscribe
                  <FiArrowRight className="text-xs" />
                </button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-xs mt-2">
                  ✅ Subscribed successfully!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CORVIT+ Institute of Technology. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}