import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Leaf, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Farmily</h1>
            <p className="text-xl text-green-100">
              We're on a mission to transform agriculture by connecting farmers directly with consumers, ensuring fair
              prices and promoting sustainable farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/images/10.jpg" alt="Farmily story" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Our Story</h2>
              <p className="text-gray-600">
              At our core, we believe that those who feed the nation should never go hungry.
              Today, most small farmers work tirelessly yet earn less than what they invest.
              Despite being the backbone of our food system, many can't afford to feed their own families. We're here to change that.
              </p>
              <p className="text-gray-600">
              Our platform is built to restore dignity, fairness, and sustainability to farming. 
              By connecting small-scale farmers directly with consumers and local markets, we eliminate unfair middlemen, ensure better prices, and create opportunities for long-term growth.
              </p>
              <p className="text-gray-600">
              We’re not just building a marketplace — we’re building a movement. One where farmers thrive, communities eat better, and agriculture becomes a pathway to prosperity, not poverty.
              Join us in growing a future where every farmer’s hard work truly pays off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Farmily.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We promote farming practices that protect the environment and ensure long-term agricultural viability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in the power of connection and support among farmers, consumers, and all stakeholders in the
                food system.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Fairness</h3>
              <p className="text-gray-600">
                We're committed to ensuring farmers receive fair compensation for their hard work and consumers get
                quality produce at reasonable prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Practices Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Farming Practices</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We support sustainable and ethical farming methods that benefit both people and the planet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-xl shadow-md">
              <div className="relative h-60 mb-6 rounded-lg overflow-hidden">
                <Image src="/images/07.jpg" alt="Organic Farming" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Organic Farming</h3>
              <p className="text-gray-600">
                We promote farming without synthetic pesticides and fertilizers, focusing on natural solutions that
                protect soil health and biodiversity.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-md">
              <div className="relative h-60 mb-6 rounded-lg overflow-hidden">
                <Image src="/images/08.jpg" alt="Crop Rotation" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Crop Rotation</h3>
              <p className="text-gray-600">
                Strategic planting of different crops in sequence improves soil fertility, reduces pest pressure, and
                optimizes nutrient use.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-md">
              <div className="relative h-60 mb-6 rounded-lg overflow-hidden">
                <Image src="/images/09.jpg" alt="Water Conservation" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Water Conservation</h3>
              <p className="text-gray-600">
                Efficient irrigation systems and water management practices help conserve this precious resource while
                maintaining crop yields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8">
              Whether you're a farmer looking for better market access or a consumer who cares about where your food
              comes from, we invite you to join the Farmily community.
            </p>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
