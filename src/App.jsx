import React from 'react';
import { motion } from 'framer-motion';
import { Info, Mail, ExternalLink } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages
import PrivacyPolicy from './PrivacyPolicy';

// Assets
import logo from './assets/logo.png';
import mobileHero from './assets/mobile.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-bg-deep text-white font-sans selection:bg-primary/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-24 flex items-center justify-between px-8 sm:px-20 z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Codino Logo" className="h-10 w-auto" />
          <span className="text-2xl font-semibold tracking-tighter uppercase hidden sm:block">Codino</span>
        </div>
        <div className="flex gap-10">
          {/* Navigation cleaned up as requested */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-xl translate-y-[3px]" />
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ y: 2 }}
              href="https://play.google.com/store/apps/details?id=com.codino_official2.codino"
              target="_blank"
              className="relative block bg-primary text-white text-[0.7rem] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-xl shadow-[0_4px_0_#4c2496] active:shadow-none active:translate-y-[4px] transition-all border border-white/10 hover:brightness-110"
            >
              Get App
            </motion.a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 sm:px-20 pt-32 sm:pt-48 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-medium leading-[0.8] tracking-tighter mb-10 text-white">
              Learn <br />
              <span className="text-gradient">Python.</span> <br />
              <span className="text-white/40">Anytime.</span>
            </h1>

            <p className="text-xl text-text-secondary max-w-md mb-14 leading-relaxed font-normal opacity-80">
              Codino is the most visual way to master Python, designed to elevate your coding skills through a high-end curriculum and real-time knowledge testing.
            </p>

            <div className="space-y-10">
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-medium tracking-tight text-white/90">Get the app now</h3>

                <div className="flex flex-wrap gap-5 items-center">
                  {/* Google Play Button - 3D Pressable & Snappy */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-xl translate-y-[5px]" />
                    <motion.a
                      whileTap={{ y: 5 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      href="https://play.google.com/store/apps/details?id=com.codino_official2.codino"
                      target="_blank"
                      className="relative block flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl border border-white/10 shadow-2xl"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 466 511.98" className="w-7 h-7">
                        <g id="Layer_x0020_1">
                          <path fill="#EA4335" fill-rule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z" />
                          <path fill="#FBBC04" fill-rule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z" />
                          <path fill="#34A853" fill-rule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z" />
                          <path fill="#4285F4" fill-rule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z" />
                        </g>
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] opacity-80 leading-tight">Get it on</span>
                        <span className="text-2xl font-semibold tracking-tighter leading-none">Google Play</span>
                      </div>
                    </motion.a>
                  </div>

                  {/* Status Note */}
                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.03] max-w-sm backdrop-blur-sm">
                    <div className="mt-1">
                      <Info size={20} className="text-primary" />
                    </div>
                    <p className="text-[0.75rem] font-normal leading-relaxed text-text-secondary italic">
                      The link will work when the app goes to production currently in closed testing, will be on production within few days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="relative"
          >
            <div className="absolute -inset-24 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="w-[320px] h-auto p-2 bg-[#111] rounded-[3.5rem] border-[10px] border-[#1A1A1A] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10">
                <img
                  src={mobileHero}
                  alt="Codino App Preview"
                  className="w-full h-full object-cover rounded-[2.8rem]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-8 sm:px-20 py-24 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-12 text-[0.7rem] font-medium text-text-muted uppercase tracking-[0.2em]">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Codino Logo" className="h-8 w-auto grayscale" />
          <span>&copy; 2026 CODINO.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <Link
            to="/privacy"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            Privacy Policy <ExternalLink size={12} />
          </Link>
          <a
            href="mailto:madmaxsecondac@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Mail size={14} className="text-primary" /> madmaxsecondac@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
