'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Package, FileText, ShoppingBag, BookOpen, Calendar, Map, Award, Briefcase, PenTool } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  {
    title: "Business Stationery",
    slug: "business-stationery",
    description: "Professional cards, letterheads, and envelopes that make a lasting impression.",
    icon: Briefcase,
    color: "bg-blue-500"
  },
  {
    title: "Marketing Materials",
    slug: "marketing-materials",
    description: "Brochures, flyers, and postcards designed to captivate your audience.",
    icon: FileText,
    color: "bg-purple-500"
  },
  {
    title: "Packaging & Labels",
    slug: "packaging-labels",
    description: "Custom boxes and labels that elevate your product presentation.",
    icon: Package,
    color: "bg-green-500"
  },
  {
    title: "Books & Publications",
    slug: "books-publications",
    description: "High-quality catalogs, magazines, and booklets with perfect binding.",
    icon: BookOpen,
    color: "bg-amber-500"
  },
  {
    title: "Event Materials",
    slug: "event-materials",
    description: "Banners, posters, and tickets for memorable events.",
    icon: Calendar,
    color: "bg-rose-500"
  },
  {
    title: "Signage & Displays",
    slug: "signage-displays",
    description: "Large format printing for indoor and outdoor visibility.",
    icon: Map,
    color: "bg-indigo-500"
  },
  {
    title: "Premium Specialty",
    slug: "premium-specialty",
    description: "Foil stamping, embossing, and unique finishes for luxury items.",
    icon: Award,
    color: "bg-gold-500" // Tailwind might not have gold, use yellow-500 or similar
  },
  {
    title: "Corporate Identity",
    slug: "corporate-identity",
    description: "Consistent branding materials for your entire organization.",
    icon: Briefcase,
    color: "bg-slate-500"
  },
  {
    title: "Custom Projects",
    slug: "custom-projects",
    description: "Tailored printing solutions for unique requirements.",
    icon: PenTool,
    color: "bg-teal-500"
  },
]

// Fix for icon usage in map
const CategoryIcon = ({ icon: Icon, className }: { icon: any, className?: string }) => {
  return <Icon className={className} />
}

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 lg:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
            Our Product Categories
          </h1>
          <p className="text-lg text-slate-600">
            Explore our comprehensive range of offset printing solutions. From essential business stationery to premium packaging, we deliver excellence in every print.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <Link href={`/products/${category.slug}`} className="block p-8 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 ${category.color.replace('gold', 'yellow')} shadow-lg`}>
                  <CategoryIcon icon={category.icon} className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                <p className="text-slate-600 mb-6 flex-grow">
                  {category.description}
                </p>

                <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                  Browse Products <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-primary rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Can't optimize for your specific need?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              We specialize in custom offset printing projects. Use our detailed quote form to describe exactly what you need.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100">
              <Link href="/quote">Request Custom Quote</Link>
            </Button>
          </div>
          {/* Decorative background elements can correspond here */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}


