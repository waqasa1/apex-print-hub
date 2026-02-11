'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Check, UploadCloud } from 'lucide-react'

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mimic API call
    setTimeout(() => setSubmitted(true), 1500)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Quote Requested!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for your interest. One of our offset printing specialists will review your details and contact you within 24 hours.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Submit Another Request
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-20 lg:py-32">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">Request a Custom Quote</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            For complex offset projects, accuracy matters. Tell us about your project, and we'll provide a precise estimate tailored to your specifications.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-slate-900 px-8 py-6 text-white flex justify-between items-center">
            <span className="font-semibold tracking-wide uppercase text-sm text-slate-400">Project Details</span>
            <span className="text-xs bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full border border-sky-500/30">Fast Response</span>
          </div>

          <form onSubmit={handleSubmit} className="p-8 lg:p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business-cards">Business Cards</SelectItem>
                  <SelectItem value="brochures">Brochures & Flyers</SelectItem>
                  <SelectItem value="books">Books & Catalogs</SelectItem>
                  <SelectItem value="packaging">Packaging</SelectItem>
                  <SelectItem value="other">Other / Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" placeholder="e.g. 5000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="size">Finished Size</Label>
                <Input id="size" placeholder="e.g. 8.5 x 11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Needed By</Label>
                <Input id="date" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specs">Project Specifications</Label>
              <Textarea
                id="specs"
                placeholder="Describe paper stock, folding, binding, special finishes (foil, spot UV), etc."
                className="min-h-[120px]"
              />
            </div>

            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
              <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-4" />
              <p className="text-sm font-semibold text-slate-700">Upload Artwork or Reference Files</p>
              <p className="text-xs text-slate-500 mt-1">PDF, AI, INDD, JPG (Max 20MB)</p>
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full h-12 text-lg">
                Request Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
