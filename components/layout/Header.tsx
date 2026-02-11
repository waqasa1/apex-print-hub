'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Printer, Menu, X, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const categories = [
    { title: "Business Stationery", href: "/products/business-stationery", description: "Cards, letterheads, and envelopes" },
    { title: "Marketing Materials", href: "/products/marketing-materials", description: "Brochures, flyers, and postcards" },
    { title: "Packaging", href: "/products/packaging-labels", description: "Custom boxes and labels" },
    { title: "Books & Publications", href: "/products/books-publications", description: "Catalogs and magazines" },
]

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()
    const [scrolled, setScrolled] = React.useState(false)

    // Handle scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm border-slate-200/50"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2.5 group">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/25 transition-transform group-hover:scale-105">
                        <Printer className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                            APEX
                        </span>
                        <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">
                            Print Hub
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-1">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-100/50")}>
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-slate-100/50">Products</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl">
                                        {categories.map((category) => (
                                            <li key={category.title}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={category.href}
                                                        className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-accent-foreground focus:bg-slate-50 focus:text-accent-foreground group"
                                                    >
                                                        <div className="text-sm font-semibold leading-none text-slate-900 group-hover:text-primary transition-colors">{category.title}</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                                                            {category.description}
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                        <li className="col-span-2 mt-2 pt-2 border-t border-slate-100">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/products"
                                                    className="flex items-center justify-center w-full rounded-md bg-slate-50 p-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
                                                >
                                                    View All Categories
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/about" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-100/50")}>
                                        About Us
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/blog" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-100/50")}>
                                        Blog
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex">
                    <Button asChild className="rounded-full bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 transition-all font-semibold px-6">
                        <Link href="/quote">Request Quote</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-100">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-slate-200">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-6 mt-8">
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                                        <Printer className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg font-bold">Apex Print Hub</span>
                                </div>

                                <nav className="flex flex-col gap-1">
                                    <Link href="/" className="flex items-center py-3 text-base font-medium transition-colors hover:text-primary border-b border-slate-100">
                                        Home
                                    </Link>
                                    <div className="flex flex-col py-3 border-b border-slate-100">
                                        <span className="text-base font-medium mb-3 text-slate-900">Products</span>
                                        <div className="pl-4 flex flex-col gap-3">
                                            {categories.map((category) => (
                                                <Link
                                                    key={category.title}
                                                    href={category.href}
                                                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                                                >
                                                    {category.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <Link href="/about" className="flex items-center py-3 text-base font-medium transition-colors hover:text-primary border-b border-slate-100">
                                        About Us
                                    </Link>
                                    <Link href="/blog" className="flex items-center py-3 text-base font-medium transition-colors hover:text-primary border-b border-slate-100">
                                        Blog
                                    </Link>
                                </nav>

                                <div className="mt-auto">
                                    <Button asChild className="w-full rounded-full bg-primary text-white shadow-lg shadow-primary/25">
                                        <Link href="/quote">Request a Quote</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
