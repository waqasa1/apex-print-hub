'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function CatalogsPage() {
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
              Booklets & Catalogs
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl text-balance">
              Professional multi-page binding options. From lightweight saddle-stitched to premium perfect-bound catalogs.
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
                name: 'Saddle-Stitched Booklets',
                specs: '20-60 Pages • Various Sizes',
                features: ['Center-stitched binding', '80-100lb cover stock', 'Text pages on 70-80lb', 'Cost-effective option'],
                price: 'From $129'
              },
              {
                name: 'Perfect Binding',
                specs: '40-500 Pages • Premium Option',
                features: ['Square spine binding', 'Durable cover stock', 'Professional appearance', 'Large page counts'],
                price: 'From $199'
              },
              {
                name: 'Wire-O Binding',
                specs: 'Premium Look • 20-300 Pages',
                features: ['Metal spiral binding', 'Lay-flat design', 'Professional finish', 'Reusable covers'],
                price: 'From $249'
              },
              {
                name: 'Comb Binding',
                specs: 'Custom Spines • 20-300 Pages',
                features: ['Plastic comb spines', 'Custom colors available', 'Easy assembly', 'Budget-friendly'],
                price: 'From $149'
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
                <h4 className="font-semibold text-primary mb-3">Common Sizes</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>8.5" × 11" (Letter)</li>
                  <li>8.5" × 8.5" (Square)</li>
                  <li>6" × 9" (Book)</li>
                  <li>Custom sizes available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Cover Stock</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>80lb Glossy Cover</li>
                  <li>100lb Premium</li>
                  <li>Cardstock with Lamination</li>
                  <li>Textured Options</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Interior Pages</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>70lb Glossy Text</li>
                  <li>80lb Matte Text</li>
                  <li>Color & Black/White</li>
                  <li>Mixed Interior Options</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Tips */}
          <div className="rounded-lg bg-accent/10 border border-accent/20 p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-4">Design Tips for Catalogs</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent font-bold">1.</span>
                <span>Plan page layout - always use multiples of 4 pages for saddle-stitch</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2.</span>
                <span>Use high-resolution images (300 DPI minimum for quality)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">3.</span>
                <span>Account for the gutter (inner margin) when planning spreads</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">4.</span>
                <span>Provide 0.125" bleed on all trim edges</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">5.</span>
                <span>Specify cover and interior page counts clearly</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Order?</h3>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
              Upload your design or let our experts help you create professional booklets and catalogs.
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
