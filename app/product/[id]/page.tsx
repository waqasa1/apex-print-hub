'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Check, Shield, Truck, Clock, ArrowRight, FileText, Settings, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Mock Data (in a real app, fetch based on ID)
const productData: Record<string, any> = {
    "luxury-business-cards": {
        title: "Luxury Business Cards",
        subtitle: "Make an unforgettable first impression",
        description: "Our luxury business cards are crafted on premium 32pt cardstock with a range of exquisite finishes. From silk lamination to raised spot UV, every detail is engineered to impress.",
        features: ["32pt Triple-Layer Stock", "Velvet Soft-Touch Finish", "Metalic Foil Stamping", "Painted Edges Available"],
        specs: {
            "Paper Stock": "32pt Uncoated or Silk Laminated",
            "Sizes": "3.5\" x 2\" (Standard), 2.5\" x 2.5\" (Square)",
            "Coating": "Spot UV, Foil, Embossing",
            "Turnaround": "3-5 Business Days"
        },
        image: "/images/pantone-fan.png",
        price: "Starting at $45 for 250"
    },
    // Default fallback for demo
    "default": {
        title: "Premium Offset Product",
        subtitle: "High-volume, high-quality printing",
        description: "Experience the superior quality of offset printing. Perfect for large runs where consistency and color accuracy are paramount.",
        features: ["Pantone Color Matching", "Premium Paper Stocks", "Consistent Quality at Volume", "Cost-Effective Scaling"],
        specs: {
            "Paper Stock": "Various Premium Options",
            "Sizes": "Custom Sizes Available",
            "Coating": "Matte, Gloss, Satin, Soft-Touch",
            "Turnaround": "5-7 Business Days"
        },
        image: "/images/offset-press.png", // reusing existing image
        price: "Custom Quote Required"
    }
}

