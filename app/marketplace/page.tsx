import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ShoppingCart, Star, Leaf, Truck } from "lucide-react"

export default function MarketplacePage() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Organic Rice",
      farmer: "Rajesh Kumar",
      location: "Punjab",
      price: 120,
      unit: "kg",
      rating: 4.8,
      image: "/images/11.jpg",
      organic: true,
    },
    {
      id: 2,
      name: "Fresh Tomatoes",
      farmer: "Lakshmi Devi",
      location: "Karnataka",
      price: 40,
      unit: "kg",
      rating: 4.5,
      image: "/images/12.jpg",
      organic: true,
    },
    {
      id: 3,
      name: "Wheat Flour",
      farmer: "Amit Patel",
      location: "Gujarat",
      price: 60,
      unit: "kg",
      rating: 4.7,
      image: "/images/13.jpg",
      organic: false,
    },
    {
      id: 4,
      name: "Organic Potatoes",
      farmer: "Madhav Iyer",
      location: "Kerala",
      price: 30,
      unit: "kg",
      rating: 4.6,
      image: "/images/14.jpg",
      organic: true,
    },
    {
      id: 5,
      name: "Fresh Apples",
      farmer: "Sahil Nagar",
      location: "Rajasthan",
      price: 150,
      unit: "kg",
      rating: 4.9,
      image: "/images/15.jpg",
      organic: true,
    },
    {
      id: 6,
      name: "Basmati Rice",
      farmer: "Vikram Reddy",
      location: "Telangana",
      price: 180,
      unit: "kg",
      rating: 4.7,
      image: "/images/16.jpg",
      organic: false,
    },
    {
      id: 7,
      name: "Organic Onions",
      farmer: "Meena Kumari",
      location: "Maharashtra",
      price: 35,
      unit: "kg",
      rating: 4.4,
      image: "/images/17.jpg",
      organic: true,
    },
    {
      id: 8,
      name: "Fresh Mangoes",
      farmer: "Ravi Kumar",
      location: "Haryana",
      price: 200,
      unit: "kg",
      rating: 4.9,
      image: "/images/18.jpg",
      organic: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16 relative">
        <div className="relative z-10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Farmily Marketplace</h1>
              <p className="text-xl text-green-100 mb-8">Fresh produce directly from farmers to your doorstep.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Search for products..." className="pl-10 bg-white text-gray-800 w-full" />
                </div>
                <Button className="bg-green-600 hover:bg-green-700">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-green-800">Filters</h3>
                  <Filter className="h-5 w-5 text-green-600" />
                </div>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h4 className="font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="vegetables" className="mr-2" />
                        <label htmlFor="vegetables" className="text-sm">
                          Vegetables
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="fruits" className="mr-2" />
                        <label htmlFor="fruits" className="text-sm">
                          Fruits
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="grains" className="mr-2" />
                        <label htmlFor="grains" className="text-sm">
                          Grains & Cereals
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="dairy" className="mr-2" />
                        <label htmlFor="dairy" className="text-sm">
                          Dairy Products
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="spices" className="mr-2" />
                        <label htmlFor="spices" className="text-sm">
                          Spices
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Min" type="number" className="text-sm" />
                        <Input placeholder="Max" type="number" className="text-sm" />
                      </div>
                      <Button variant="outline" className="w-full text-sm border-green-600 text-green-600">
                        Apply
                      </Button>
                    </div>
                  </div>

                  {/* Organic Filter */}
                  <div>
                    <h4 className="font-medium mb-3">Farming Method</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="organic" className="mr-2" />
                        <label htmlFor="organic" className="text-sm">
                          Organic
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="conventional" className="mr-2" />
                        <label htmlFor="conventional" className="text-sm">
                          Conventional
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <h4 className="font-medium mb-3">Location</h4>
                    <select className="w-full p-2 border rounded-md text-sm">
                      <option value="">All Locations</option>
                      <option value="punjab">Punjab</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="up">Uttar Pradesh</option>
                    </select>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-green-800">Fresh Produce</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="p-2 border rounded-md text-sm">
                    <option value="popular">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={`/images/product-${index + 1}.jpg`}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {product.organic && (
                        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                          <Leaf className="h-3 w-3 mr-1" />
                          Organic
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-green-800">{product.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span>by {product.farmer}</span>
                        <span className="mx-1">•</span>
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center text-yellow-500 mr-2">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">(120+ reviews)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-lg">
                          ₹{product.price}
                          <span className="text-sm font-normal text-gray-600">/{product.unit}</span>
                        </div>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-green-600 text-white border-green-600">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                    Next
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-green-800 mb-2">100% Fresh & Organic</h3>
                <p className="text-gray-600 text-sm">
                  We ensure all products are fresh and many are certified organic, grown without harmful pesticides.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-green-800 mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">
                  We deliver your order within 24-48 hours to ensure maximum freshness.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-green-800 mb-2">Secure Payments</h3>
                <p className="text-gray-600 text-sm">Multiple secure payment options available for your convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
