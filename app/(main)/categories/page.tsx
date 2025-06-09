import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Headphones, Watch, Speaker, Camera, Laptop, Phone } from "lucide-react"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070"
          alt="Product categories"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h1>
          <p className="text-lg text-gray-200">
            Discover our curated collection of premium products
          </p>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Audio",
                description: "Premium headphones, speakers, and audio accessories",
                icon: Headphones,
                image: "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935",
                link: "/categories/audio",
                count: "24 products"
              },
              {
                title: "Wearables",
                description: "Smart watches and fitness trackers",
                icon: Watch,
                image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1974",
                link: "/categories/wearables",
                count: "18 products"
              },
              {
                title: "Speakers",
                description: "Portable and home audio systems",
                icon: Speaker,
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1936",
                link: "/categories/speakers",
                count: "15 products"
              },
              {
                title: "Cameras",
                description: "Professional and consumer cameras",
                icon: Camera,
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964",
                link: "/categories/cameras",
                count: "12 products"
              },
              {
                title: "Laptops",
                description: "High-performance laptops and accessories",
                icon: Laptop,
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071",
                link: "/categories/laptops",
                count: "20 products"
              },
              {
                title: "Phones",
                description: "Latest smartphones and accessories",
                icon: Phone,
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1970",
                link: "/categories/phones",
                count: "16 products"
              }
            ].map((category) => (
              <Link 
                key={category.title}
                href={category.link}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-black font-medium">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Category */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070"
                  alt="Premium Audio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Premium Audio Collection</h2>
                <p className="text-gray-600 mb-8">
                  Experience sound like never before with our curated collection of premium audio equipment. 
                  From noise-cancelling headphones to high-fidelity speakers, discover the perfect audio 
                  solution for your needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span>Premium noise-cancelling headphones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span>Wireless earbuds with crystal-clear sound</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span>High-fidelity speakers for immersive audio</span>
                  </div>
                </div>
                <Button asChild size="lg" className="mt-8">
                  <Link href="/categories/audio">
                    Explore Audio Collection
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-black rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter to receive updates on new products and exclusive offers.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/newsletter">
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 