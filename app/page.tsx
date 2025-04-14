import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, DollarSign, Users, TrendingUp, ShoppingCart, Link } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-20 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-green-800">
                Empowering Farmers, Enriching Communities
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-[600px]">
                We connect farmers directly to consumers, eliminating middlemen and ensuring fair prices for
                agricultural produce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join-now">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Join Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Farmers working in field"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>



      {/* Problem Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Problems We're Solving</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-700 p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Unfair Prices</h3>
                <p className="text-green-100">
                  Farmers are forced to sell at low prices to middlemen, reducing their income and sustainability.
                </p>
              </div>
            </div>
            <div className="bg-green-700 p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Limited Market Access</h3>
                <p className="text-green-100">
                  Small-scale farmers struggle to reach consumers directly, limiting their growth potential.
                </p>
              </div>
            </div>
            <div className="bg-green-700 p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Price Volatility</h3>
                <p className="text-green-100">
                  Unpredictable market fluctuations make it difficult for farmers to plan and invest in their farms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've built a platform that connects farmers directly with consumers, ensuring fair prices and sustainable
              agriculture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/images/sol.jpg" alt="Farmily marketplace" fill className="object-cover" />
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Direct Marketplace</h3>
                  <p className="text-gray-600">
                    Farmily is a simple, multilingual web & mobile platform that empowers farmers to sell their produce directly to local buyers, removing middlemen and restoring control over pricing and distribution.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Sustainable Practices</h3>
                  <p className="text-gray-600">
                    Unlike generic e-commerce platforms, Farmily is focused only on local produce within a few kilometers — making it fast, sustainable, and community-driven.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Community Building</h3>
                  <p className="text-gray-600">
                    Most small farmers don’t earn enough to recover their investment.
                    They grow food for the nation, but can’t feed their own families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Gallery Section */}
      <section className="py-20 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-16">Sustainable Agriculture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/01.jpg"
                alt="Organic farming"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/02.jpg"
                alt="Crop harvesting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/03.jpg"
                alt="Sustainable farming"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/04.jpg"
                alt="Local produce"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-md lg:col-span-2">
              <Image
                src="/images/05.jpg"
                alt="Farm landscape"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-md lg:col-span-2">
              <Image
                src="/images/06.jpg"
                alt="Farmers market"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-16">What Farmers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src="/images/un.jpg" alt="Farmer testimonial" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Wheat Farmer, Punjab</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Since joining Farmily, my income has increased by 40%. I no longer have to worry about middlemen taking
                most of my profits."
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src="/images/un.jpg" alt="Farmer testimonial" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Lakshmi Devi</h4>
                  <p className="text-sm text-gray-600">Vegetable Grower, Karnataka</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The platform is easy to use and has connected me with customers who value quality produce. My business
                is thriving now."
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src="/images/un.jpg" alt="Farmer testimonial" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Amit Patel</h4>
                  <p className="text-sm text-gray-600">Fruit Orchard Owner, Gujarat</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Not only am I making more money, but I've also learned sustainable farming techniques from the Farmily
                community."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Agriculture?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of farmers and consumers who are building a fairer, more sustainable food system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Join as a Farmer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-green-600 hover:bg-green-700"
            >
              Shop as a Consumer
            </Button>

          </div>
        </div>
      </section>
    </div>
  )
}
