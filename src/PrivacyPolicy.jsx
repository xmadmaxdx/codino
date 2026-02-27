import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <motion.div
            animate={{
                backgroundColor: isDark ? "#141414" : "#FFFFFF",
                color: isDark ? "#FFFFFF" : "#1A1A1A"
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="min-h-screen font-sans selection:bg-primary/30 origin-top"
        >
            <nav className={`fixed top-0 left-0 right-0 h-24 flex items-center justify-between px-8 sm:px-20 z-50 transition-colors duration-500 ${isDark ? "bg-[#141414]/90 border-white/5" : "bg-white/90 border-black/5"} border-b`}>
                <Link to="/" className={`flex items-center gap-2 ${isDark ? "text-text-secondary hover:text-white" : "text-gray-500 hover:text-black"} transition-colors group text-sm uppercase tracking-widest font-medium`}>
                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`p-3 rounded-full transition-all duration-300 ${isDark ? "bg-white/5 hover:bg-white/10 text-primary" : "bg-black/5 hover:bg-black/10 text-primary"} active:scale-95`}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isDark ? 'dark' : 'light'}
                            initial={{ y: 10, opacity: 0, rotate: -45 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -10, opacity: 0, rotate: 45 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.div>
                    </AnimatePresence>
                </button>
            </nav>

            <main className="max-w-4xl mx-auto px-8 sm:px-20 pt-40 pb-20">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl font-medium mb-4 tracking-tight text-gradient"
                >
                    Privacy Policy for Codino
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className={`mb-16 font-normal max-w-2xl px-1 transition-colors duration-500 ${isDark ? "text-text-secondary/80" : "text-gray-500"}`}
                >
                    Last updated: January 28, 2026
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className={`prose ${isDark ? "prose-invert" : ""} max-w-none space-y-12 transition-colors duration-500`}
                    style={{
                        '--tw-prose-body': isDark ? '#A0A0B0' : '#4B5563',
                        '--tw-prose-headings': isDark ? '#FFFFFF' : '#1A1A1A',
                        '--tw-prose-bullets': '#7B3FE4',
                    }}
                >
                    <section>
                        <p className="leading-relaxed">
                            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                        </p>
                        <p className="leading-relaxed mt-4">
                            We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl mb-4 font-medium">Interpretation and Definitions</h2>
                        <h3 className="text-xl mb-2">Interpretation</h3>
                        <p className="leading-relaxed">
                            The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                        </p>
                        <h3 className="text-xl mb-2 mt-6">Definitions</h3>
                        <p className="leading-relaxed">For the purposes of this Privacy Policy:</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                            <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                            <li><strong>Application</strong> refers to Codino, the software program provided by the Company.</li>
                            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to Codino.</li>
                            <li><strong>Country</strong> refers to: Bangladesh</li>
                            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                            <li><strong>Personal Data</strong> (or "Personal Information") is any information that relates to an identified or identifiable individual.</li>
                            <li><strong>Service</strong> refers to the Application.</li>
                            <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl mb-4 font-medium">Collecting and Using Your Personal Data</h2>
                        <h3 className="text-xl mb-2">Types of Data Collected</h3>
                        <h4 className="text-lg font-medium mt-4">Personal Data</h4>
                        <p className="leading-relaxed">
                            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name.
                        </p>
                        <h4 className="text-lg font-medium mt-6">Usage Data</h4>
                        <p className="leading-relaxed">
                            Usage Data is collected automatically when using the Service. It may include information such as Your Device's IP address, browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, unique device identifiers and other diagnostic data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl mb-4 font-medium">Use of Your Personal Data</h2>
                        <p className="leading-relaxed">The Company may use Personal Data for the following purposes:</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li>To provide and maintain our Service, including to monitor usage.</li>
                            <li>To manage Your Account and registration as a user.</li>
                            <li>For the performance of a contract.</li>
                            <li>To contact You regarding updates or informative communications.</li>
                            <li>To provide You with news, special offers and general information.</li>
                            <li>To manage Your requests.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl mb-4 font-medium">Retention of Your Personal Data</h2>
                        <p className="leading-relaxed">
                            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. Account information is typically retained for the duration of your account relationship plus up to 24 months. Support tickets and usage statistics are also retained for up to 24 months.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl mb-4 font-medium">Delete Your Personal Data</h2>
                        <p className="leading-relaxed">
                            You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may update, amend, or delete Your information at any time by signing in to Your Account or by contacting us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl mb-4 font-medium">Security of Your Personal Data</h2>
                        <p className="leading-relaxed">
                            The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl mb-4 font-medium">Contact Us</h2>
                        <p className="leading-relaxed">If you have any questions about this Privacy Policy, You can contact us:</p>
                        <p className="mt-2">By email: <span className="text-primary font-medium">madmaxsecondac@gmail.com</span></p>
                    </section>
                </motion.div>
            </main>

            <footer className={`max-w-7xl mx-auto px-8 sm:px-20 py-12 border-t transition-colors duration-500 ${isDark ? "border-white/5" : "border-black/5"} flex justify-center text-[0.7rem] font-medium text-text-muted uppercase tracking-[0.2em]`}>
                <span>&copy; 2026 CODINO.</span>
            </footer>
        </motion.div>
    );
};

export default PrivacyPolicy;
