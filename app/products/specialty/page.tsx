'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function SpecialtyPage() {
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
              Specialty Prints
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl text-balance">
              Custom solutions for unique printing needs. Envelopes, letterhead, folders, and more specialty items.
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
                name: 'Custom Envelopes',
                specs: 'Various Sizes • 250-10000 pcs',
                features: ['#6, #9, #10 sizes', 'Custom printing available', 'Window & non-window', 'Multiple finishes'],
                price: 'From $59'
              },
              {
                name: 'Letterhead',
                specs: '8.5" × 11" • 250-5000 pcs',
                features: ['Premium paper stock', 'Custom design layout', 'Color & black/white', 'Professional finish'],
                price: 'From $69'
              },
              {
                name: 'Folders & Covers',
                specs: 'Custom Design • Branded',
                features: ['Pocket folders', 'Presentation folders', 'Custom die-cut', 'Full-color printing'],
                price: 'From $149'
              },
              {
                name: 'Postcards',
                specs: '4" × 6" • 250-5000 pcs',
                features: ['Full-color printing', 'Glossy finish', 'EDDM eligible', 'Durable cardstock'],
                price: 'From $49'
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
                <h4 className="font-semibold text-primary mb-3">Envelope Sizes</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>#6 (3.63" × 6")</li>
                  <li>#9 (3.87" × 8.875")</li>
                  <li>#10 (4.125" × 9.5")</li>
                  <li>Custom sizes available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Paper Stock</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>24lb Bond (Envelopes)</li>
                  <li>28lb Premium (Letterhead)</li>
                  <li>80lb Cardstock (Postcards)</li>
                  <li>100lb Cover (Folders)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Finishing Options</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Matte Finish</li>
                  <li>Glossy Finish</li>
                  <li>Aqueous Coating</li>
                  <li>Custom Coatings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Tips */}
          <div className="rounded-lg bg-accent/10 border border-accent/20 p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-4">Design Tips for Specialty Items</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent font-bold">1.</span>
                <span>Provide accurate envelope measurements and flap sizes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2.</span>
                <span>Position letterhead elements to leave room for printing/writing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">3.</span>
                <span>Use CMYK color mode for consistent color across all items</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">4.</span>
                <span>Include 0.125" bleed on all edges where applicable</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">5.</span>
                <span>Provide high-resolution files at 300 DPI minimum</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Order?</h3>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
              Upload your design or let our experts help you create custom specialty printing solutions.
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