export default function ProductPage() {
    const params = useParams()
    const id = params.id as string
    const product = productData[id] || productData["default"]

    const [isLoaded, setIsLoaded] = useState(false)

    const { scrollY } = useScroll();

    // Transform background color from Sky Blue (#7DD3FC - sky-300 approx) to Royal Blue (#4169E1 - roughly indigo-600 range)
    // Adjusting input range [0, 500] pixels of scroll
    const backgroundColor = useTransform(
        scrollY,
        [0, 500],
        ["#87CEEB", "#4169E1"]
    );

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section with CMYK Ink-Flow Reveal & Scroll Effect */}
            <motion.section
                style={{ backgroundColor: backgroundColor }}
                className="relative h-[85vh] flex items-center overflow-hidden"
            >

                {/* CMYK Background Animation */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
                    />
                </div>

                <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-block bg-white/20 backdrop-blur-sm text-slate-900 font-semibold px-4 py-1 rounded-full text-sm mb-6 border border-white/30">
                            Premium Collection
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
                            {product.title}
                        </h1>
                        <p className="text-xl text-slate-700 mb-8 max-w-lg leading-relaxed">
                            {product.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-slate-900/25">
                                Start Your Order
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-400 text-slate-900 hover:text-slate-900 hover:bg-white/50 bg-transparent rounded-full px-8 h-14 text-lg">
                                Request Sample Kit
                            </Button>
                        </div>
                    </motion.div>

                    {/* CMYK Color Separation Animation */}
                    <div className="relative order-1 lg:order-2 flex justify-center items-center h-[500px]">
                        <AnimatePresence>
                            {isLoaded && (
                                <>
                                    {/* Cyan Layer - Slides from Left */}
                                    <motion.div
                                        initial={{ x: -100, opacity: 0, mixBlendMode: 'multiply' }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                        className="absolute w-[400px] h-[400px] bg-cyan-400 rounded-2xl mix-blend-multiply opacity-50 z-10"
                                        style={{ transform: 'translateX(-20px)' }}
                                    />
                                    {/* Magenta Layer - Slides from Right */}
                                    <motion.div
                                        initial={{ x: 100, opacity: 0, mixBlendMode: 'multiply' }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                                        className="absolute w-[400px] h-[400px] bg-magenta-500 rounded-2xl mix-blend-multiply opacity-50 z-10 block"
                                        // Tailwind doesn't have default magenta, using hex or style
                                        style={{ backgroundColor: '#FF00FF', transform: 'translateX(20px)' }}
                                    />
                                    {/* Yellow Layer - Slides from Top */}
                                    <motion.div
                                        initial={{ y: -100, opacity: 0, mixBlendMode: 'multiply' }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                                        className="absolute w-[400px] h-[400px] bg-yellow-400 rounded-2xl mix-blend-multiply opacity-50 z-10"
                                        style={{ transform: 'translateY(-20px)' }}
                                    />
                                    {/* Black (Key) Layer - Slides from Bottom & Final Image Reveal */}
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                                        className="absolute w-[400px] h-[400px] z-20 shadow-2xl rounded-2xl overflow-hidden bg-white"
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none mix-blend-overlay" />
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest font-medium">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-slate-600 to-transparent" />
                </motion.div>
            </motion.section>

            {/* Content Tabs */}
            <section className="py-20 bg-white">
                <div className="container">
                    <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-3 mb-12 bg-slate-100 p-1 rounded-full h-auto">
                            <TabsTrigger value="overview" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all text-slate-600 data-[state=active]:text-slate-900">Overview</TabsTrigger>
                            <TabsTrigger value="specs" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all text-slate-600 data-[state=active]:text-slate-900">Specifications</TabsTrigger>
                            <TabsTrigger value="shipping" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all text-slate-600 data-[state=active]:text-slate-900">Shipping & Turnaround</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-slate-900">Crafted to Perfection</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {product.description}
                                    </p>
                                    <ul className="space-y-4 pt-4">
                                        {product.features.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                                    <Check className="w-3.5 h-3.5" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                                        <Palette className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <h4 className="font-bold text-slate-900">Vibrant Color</h4>
                                        <p className="text-sm text-slate-500 mt-1">CMYK & Pantone</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                                        <Settings className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <h4 className="font-bold text-slate-900">Precision Cut</h4>
                                        <p className="text-sm text-slate-500 mt-1">Die-cut options</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                                        <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <h4 className="font-bold text-slate-900">Premium Paper</h4>
                                        <p className="text-sm text-slate-500 mt-1">Sustainably sourced</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                                        <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <h4 className="font-bold text-slate-900">Quality Check</h4>
                                        <p className="text-sm text-slate-500 mt-1">100% Guaranteed</p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="specs" className="animate-in fade-in slide-in-from-bottom-4">
                            <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left">
                                    <tbody>
                                        {Object.entries(product.specs).map(([key, value]: [string, any], index) => (
                                            <tr key={key} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                                                <th className="py-4 px-6 font-semibold text-slate-900 w-1/3 border-b last:border-0 border-slate-100">{key}</th>
                                                <td className="py-4 px-6 text-slate-600 border-b last:border-0 border-slate-100">{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </TabsContent>

                        <TabsContent value="shipping" className="animate-in fade-in slide-in-from-bottom-4">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="border border-slate-200 rounded-2xl p-8 hover:border-primary/50 transition-colors bg-white">
                                    <Clock className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Production Time</h3>
                                    <p className="text-slate-600 mb-4">
                                        Standard turnaround is 3-5 business days after proof approval. Rush options available for 24-48 hour production.
                                    </p>
                                </div>
                                <div className="border border-slate-200 rounded-2xl p-8 hover:border-primary/50 transition-colors bg-white">
                                    <Truck className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Shipping Options</h3>
                                    <p className="text-slate-600 mb-4">
                                        We offer free Ground shipping on orders over $150. Expedited shipping (Next Day Air, 2-Day) available at checkout.
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-50" />
                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Print?</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                        Get a competitive quote today. Our team is standing by to help you choose the perfect options for your project.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        Get a Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </section>

        </div>
    )
}
