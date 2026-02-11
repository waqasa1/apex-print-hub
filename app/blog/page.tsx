'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const posts = [
    {
        title: "Why Offset Trumps Digital for Large Runs",
        excerpt: "Discover the economics and quality benefits of choosing offset printing for your next catalog or direct mail campaign.",
        date: "October 12, 2024",
        author: "James Printer",
        image: "/images/offset-press.png",
        slug: "offset-vs-digital"
    },
    {
        title: "Understanding Pantone vs. CMYK",
        excerpt: "A guide to color models and ensuring your brand colors look exactly right on paper.",
        date: "September 28, 2024",
        author: "Sarah Design",
        image: "/images/pantone-fan.png",
        slug: "pantone-vs-cmyk"
    },
    {
        title: "The Art of the Finish: Foil, Emboss, and Spot UV",
        excerpt: "How tactile elements can elevate your printed materials from ordinary to extraordinary.",
        date: "September 15, 2024",
        author: "James Printer",
        image: "/images/ink-fountain.png",
        slug: "print-finishes-guide"
    }
]

export default function BlogPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-20 lg:py-32">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">Print Insights</h1>
                    <p className="text-lg text-slate-600">
                        Expert advice, industry trends, and deep dives into the world of offset printing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <div className="text-sm text-slate-500 mb-2">{post.date} • {post.author}</div>
                                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 text-sm line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="link" className="px-0 text-primary">
                                    Read Article
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
