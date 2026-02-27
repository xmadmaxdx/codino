import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages
import PrivacyPolicy from './PrivacyPolicy';

// Assets
import logo from './assets/logo.png';
import mobileHero from './assets/mobile.png';

const BackgroundDecor = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-10 isolate">
    {/* Floating Stars / Sparkles */}
    <motion.div
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[15%] left-[10%] text-primary/30"
    >
      <Sparkles size={32} />
    </motion.div>

    <motion.div
      animate={{
        y: [0, 30, 0],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-[40%] right-[15%] text-primary/20"
    >
      <Sparkles size={48} rotate={45} />
    </motion.div>

    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-[20%] left-[20%] text-white/10"
    >
      <Sparkles size={24} />
    </motion.div>

    {/* Technical Geometric Lines */}
    <div className="absolute top-[20%] right-[10%] w-[1px] h-64 bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-45" />
    <div className="absolute bottom-[30%] left-[5%] w-[1px] h-96 bg-gradient-to-b from-transparent via-primary/10 to-transparent -rotate-12" />

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full scale-[1.5]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.01] rounded-full scale-[1.2]" />
  </div>
);

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-bg-deep text-white font-sans selection:bg-primary/30 overflow-x-hidden">
      <BackgroundDecor />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">

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


                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone Block */}
          <div className="relative">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="w-[340px] aspect-[1/2] relative pointer-events-none select-none">
                <AnimatePresence>
                  {!isLoaded && (
                    <motion.div
                      key="skeleton"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 bg-white/5 rounded-[3rem] overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_100px_rgba(255,255,255,0.05)]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.img
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0.98
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  src={mobileHero}
                  alt="Codino App Preview"
                  className="w-full h-auto object-contain relative z-20"
                  onLoad={() => setIsLoaded(true)}
                  fetchpriority="high"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - Bento Style Premium Layout */}
        <section className="mt-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4">Common Questions</h2>
            <p className="text-text-secondary uppercase tracking-[0.3em] text-[0.6rem] font-bold">Transparency & Accessibility</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {/* Free Status - Large Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] group-hover:bg-primary/10 transition-colors" />
              <div>
                <h3 className="text-2xl font-medium mb-6">Is Codino actually 100% free?</h3>
                <p className="text-text-secondary leading-relaxed max-w-lg">
                  Absolutely. We believe high-quality coding education should be accessible to everyone. Learn Python, complete every lesson, and earn your certificate—all at zero cost. No hidden fees, no subscriptions.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-3 text-[0.65rem] font-bold tracking-[0.2em] text-primary uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> No Strings Attached
              </div>
            </motion.div>

            {/* Certificate - Small Square Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between"
            >
              <h3 className="text-2xl font-medium mb-6 leading-tight">Can I get a certificate?</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Yes! Upon finishing the full curriculum, you'll receive a professional certificate to showcase your Python mastery.
              </p>
            </motion.div>

            {/* Offline IDE - Narrow Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col gap-6"
            >
              <h3 className="text-2xl font-medium leading-tight">Does it work offline?</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Codino features a full-fledged offline Python IDE. Write, test, and execute code anywhere in the world—even with zero internet.
              </p>
            </motion.div>

            {/* Curriculum - Wide Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 p-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/[0.03] to-transparent border border-white/5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-medium mb-6">What can I learn?</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Our high-end curriculum covers everything from Python fundamentals and logic down to advanced data structures and professional practices.
                </p>
              </div>
              <div className="mt-6 text-[0.6rem] text-white/30 tracking-widest uppercase font-bold text-right pt-4 border-t border-white/5">
                Comprehensive Syllabus
              </div>
            </motion.div>
          </div>
        </section>
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
