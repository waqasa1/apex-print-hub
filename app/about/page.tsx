'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Printer, Users, Award, Globe } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* Hero */}
            <section className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
                <div className="container relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
                    >
                        Printing with Purpose
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        For over two decades, Apex Print Hub has been the silent partner behind the world's most successful brands, delivering offset perfection at scale.
                    </motion.p>
                </div>
                <div className="absolute inset-0 bg-[url('/images/ink-fountain.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/offset-press.png"
                            alt="Our Factory"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Where Art Meets Engineering</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Founded in 2005, Apex Print Hub started with a single Heidelberg press and a vision: to bring the highest fidelity offset printing to businesses that care about their image.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            While the world rushed to digital, we doubled down on the craft of offset. Why? Because for high-volume, high-stakes projects, nothing matches the crispness of real ink on premium paper. Today, we operate a 50,000 sq. ft. facility equipped with state-of-the-art 6-color presses, serving clients from boutique design agencies to Fortune 500 corporations.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-1">50M+</div>
                                <div className="text-sm text-slate-500">Impressions Printed Annually</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-1">99.8%</div>
                                <div className="text-sm text-slate-500">On-Time Delivery Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-slate-600">The principles that guide every print run.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Printer, title: "Craftsmanship", desc: "We treat printing as an art form, not just a manufacturing process." },
                            { icon: Users, title: "Partnership", desc: "We are an extension of your team, dedicated to your brand's success." },
                            { icon: Globe, title: "Sustainability", desc: "We use soy-based inks and FSC-certified papers to minimize our footprint." }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                                <value.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-slate-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}
