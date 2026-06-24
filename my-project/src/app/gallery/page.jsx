"use client";  // ✅ MUST HAVE AT TOP

import { useState } from "react";
import Link from "next/link";
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const galleryData = {
  categories: ["All", "Classes", "Events", "Workshops", "Projects", "Campus"],
  
  images: [
    {
      id: 1,
      title: "Web Development Class",
      category: "Classes",
      description: "Students learning modern web development technologies",
      date: "2024-06-15",
      location: "Main Campus",
      color: "from-blue-400 to-cyan-400",
      icon: "💻",
    },
    {
      id: 2,
      title: "Data Science Workshop",
      category: "Workshops",
      description: "Hands-on workshop on machine learning with Python",
      date: "2024-06-10",
      location: "Lab 2",
      color: "from-purple-400 to-pink-400",
      icon: "📊",
    },
    {
      id: 3,
      title: "Graduation Ceremony 2024",
      category: "Events",
      description: "Celebrating the success of our graduates",
      date: "2024-05-30",
      location: "Auditorium",
      color: "from-yellow-400 to-orange-400",
      icon: "🎓",
    },
    {
      id: 4,
      title: "Student Project Exhibition",
      category: "Projects",
      description: "Students showcasing their final year projects",
      date: "2024-05-25",
      location: "Exhibition Hall",
      color: "from-green-400 to-emerald-400",
      icon: "🚀",
    },
    {
      id: 5,
      title: "Campus View",
      category: "Campus",
      description: "Modern facilities and learning environment",
      date: "2024-05-20",
      location: "Main Campus",
      color: "from-indigo-400 to-blue-400",
      icon: "🏫",
    },
    {
      id: 6,
      title: "Cyber Security Lab",
      category: "Classes",
      description: "Students practicing ethical hacking techniques",
      date: "2024-06-12",
      location: "Cyber Lab",
      color: "from-red-400 to-rose-400",
      icon: "🔒",
    },
    {
      id: 7,
      title: "Career Fair 2024",
      category: "Events",
      description: "Networking with top tech companies",
      date: "2024-05-28",
      location: "Main Hall",
      color: "from-blue-400 to-purple-400",
      icon: "🤝",
    },
    {
      id: 8,
      title: "Mobile App Development",
      category: "Classes",
      description: "Building cross-platform mobile applications",
      date: "2024-06-08",
      location: "Lab 1",
      color: "from-pink-400 to-rose-400",
      icon: "📱",
    },
    {
      id: 9,
      title: "Cloud Computing Workshop",
      category: "Workshops",
      description: "Hands-on session on AWS cloud services",
      date: "2024-06-05",
      location: "Cloud Lab",
      color: "from-orange-400 to-red-400",
      icon: "☁️",
    },
    {
      id: 10,
      title: "Library Session",
      category: "Campus",
      description: "Students utilizing our digital library resources",
      date: "2024-05-22",
      location: "Digital Library",
      color: "from-teal-400 to-cyan-400",
      icon: "📚",
    },
    {
      id: 11,
      title: "AI Hackathon",
      category: "Events",
      description: "24-hour hackathon on artificial intelligence",
      date: "2024-06-01",
      location: "Hackathon Arena",
      color: "from-violet-400 to-purple-400",
      icon: "🧠",
    },
    {
      id: 12,
      title: "Networking Session",
      category: "Events",
      description: "Students networking with industry professionals",
      date: "2024-05-27",
      location: "Conference Room",
      color: "from-sky-400 to-blue-400",
      icon: "🌐",
    },
  ],
};

// Image Card Component
function ImageCard({ image, onClick }) {
  return (
    <div
      onClick={() => onClick(image)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
    >
      <div className={`w-full aspect-square bg-gradient-to-br ${image.color} flex items-center justify-center`}>
        <div className="text-7xl group-hover:scale-125 transition-transform duration-500">
          {image.icon}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-bold text-lg">{image.title}</h3>
        <p className="text-white/80 text-sm">{image.category}</p>
        <div className="flex items-center gap-3 mt-2 text-white/60 text-xs">
          <span className="flex items-center gap-1">
            <FiCalendar /> {image.date}
          </span>
          <span className="flex items-center gap-1">
            <FiMapPin /> {image.location}
          </span>
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
        {image.category}
      </div>
    </div>
  );
}

// Lightbox Component
function Lightbox({ image, onClose, onPrev, onNext }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition text-3xl"
      >
        <FiX />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 text-white/60 hover:text-white transition text-3xl"
      >
        <FiChevronLeft />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-white/60 hover:text-white transition text-3xl"
      >
        <FiChevronRight />
      </button>

      <div
        className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`bg-gradient-to-br ${image.color} p-12 flex items-center justify-center`}>
          <div className="text-8xl">{image.icon}</div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900">{image.title}</h2>
          <p className="text-gray-600 mt-2">{image.description}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <FiCalendar /> {image.date}
            </span>
            <span className="flex items-center gap-1">
              <FiMapPin /> {image.location}
            </span>
            <span className="flex items-center gap-1">
              <FiUsers /> {image.category}
            </span>
          </div>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Learn More About This Program
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryData.images
      : galleryData.images.filter((img) => img.category === selectedCategory);

  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "unset";
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setLightboxImage(filteredImages[prevIndex]);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setLightboxImage(filteredImages[nextIndex]);
  };

  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            Our <span className="text-blue-600">Moments</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our campus, events, workshops, and the vibrant learning
            community at CORVIT+.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">12+</div>
            <div className="text-sm text-gray-500">Photos</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-500">Categories</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">20+</div>
            <div className="text-sm text-gray-500">Events</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-500">Students</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {galleryData.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={openLightbox}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-gray-900">
              No Images Found
            </h3>
            <p className="text-gray-600 mt-2">
              No images available in this category yet.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Want to Be Part of These Moments?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join CORVIT+ and become part of our vibrant learning community.
            Your journey starts here!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition hover:shadow-lg"
            >
              Enroll Now
            </Link>
            <Link
              href="/courses"
              className="inline-block bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition border border-white/30"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </main>
  );
}