import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Instagram } from "lucide-react"
import { SocialMediaSection } from "@/components/social-media-section"

const featuredProducts = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=60",
    description: "Premium wireless headphones with industry-leading noise cancellation",
    category: "Audio",
  },
  {
    id: 2,
    name: "Apple Watch Series 9",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60",
    description: "Advanced health monitoring and fitness tracking",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Logitech MX Master 3S",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60",
    description: "Ultra-precise wireless mouse for professionals",
    category: "Accessories",
  },
]

const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Cutting-edge gadgets and devices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&auto=format&fit=crop&q=60",
    size: "large",
    color: "from-blue-500/60",
  },
  {
    id: 2,
    name: "Accessories",
    description: "Essential add-ons for your devices",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&auto=format&fit=crop&q=60",
    size: "small",
    color: "from-purple-500/60",
  },
  {
    id: 3,
    name: "Audio",
    description: "Premium sound experience",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&auto=format&fit=crop&q=60",
    size: "small",
    color: "from-red-500/60",
  },
  {
    id: 4,
    name: "Smart Home",
    description: "Modern living solutions",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&auto=format&fit=crop&q=60",
    size: "large",
    color: "from-green-500/60",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-4 md:py-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#F8F9FA]">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              {/* Subtitle */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span className="text-sm font-medium tracking-wider text-gray-600">NEW COLLECTION</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-gray-900">Discover Your</span>
                <span className="block text-gray-900 mt-2">Perfect Style</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                Explore our curated collection of premium products designed to elevate your lifestyle. 
                From timeless classics to modern essentials.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="bg-black hover:bg-gray-800 px-8">
                  <Link href="/products">Shop Collection</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">10k+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[600px] lg:h-[800px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop&q=60"
                alt="Fashion Collection"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50%</div>
                  <div className="text-sm text-gray-600">OFF</div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div className="text-sm font-medium text-gray-600">Trending Now</div>
                <div className="text-xl font-bold text-gray-900">Summer Collection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Featured Products */}
       <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Button asChild variant="outline" size="sm">
              <Link href="/products" className="flex items-center gap-2">
                View All
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer border-0 shadow-sm hover:shadow-md transition-all duration-300 pt-0 overflow-hidden bg-white"
              >
                <Link href={`/products/${product.id}`}>
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-gray-900">
                          {product.category}
                        </span>
                      </div>
                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8C13.3333 5.05448 10.9455 2.66667 8 2.66667C5.05448 2.66667 2.66667 5.05448 2.66667 8C2.66667 10.9455 5.05448 13.3333 8 13.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 5.33333V8L9.33333 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 4.66667L11.3333 2.66667L9.33333 4.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.66667 11.3333V13.3333H4.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.3333 2.66667H9.33333V4.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.66667 13.3333H6.66667V11.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.66667 4.66667L4.66667 2.66667L6.66667 4.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-base">{product.name}</h3>
                        <p className="text-lg font-bold">${product.price}</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < 4 ? "#FCD34D" : "#E5E7EB"} xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1.33334L10.06 5.50668L14.6667 6.18001L11.3333 9.42668L12.12 14.0133L8 11.8467L3.88 14.0133L4.66667 9.42668L1.33333 6.18001L5.94 5.50668L8 1.33334Z" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">(24)</span>
                        </div>
                        <Button size="sm" className="bg-black hover:bg-gray-800">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Side */}
            <div className="lg:pr-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-4">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span className="text-sm font-medium tracking-wider text-gray-600">OUR STORY</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 leading-tight">
                Pioneering Tech Innovation Since 2014
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Born from a passion for cutting-edge technology, we've grown from a small tech enthusiast 
                group into a global destination for premium electronics. Our mission is to bring the latest 
                innovations and high-quality gadgets to tech-savvy consumers worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Tech Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Tech Brands</div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-black hover:bg-gray-800">
                <Link href="/about">Discover Our Journey</Link>
              </Button>
            </div>

            

            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=60"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 z-10 -right-4 w-24 h-24 bg-black rounded-xl flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-xs">Years of Excellence</div>
                  </div>
                </div>
              {/* Floating Card */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12L11 15L16 9" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600">Trusted by</div>
                    <div className="text-base font-bold">10k+ Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Banner Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Button asChild variant="outline" size="sm">
              <Link href="/categories" className="flex items-center gap-2">
                View All Categories
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4">
                {/* Main Category Banner */}
                <div className="relative overflow-hidden rounded-xl bg-[#F3F7FF] h-[300px] group">
                  <div className="absolute inset-0">
                    <Image
                      src={categories[0].image}
                      alt={categories[0].name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                        {categories[0].name}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      <Link href={`/products?category=${categories[0].id}`} className="hover:text-gray-200">
                        {categories[0].name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-200 mb-4 max-w-md">
                      {categories[0].description}
                    </p>
                    <Button asChild variant="outline" className="border-white text-black hover:bg-white hover:text-black">
                      <Link href={`/products?category=${categories[0].id}`} className="flex items-center gap-2">
                        Shop Now
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Small Category Banners */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Second Category */}
                  <div className="relative overflow-hidden rounded-xl bg-[#F0F6EF] h-[150px] group">
                    <div className="absolute inset-0">
                      <Image
                        src={categories[1].image}
                        alt={categories[1].name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                          {categories[1].name}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">
                        <Link href={`/products?category=${categories[1].id}`} className="hover:text-gray-200">
                          {categories[1].name}
                        </Link>
                      </h3>
                      <p className="text-xs text-gray-200 line-clamp-1">
                        {categories[1].description}
                      </p>
                    </div>
                  </div>

                  {/* Third Category */}
                  <div className="relative overflow-hidden rounded-xl bg-[#F8F1E6] h-[150px] group">
                    <div className="absolute inset-0">
                      <Image
                        src={categories[2].image}
                        alt={categories[2].name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                          {categories[2].name}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">
                        <Link href={`/products?category=${categories[2].id}`} className="hover:text-gray-200">
                          {categories[2].name}
                        </Link>
                      </h3>
                      <p className="text-xs text-gray-200 line-clamp-1">
                        {categories[2].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl bg-[#F3F7FF] h-[100%] group">
                <div className="absolute inset-0">
                  <Image
                    src={categories[3].image}
                    alt={categories[3].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                      {categories[3].name}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    <Link href={`/products?category=${categories[3].id}`} className="hover:text-gray-200">
                      {categories[3].name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-200 mb-4 max-w-md">
                    {categories[3].description}
                  </p>
                  <Button asChild variant="outline" className="border-white text-black hover:bg-white hover:text-black">
                    <Link href={`/products?category=${categories[3].id}`} className="flex items-center gap-2">
                      Shop Now
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialMediaSection />

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to upgrade your lifestyle?</h2>
          <p className="text-gray-300 mb-8">Join thousands of satisfied customers worldwide.</p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/70 hover:text-black"
          >
            <Link href="/products">Explore All Products</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
