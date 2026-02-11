'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

// This would typically come from a database or CMS
const categoryData: Record<string, any> = {
    "business-stationery": {
        title: "Business Stationery",
        description: "Elevate your brand with premium business cards, letterheads, and envelopes.",
        products: [
            { id: "luxury-business-cards", title: "Luxury Business Cards", price: "From $45", image: "/images/business-cards.jpg" },
            { id: "letterheads", title: "Corporate Letterheads", price: "From $120", image: "/images/letterhead.jpg" },
            { id: "envelopes", title: "Custom Envelopes", price: "From $85", image: "/images/envelopes.jpg" },
            { id: "notepads", title: "Branded Notepads", price: "From $60", image: "/images/notepads.jpg" },
        ]
    },
    "marketing-materials": {
        title: "Marketing Materials",
        description: "Drive engagement with high-impact brochures, flyers, and postcards.",
        products: [
            { id: "brochures", title: "Tri-Fold Brochures", price: "From $150", image: "/images/brochures.jpg" },
            { id: "flyers", title: "Promotional Flyers", price: "From $90", image: "/images/flyers.jpg" },
            { id: "postcards", title: "Direct Mail Postcards", price: "From $75", image: "/images/postcards.jpg" },
        ]
    }
    // Add other categories as needed...
}

export default function CategoryPage() {
    const params = useParams()
    const categorySlug = params.category as string
    const category = categoryData[categorySlug] || {
        title: categorySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        description: "Premium printing solutions for your business needs.",
        products: []
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="container relative z-10">
                    <Link href="/products" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Categories
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl">{category.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-0"></div>
                {/* Abstract bg pattern */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-slate-800/30 -skew-x-12 transform origin-top-right"></div>
            </div>

            {/* Products Grid */}
            <div className="container py-20">
                {category.products.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {category.products.map((product: any, index: number) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                            >
                                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                    {/* Placeholder for product image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-2xl bg-slate-50">
                                        {product.title}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">{product.price}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-6">
                                        High-quality offset printing with customizable finishes and paper stocks.
                                    </p>
                                    <ul className="space-y-2 mb-6 text-sm text-slate-500">
                                        <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Premium Paper Stock</li>
                                        <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Pantone Color Matching</li>
                                        <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> 48h Turnaround Available</li>
                                    </ul>
                                    <Button asChild className="w-full">
                                        <Link href={`/product/${product.id}`}>Configure & Order</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                            <Star className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h3>
                        <p className="text-slate-600 max-w-md mx-auto mb-8">
                            We are currently updating our online catalog for this category. Please contact us directly for a quote.
                        </p>
                        <Button asChild>
                            <Link href="/quote">Request a Quote</Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
