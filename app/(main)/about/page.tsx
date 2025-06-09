import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070"
          alt="Store interior"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg text-gray-200">
            Building the future of retail, one customer at a time
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Founded in 2024, we set out to revolutionize the online shopping experience. 
              Our mission is to provide customers with not just products, but a seamless 
              journey from discovery to delivery.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070"
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make starts with our customers. We're committed to 
                exceeding expectations and creating memorable shopping experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality & Trust</h3>
              <p className="text-gray-600">
                We maintain the highest standards in product quality and customer service, 
                building trust through transparency and reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a community of like-minded individuals who share our passion 
                for quality products and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
              },
              {
                name: "Michael Chen",
                role: "Head of Operations",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
              },
              {
                name: "Emma Rodriguez",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
              },
              {
                name: "David Kim",
                role: "Customer Experience",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-2">50K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">10K+</div>
              <p className="text-gray-600">Products</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">Support</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">100%</div>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-black rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Experience the difference of shopping with a company that truly cares about 
              its customers and the quality of its products.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 