'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
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
        image: "/images/business-cards.jpg",
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

    const [activeTab, setActiveTab] = useState("overview")

    // Ink Flow Animation State
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section with Ink-Flow Reveal */}
            <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-50">

                {/* Ink Flow Background Animation */}
                <AnimatePresence>
                    {isLoaded && (
                        <motion.div
                            initial={{ clipPath: "circle(0% at 50% 50%)" }}
                            animate={{ clipPath: "circle(150% at 50% 50%)" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-slate-900 z-0"
                        />
                    )}
                </AnimatePresence>

                <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className="inline-block bg-sky-500/20 text-sky-300 font-semibold px-4 py-1 rounded-full text-sm mb-6 border border-sky-500/30">
                            Premium Collection
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            {product.title}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                            {product.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-white border-0">
                                Start Your Order
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent">
                                Request Sample Kit
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 1, duration: 0.8, type: "spring" }}
                        className="relative aspect-square max-w-md mx-auto lg:ml-auto"
                    >
                        <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full translate-y-10"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover"
                            />
                            {/* Gloss Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none mix-blend-overlay" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
                </motion.div>
            </section>

            {/* Content Tabs */}
            <section className="py-20">
                <div className="container">
                    <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-3 mb-12 bg-slate-100 p-1 rounded-full h-auto">
                            <TabsTrigger value="overview" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all">Overview</TabsTrigger>
                            <TabsTrigger value="specs" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all">Specifications</TabsTrigger>
                            <TabsTrigger value="shipping" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all">Shipping & Turnaround</TabsTrigger>
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
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                        <Palette className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <h4 className="font-bold text-slate-900">Vibrant Color</h4>
                                        <p className="text-sm text-slate-500 mt-1">CMYK & Pantone</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                        <Settings className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <h4 className="font-bold text-slate-900">Precision Cut</h4>
                                        <p className="text-sm text-slate-500 mt-1">Die-cut options</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                        <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <h4 className="font-bold text-slate-900">Premium Paper</h4>
                                        <p className="text-sm text-slate-500 mt-1">Sustainably sourced</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
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
                                <div className="border border-slate-200 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                                    <Clock className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Production Time</h3>
                                    <p className="text-slate-600 mb-4">
                                        Standard turnaround is 3-5 business days after proof approval. Rush options available for 24-48 hour production.
                                    </p>
                                </div>
                                <div className="border border-slate-200 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                                    <Truck className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Shipping Options</h3>
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
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Print?</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                        Get a competitive quote today. Our team is standing by to help you choose the perfect options for your project.
                    </p>
                    <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-white h-14 px-10 text-lg rounded-full">
                        Get a Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </section>

        </div>
    )
}
