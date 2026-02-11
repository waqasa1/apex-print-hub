'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function BusinessCardsPage() {
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
              Business Cards
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl text-balance">
              Make the right first impression with premium business cards. Choose from various finishes, sizes, and special effects.
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
                name: 'Standard Business Cards',
                specs: '3.5" x 2" • 250-5000 pieces',
                features: ['14pt cardstock', 'Full-color offset printing', 'Standard matte finish', 'Bleed and score included'],
                price: 'From $49'
              },
              {
                name: 'Rounded Corner Cards',
                specs: '3.5" x 2" • 250-5000 pieces',
                features: ['14pt cardstock', 'Full-color printing', 'Rounded 0.125" corners', 'Premium finish'],
                price: 'From $69'
              },
              {
                name: 'Spot UV Finish Cards',
                specs: '3.5" x 2" • 250-5000 pieces',
                features: ['14pt cardstock', 'Spot UV on design area', 'Matte or glossy base', 'Eye-catching effect'],
                price: 'From $89'
              },
              {
                name: 'Foil Stamped Cards',
                specs: '3.5" x 2" • 250-5000 pieces',
                features: ['18pt premium cardstock', 'Gold, silver, or copper foil', 'Elegant embossed look', 'Professional appearance'],
                price: 'From $129'
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
                <h4 className="font-semibold text-primary mb-3">Standard Sizes</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>3.5" × 2" (Standard)</li>
                  <li>3.5" × 2.5" (Oversized)</li>
                  <li>2" × 2" (Square)</li>
                  <li>Custom sizes available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Paper Stock</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>14pt Premium Cardstock</li>
                  <li>16pt Ultra Premium</li>
                  <li>18pt Luxury Card</li>
                  <li>Eco-friendly options</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Finishes</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Matte Finish</li>
                  <li>Glossy Finish</li>
                  <li>Soft Touch</li>
                  <li>Linen Textured</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Tips */}
          <div className="rounded-lg bg-accent/10 border border-accent/20 p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-4">Design Tips</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent font-bold">1.</span>
                <span>Add 0.125" bleed on all sides for edge-to-edge printing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2.</span>
                <span>Use CMYK color mode for optimal color matching</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">3.</span>
                <span>Keep text at least 0.25" from edges for safety margin</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">4.</span>
                <span>Provide high-resolution artwork (300 DPI minimum)</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Order?</h3>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
              Upload your design or let our experts help you create the perfect business cards.
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
