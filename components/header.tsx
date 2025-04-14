"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-green-800">FARMILY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">
            About
          </Link>
          <Link href="/marketplace" className="text-sm font-medium hover:text-green-600 transition-colors">
            Marketplace
          </Link>
          <Link href="/farmers" className="text-sm font-medium hover:text-green-600 transition-colors">
            For Farmers
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-green-600 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Contact
          </Link>
        </nav>

        <nav className="flex gap-4">
        <Link href="/login">
          <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
            Log In
          </Button>
        </Link>
        <Link href="/join">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Join Now
          </Button>
        </Link>
       </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-white z-50 w-[200px] p-4 shadow-md rounded-md">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium p-2 hover:bg-green-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium p-2 hover:bg-green-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/marketplace"
              className="text-lg font-medium p-2 hover:bg-green-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              href="/farmers"
              className="text-lg font-medium p-2 hover:bg-green-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              For Farmers
            </Link>
            <Link
              href="/blog"
              className="text-lg font-medium p-2 hover:bg-green-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium p-2 hover:bg-green-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full border-green-600 text-green-600">
                Log In
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700">Join Now</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
