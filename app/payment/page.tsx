'use client'

import { CreditCard, ShieldCheck, Banknote, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PaymentPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-20 lg:py-32">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">Payment Options</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Secure, flexible payment solutions tailored for business needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <CreditCard className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Credit & Debit Cards</h3>
                        <p className="text-slate-600 mb-4">
                            We accept all major credit cards including Visa, MasterCard, American Express, and Discover.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-2">
                            <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-green-500" /> 256-bit SSL Encryption</li>
                            <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-green-500" /> Instant Processing</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <Building className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Corporate Billing</h3>
                        <p className="text-slate-600 mb-4">
                            Net-30 terms available for qualified educational institutions, government agencies, and diverse corporations.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/contact">Apply for Credit</Link>
                        </Button>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6">
                    <Banknote className="w-12 h-12 text-green-600 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Wire Transfer & Check</h3>
                        <p className="text-slate-600">
                            For orders over $5,000, we recommend wire transfer. Checks are accepted (production begins after clearance).
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm mb-4">Questions about billing?</p>
                    <Button variant="link" asChild>
                        <Link href="/contact">Contact Accounting Department</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
