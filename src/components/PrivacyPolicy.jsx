import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <section className="py-24 bg-black min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </a>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-400 mb-6">
                            Last updated: January 2025
                        </p>

                        <div className="space-y-8 text-gray-300">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
                                <p>
                                    When you contact us through our website, we collect the following information:
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Message content</li>
                                    <li>Any other information you choose to provide</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
                                <p>We use the information you provide to:</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                                    <li>Respond to your inquiries and requests</li>
                                    <li>Provide information about our services</li>
                                    <li>Improve our website and services</li>
                                    <li>Communicate with you about potential projects</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">3. Data Protection</h2>
                                <p>
                                    We take reasonable measures to protect your personal information from unauthorized
                                    access, alteration, disclosure, or destruction. Your data is stored securely and
                                    only accessed by authorized personnel.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Services</h2>
                                <p>
                                    Our contact form is powered by Formspree, a third-party form handling service.
                                    By submitting information through our contact form, you also agree to Formspree's
                                    privacy policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
                                <p>
                                    Our website may use cookies and similar technologies to enhance your browsing
                                    experience. You can control cookie settings through your browser preferences.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
                                <p>You have the right to:</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                                    <li>Request access to your personal data</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Opt-out of marketing communications</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">7. Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy or our data practices,
                                    please contact us at:
                                </p>
                                <p className="mt-2 text-gray-400">
                                    Email: <a href="mailto:dmamedia@gmail.com" className="text-white hover:underline">dmamedia@gmail.com</a><br />
                                    Phone: <a href="tel:+917019482220" className="text-white hover:underline">+91 7019482220</a>
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time. Any changes will be
                                    posted on this page with an updated revision date.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
