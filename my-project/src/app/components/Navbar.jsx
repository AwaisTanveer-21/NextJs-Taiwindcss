"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [activeSection, setActiveSection] = useState("");

  // Toggle dropdown on mobile
  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "courses", "features", "about"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu data with section IDs
  const menuItems = [
    {
      label: "Home",
      href: "/",
      sectionId: "home",
    },
    {
      label: "About Us",
      href: "/about",
      sectionId: "about",
    },
    {
      label: "Courses",
      href: "#courses",
      sectionId: "courses",
      subItems: [
        { label: "Web Development", href: "/courses/web-development" },
        { label: "Mobile App Development", href: "/courses/mobile-app" },
        { label: "Data Science", href: "/courses/data-science" },
        { label: "Cloud Computing", href: "/courses/cloud-computing" },
        { label: "Cyber Security", href: "/courses/cyber-security" },
        { label: "AI & Machine Learning", href: "/courses/ai-ml" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      subItems: [
        { label: "IT Consulting", href: "/services/consulting" },
        { label: "Software Development", href: "/services/software" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "Network Solutions", href: "/services/network" },
      ],
    },
    {
      label: "Class Schedule",
      href: "/schedule",
    },
    {
      label: "Corporate Trainings",
      href: "/training",
      subItems: [
        { label: "On-site Training", href: "/training/onsite" },
        { label: "Online Training", href: "/training/online" },
        { label: "Custom Programs", href: "/training/custom" },
      ],
    },
    {
      label: "Fee",
      href: "/fee",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  // Handle navigation click
  const handleNavClick = (e, item) => {
    if (item.sectionId) {
      e.preventDefault();
      scrollToSection(item.sectionId);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
      {/* TOP BAR */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4 flex justify-between capitalize">
        <p className="mx-5">📍 Rawalpindi, Pakistan | 📧 info@corvit.com</p>
        <p>Call: +92 300 0000000</p>
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={65}
            height={95}
            className="rounded"
          />
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-blue-700">CORVIT+</h1>
            <p className="text-[10px] text-gray-500">Institute of Technology</p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-4 text-sm font-medium text-black">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              {item.subItems ? (
                <>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`hover:text-blue-600 flex items-center gap-1 ${
                      activeSection === item.sectionId ? "text-blue-600" : ""
                    }`}
                  >
                    {item.label}
                    <FiChevronDown className="text-xs" />
                  </Link>
                  {/* Desktop Dropdown */}
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-lg rounded-md border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.subItems.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-sm"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`hover:text-blue-600 ${
                    activeSection === item.sectionId ? "text-blue-600" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-2xl"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-3 max-h-[80vh] overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center justify-between w-full text-left py-2 font-medium hover:text-blue-600"
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.sectionId) {
                          scrollToSection(item.sectionId);
                        }
                      }}
                      className="flex-1"
                    >
                      {item.label}
                    </Link>
                    {openDropdowns[index] ? (
                      <FiChevronDown className="text-xs" />
                    ) : (
                      <FiChevronRight className="text-xs" />
                    )}
                  </button>
                  {openDropdowns[index] && (
                    <div className="ml-4 space-y-2 border-l-2 border-blue-200 pl-4">
                      {item.subItems.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sub.href}
                          className="block py-1.5 text-sm text-gray-600 hover:text-blue-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 hover:text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="block bg-red-600 text-white text-center py-2 rounded-md"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}