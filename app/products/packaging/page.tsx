'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function PackagingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/products" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance">
              Packaging & Labels
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl text-balance">
              Custom packaging solutions that protect and showcase your products with style and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Product Options */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12">Available Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: 'Custom Boxes',
                specs: 'Structural Design • Custom Sizes',
                features: ['Custom dimensions', 'Multiple box styles', 'Premium corrugated', 'Full-color printing'],
                price: 'From $199'
              },
              {
                name: 'Product Labels',
                specs: 'Various Sizes • 250-10000 pcs',
                features: ['Custom die-cut shapes', 'Waterproof materials', 'Adhesive options', 'Professional finish'],
                price: 'From $49'
              },
              {
                name: 'Shipping Boxes',
                specs: 'Branded Packaging • Custom Sizes',
                features: ['Corrugated construction', 'Branded printing', 'Scalable quantities', 'Eco-friendly options'],
                price: 'From $149'
              },
              {
                name: 'Window Boxes',
                specs: 'Premium Display • Custom Sizes',
                features: ['Clear window display', 'Premium cardstock', 'Magnetic closure', 'Luxury appearance'],
                price: 'From $289'
              }
            ].map((product, index) => (
              <div key={index} className="rounded-lg border border-border/60 p-8 bg-card hover:shadow-lg transition-all">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-foreground/70 text-sm">{product.specs}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-secondary mb-4">{product.price}</div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Quote
                </Button>
              </div>
            ))}
          </div>

          {/* Specifications */}
          <div className="rounded-lg border border-border/60 p-8 bg-muted/20 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8">Specifications & Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-3">Box Styles</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Tuck & Flap</li>
                  <li>Auto Bottom</li>
                  <li>Mailer Boxes</li>
                  <li>Pillow Boxes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Materials</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Corrugated Cardboard</li>
                  <li>Premium Cardstock</li>
                  <li>Kraft Paper</li>
                  <li>Eco-Friendly Options</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Label Options</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Die-Cut Labels</li>
                  <li>Roll Labels</li>
                  <li>Waterproof Labels</li>
                  <li>Holographic Effects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Tips */}
          <div className="rounded-lg bg-accent/10 border border-accent/20 p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-4">Design Tips for Packaging</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent font-bold">1.</span>
                <span>Design with structural integrity in mind - consider folding and assembly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2.</span>
                <span>Use high-quality images and ensure 300 DPI resolution minimum</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">3.</span>
                <span>Include adequate bleed margins (0.125" minimum)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">4.</span>
                <span>Test die-cuts with prototypes before final production</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">5.</span>
                <span>Consider sustainability with eco-friendly material options</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Order?</h3>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
              Upload your design or let our experts help you create custom packaging solutions.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-base">
              Start Your Order
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
