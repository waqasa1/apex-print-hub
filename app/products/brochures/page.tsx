'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function BrochuresPage() {
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
              Brochures & Flyers
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl text-balance">
              Powerful marketing materials that showcase your business. Professional tri-fold, bi-fold, and custom layouts.
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
                name: 'Tri-Fold Brochures',
                specs: '8.5" × 11" • 250-5000 pieces',
                features: ['Folds to 3.67" × 8.5"', 'Full-color offset printing', '100lb glossy cardstock', 'Perfect for events/promotions'],
                price: 'From $89'
              },
              {
                name: 'Bi-Fold Brochures',
                specs: '8.5" × 14" • 250-5000 pieces',
                features: ['Folds to 8.5" × 7"', 'Full-color printing', '100lb premium stock', 'Ideal for menus'],
                price: 'From $79'
              },
              {
                name: 'Single Page Flyers',
                specs: '8.5" × 11" • 250-5000 pieces',
                features: ['Full-color offset printing', '100lb cardstock', 'Multiple finish options', 'Perfect for announcements'],
                price: 'From $59'
              },
              {
                name: 'Oversized Brochures',
                specs: 'Custom Sizes • 250-5000 pieces',
                features: ['Custom dimensions available', 'Multiple page counts', 'Premium finishes', 'Binding options'],
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
                <h4 className="font-semibold text-primary mb-3">Standard Sizes</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>8.5" × 11" (Letter)</li>
                  <li>8.5" × 14" (Legal)</li>
                  <li>6" × 9" (DL)</li>
                  <li>Custom sizes available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Paper Stock</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>80lb Uncoated</li>
                  <li>100lb Glossy</li>
                  <li>100lb Matte</li>
                  <li>120lb Premium</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Finishes</h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Matte Finish</li>
                  <li>Glossy Finish</li>
                  <li>Satin Finish</li>
                  <li>Linen Textured</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Tips */}
          <div className="rounded-lg bg-accent/10 border border-accent/20 p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-4">Design Tips for Brochures</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent font-bold">1.</span>
                <span>Design for folds - keep important content on fold lines in mind</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2.</span>
                <span>Use high-resolution images (300 DPI minimum)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">3.</span>
                <span>Provide 0.125" bleed and 0.5" safety margins for tri-folds</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">4.</span>
                <span>Plan your color strategy using CMYK color mode</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">5.</span>
                <span>Test fold placement before final approval</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Order?</h3>
            <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
              Upload your design or let our experts help you create eye-catching brochures.
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
