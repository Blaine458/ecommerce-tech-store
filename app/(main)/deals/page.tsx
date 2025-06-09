import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Tag, Percent } from "lucide-react"

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070"
          alt="Deals and offers"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Deals</h1>
          <p className="text-lg text-gray-200">
            Limited time offers on our most popular products
          </p>
        </div>
      </section>

      {/* Featured Deal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070"
                  alt="Premium Headphones"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-red-600 mb-4">
                  <Tag className="w-5 h-5" />
                  <span className="font-medium">Flash Sale</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Premium Headphones</h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold">$199</span>
                  <span className="text-gray-500 line-through">$299</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                    Save 33%
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Experience crystal-clear sound with our premium noise-cancelling headphones. 
                  Limited time offer while stocks last.
                </p>
                <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Ends in 2 days</span>
                </div>
                <Button asChild size="lg">
                  <Link href="/products/headphones">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Deals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Current Deals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Watch",
                originalPrice: 299,
                salePrice: 199,
                image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964",
                discount: 33,
                endsIn: "3 days"
              },
              {
                title: "Wireless Earbuds",
                originalPrice: 159,
                salePrice: 99,
                image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932",
                discount: 38,
                endsIn: "1 day"
              },
              {
                title: "Bluetooth Speaker",
                originalPrice: 129,
                salePrice: 79,
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1936",
                discount: 39,
                endsIn: "5 days"
              }
            ].map((deal) => (
              <div key={deal.title} className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {deal.discount}% OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{deal.title}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold">${deal.salePrice}</span>
                    <span className="text-gray-500 line-through">${deal.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Ends in {deal.endsIn}</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/products/${deal.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Deal
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories on Sale */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Categories on Sale</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Audio",
                discount: "Up to 40% off",
                image: "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935",
                link: "/categories/audio"
              },
              {
                title: "Wearables",
                discount: "Up to 35% off",
                image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1974",
                link: "/categories/wearables"
              }
            ].map((category) => (
              <Link 
                key={category.title}
                href={category.link}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-lg">{category.discount}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-black rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Deal</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter and be the first to know about our exclusive offers and deals.
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