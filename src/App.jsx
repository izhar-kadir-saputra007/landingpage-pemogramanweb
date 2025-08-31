"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import {
  Menu,
  X,
  MessageCircle,
  Users,
  BarChart3,
  Check,
  Star,
  ArrowRight,
  Play,
  Shield,
  Zap,
  Clock,
  Activity,
  Lightbulb,
} from "lucide-react";
import RotatingText from "./components/RotatingText";
import Avatar from "./assets/man-and-robot.json";
import Robot from "./assets/robot-work.json";
import { mark } from "framer-motion/client";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-primary">
                  NeuroVolt
                </span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Fitur
                </a>
                <a
                  href="#benefit"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Kategori
                </a>

                <a
                  href="#contact"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Kontak
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-foreground hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Fitur
              </a>
              <a
                href="#benefit"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Kategori
              </a>

              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Kontak
              </a>
              <div className="px-3 py-2 space-y-2">
                <button className="block w-full text-left text-foreground hover:text-primary">
                  Sign In
                </button>
                <button className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                <span className="block">Seleksi & Monitoring Bantuan</span>
                <span className="block text-primary">
                  <div className="flex justify-center md:justify-start pt-6">
                    <RotatingText
                      texts={[
                        "Tepat Sasaran dengan AI",
                        "Cepat & Transparan",
                        "Akurat Berbasis Data",
                      ]}
                      mainClassName="font-bold overflow-hidden justify-center inline-block"
                      style={{
                        display: "inline-block", // penting biar bg hanya selebar teks
                        color: "#b45309",
                        backgroundColor: "#fde68a",
                        padding: "2px 6px",
                        borderRadius: "6px",
                      }}
                      staggerFrom="last"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.03}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2500}
                    />
                  </div>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Sistem cerdas yang membantu pemerintah/organisasi menilai
                kelayakan penerima bantuan secara objektif dan memantau kondisi
                ekonomi penerima secara berkala.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  Get Started <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full flex justify-center">
                <Lottie
                  animationData={Avatar}
                  loop={true}
                  className="w-250 h-250 sm:w-350 sm:h-350 md:w-350 md:h-350 lg:w-[650px] lg:h-[400px] drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              id="feature-1"
              data-animate
              className={`bg-card p-8 rounded-2xl border border-border transition-all duration-700 ${
                isVisible["feature-1"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Keunikan
              </h3>
              <p className="text-muted-foreground text-lg">
                Tidak hanya fokus pada tahap seleksi awal, tetapi juga menjaga
                agar bantuan tetap efektif melalui pemantauan periodik.
              </p>
            </motion.div>

            <motion.div
              id="feature-2"
              data-animate
              className={`bg-card p-8 rounded-2xl border border-border transition-all duration-700 delay-200 ${
                isVisible["feature-2"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Inovasi
              </h3>
              <p className="text-muted-foreground text-lg">
                Sistem AI yang tidak hanya menilai, tetapi juga memberikan
                rekomendasi tepat berdasarkan kondisi terkini penerima.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              id="product-info"
              data-animate
              className={`transition-all duration-700 ${
                isVisible["product-info"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                ✨ Nikmati fitur unggulan yang bikin kamu terpukau 🤩
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Seleksi Berbasis AI
                    </h4>
                    <p className="text-muted-foreground">
                      Streamline your support workflow with intelligent ticket
                      routing and priority management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Dashboard Transparan
                    </h4>
                    <p className="text-muted-foreground">
                      Admin dapat memantau hasil seleksi dan perkembangan
                      penerima bantuan dengan mudah.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Monitoring Pendapatan
                    </h4>
                    <p className="text-muted-foreground">
                      Grafik perubahan pendapatan penerima untuk memastikan
                      bantuan selalu relevan.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="product-mockup"
              data-animate
              className={`transition-all duration-700 delay-300 ${
                isVisible["product-mockup"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-card rounded-2xl p-6 shadow-2xl border border-border">
                <div className="bg-primary/5 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-4 bg-primary/10 rounded w-1/2"></div>
                    <div className="h-4 bg-primary/20 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground p-3 rounded-lg text-sm">
                  Dashboard dukungan dengan metrik yang selalu diperbarui
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              id="mobile-mockup"
              data-animate
              className={`order-2 lg:order-1 transition-all duration-700 ${
                isVisible["mobile-mockup"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
               <div className="w-full flex justify-center">
                <Lottie
                  animationData={Robot}
                  loop={true}
                  className="w-250 h-250 sm:w-350 sm:h-350 md:w-350 md:h-350 lg:w-[650px] lg:h-[400px] drop-shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                />
              </div>
            
            </motion.div>

            <motion.div
              id="mobile-info"
              data-animate
              className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
                isVisible["mobile-info"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Cara Kerja Sistem
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Sistem seleksi dan monitoring bantuan sosial ini bekerja secara
                terstruktur dengan memanfaatkan kecerdasan buatan untuk
                memastikan bantuan lebih tepat sasaran.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <span className="text-foreground">
                    Input Data – Admin memasukkan data calon penerima
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-10 h-10 text-primary" />
                  <span className="text-foreground">
                    Seleksi AI – Sistem mengevaluasi kelayakan secara objektif
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-10 h-10 text-primary" />
                  <span className="text-foreground">
                    Dashboard Hasil – Menampilkan hasil seleksi dalam bentuk
                    skor kelayakan
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-10 h-10 text-primary" />
                  <span className="text-foreground">
                    Monitoring – Grafik perubahan pendapatan penerima secara
                    berkala
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-10 h-10 text-primary" />
                  <span className="text-foreground">
                    Rekomendasi – AI memberikan insight untuk keputusan
                    selanjutnya
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              id="analytics-info"
              data-animate
              className={`transition-all duration-700 ${
                isVisible["analytics-info"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-4xl font-bold mb-6">
                Perkenalkan Fitur Unggulan untuk Seleksi Bantuan yang Lebih
                Tepat & Efektif
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Alat analisis cerdas dan pemantauan seleksi membantu Anda
                memahami kebutuhan penerima bantuan serta mengoptimalkan proses
                penyaluran agar lebih transparan dan efisien.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </motion.div>

            <motion.div
              id="analytics-mockup"
              data-animate
              className={`transition-all duration-700 delay-300 ${
                isVisible["analytics-mockup"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <img
                src="/analytics-dashboard-with-charts-graphs-and-perform.png"
                alt="Analytics dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="benefit" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="benefit-header"
            data-animate
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible["benefit-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Kategori Penerima Bantuan
            </h2>
            <p className="text-xl text-muted-foreground">
              Sistem AI membagi calon penerima berdasarkan kondisi ekonomi agar
              bantuan lebih tepat sasaran
            </p>
          </motion.div>

          <div className="kategori grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Kategori Masyarakat Miskin */}
            <motion.div
              id="miskin"
              data-animate
              className={`bg-card p-8 rounded-2xl border border-border transition-all duration-700 ${
                isVisible["miskin"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  Masyarakat Miskin
                </h3>
                <p className="text-muted-foreground mb-4">
                  Tetap menerima bantuan penuh sesuai kriteria program
                  pemerintah.
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">
                    Pendapatan di bawah standar
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">
                    Jumlah tanggungan tinggi
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">
                    Layak menerima bantuan
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Kategori Menengah */}
            <motion.div
              id="menengah"
              data-animate
              className={`bg-card p-8 rounded-2xl border-2 border-primary relative transition-all duration-700 delay-200 ${
                isVisible["menengah"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Perlu Evaluasi
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  Masyarakat Menengah
                </h3>
                <p className="text-muted-foreground mb-4">
                  Pendapatan mulai meningkat → dilakukan monitoring ulang untuk
                  memastikan kelayakan.
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">
                    Pendapatan mulai stabil
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">
                    Bantuan bisa dikurangi
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">
                    Dievaluasi secara berkala
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 NeuroVolt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
