import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

export const metadata = {
  title: "CORVIT+ - Institute of Technology",
  description: "Pakistan's leading IT education institute offering courses in Web Development, Data Science, AI, Cloud Computing, and more.",
  keywords: "IT education, technology institute, courses, Pakistan, web development, data science",
  authors: [{ name: "CORVIT+" }],
  openGraph: {
    title: "CORVIT+ - Institute of Technology",
    description: "Empowering future tech leaders with industry-relevant IT education.",
    url: "https://corvit.com",
    siteName: "CORVIT+",
    locale: "en_US",
    type: "website",
  },
};

// ✅ YAHAN PAR children KO PROPERLY DEFINE KAREIN
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}