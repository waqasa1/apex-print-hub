'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Layers, Zap, PenTool } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-32 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl opacity-50 animate-pulse delay-700" />
        </div>

        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors cursor-default">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping" />
                Premium Offset Printing Solutions
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:text-7xl leading-[1.1]">
                Offset Printing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative">
                  Is King
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-xl leading-relaxed">
                Experience the gold standard of printing. Superior consistency, vibrant Pantone colors, and unmatched quality for high-volume projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:scale-105 transition-transform">
                  <Link href="/quote">
                    Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-slate-200 text-slate-900 hover:bg-slate-50 hover:text-primary transition-colors">
                  <Link href="/products">
                    Explore Products
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-video lg:aspect-square lg:h-[600px] w-full max-w-[600px]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent z-10 rounded-3xl pointer-events-none mix-blend-overlay" />
                <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-slate-900">
                  <Image
                    src="/images/offset-press.png"
                    alt="Heidelberg XL 106 Offset Press"
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] hidden md:block z-20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-1">15k+</div>
                  <div className="text-sm text-slate-600 font-medium">Projects Delivered Successfully</div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute top-10 -right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 z-20 hidden md:flex items-center gap-3"
                >
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Fast Turnaround</div>
                    <div className="text-xs text-slate-500">24-48hr Rush Available</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Offset Printing? */}
      <section className="py-24 bg-white relative">
        <div className="container mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Why Choose Offset?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            For projects that demand perfection, offset printing offers advantages that digital simply cannot match.
          </p>
        </div>

        {/* Features Grid */}
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Layers,
              title: "Unmatched Accuracy",
              description: "True Pantone matching guarantees your brand colors are consistent across every single page, every single time."
            },
            {
              icon: Zap,
              title: "Economies of Scale",
              description: "The more you print, the less you pay per unit. Perfect for catalogs, magazines, and large direct mail campaigns."
            },
            {
              icon: PenTool,
              title: "Premium Finishes",
              description: "Unlock access to metallic inks, heavy cardstocks, and specialized textures that define luxury."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group p-10 bg-slate-50 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-slate-100 duration-300"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed min-h-[80px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visual Content Showcase */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/ink-fountain.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />

        <div className="container relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
                Precision Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  Meets Creative Artistry
                </span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-sky-400">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Micro-Calibration</h4>
                    <p className="text-slate-400 leading-relaxed">Daily laser alignment ensures every dot of ink lands with micron-level precision, guaranteeing sharpness that digital print can't replicate.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-sky-400">
                    <PenTool className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Tactile Excellence</h4>
                    <p className="text-slate-400 leading-relaxed">From soft-touch coatings to raised UV and embossing, we create prints that engage the senses and beg to be touched.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-sky-400">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Master Review</h4>
                    <p className="text-slate-400 leading-relaxed">Every job is personally inspected by a master printer with 20+ years of experience before it leaves our floor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-6">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800 shadow-2xl border border-white/10 mt-12">
                    <Image src="/images/pantone-fan.png" alt="Pantone Fan" fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="font-medium text-white">Exact Color Matching</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800 shadow-2xl border border-white/10">
                    <Image src="/images/ink-fountain.png" alt="Ink Fountain" fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="font-medium text-white">Vibrant Pigments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start? */}
      <section className="py-24 bg-sky-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
        <div className="container text-center relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 sm:text-4xl">Ready to Experience the Difference?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Join thousands of premium brands who trust Apex Print Hub for their critical printing projects.
          </p>
          <Button asChild size="lg" className="rounded-full h-16 px-12 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-1">
            <Link href="/quote">
              Request Your Quote
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
