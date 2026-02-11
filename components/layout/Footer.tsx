'use client'

import Link from "next/link"
import { Printer, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="container py-16 md:py-24">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                <Printer className="h-6 w-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-tight text-white leading-none">
                                    APEX
                                </span>
                                <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">
                                    Print Hub
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Premium offset printing solutions for businesses that demand excellence. Precision, quality, and partnership in every print since 2005.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="group flex items-center text-sm hover:text-primary transition-colors">
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="group flex items-center text-sm hover:text-primary transition-colors">
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Our Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="group flex items-center text-sm hover:text-primary transition-colors">
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="group flex items-center text-sm hover:text-primary transition-colors">
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Blog Insights
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group text-sm">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                                <span>
                                    123 Print Avenue, <br />
                                    Creative District, NY 10001
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 group text-sm">
                                <Phone className="h-5 w-5 text-primary shrink-0 group-hover:text-white transition-colors" />
                                <span>+1 (800) PRINT-HUB</span>
                            </li>
                            <li className="flex items-center space-x-3 group text-sm">
                                <Mail className="h-5 w-5 text-primary shrink-0 group-hover:text-white transition-colors" />
                                <span>hello@apexprinthub.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Stay Updated</h3>
                        <p className="text-sm text-slate-500 mb-4">
                            Subscribe to get special offers and industry news.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                            <button type="submit" className="w-full bg-primary text-white rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} Apex Print Hub. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
