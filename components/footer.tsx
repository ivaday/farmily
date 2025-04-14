import Link from "next/link"
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold">FARMILY</span>
            </div>
            <p className="text-green-200 text-sm">Empowering farmers through direct market access and fair prices.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-green-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-200 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-green-200 hover:text-white text-sm">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/farmers" className="text-green-200 hover:text-white text-sm">
                  For Farmers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-green-200 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/farming-tips" className="text-green-200 hover:text-white text-sm">
                  Farming Tips
                </Link>
              </li>
              <li>
                <Link href="/sustainable-practices" className="text-green-200 hover:text-white text-sm">
                  Sustainable Practices
                </Link>
              </li>
              <li>
                <Link href="/market-prices" className="text-green-200 hover:text-white text-sm">
                  Market Prices
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-green-200 hover:text-white text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-green-200 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-400 mt-0.5" />
                <span className="text-green-200 text-sm">info@farmily.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5" />
                <span className="text-green-200 text-sm">+91 98765 43210</span>
              </li>
              <li className="text-green-200 text-sm">
                123 Agri Tower, Green Avenue
                <br />
                New Delhi, 110001
                <br />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-green-300">&copy; {new Date().getFullYear()} Farmily. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-green-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-green-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
