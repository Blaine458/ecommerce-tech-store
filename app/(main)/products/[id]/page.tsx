"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/contexts/cart-context"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    image: "/placeholder.svg?height=600&width=600",
    description:
      "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio quality. Perfect for music lovers and professionals.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge (15 min = 3 hours)",
      "Premium drivers",
      "Comfortable over-ear design",
    ],
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "/placeholder.svg?height=600&width=600",
    description:
      "Advanced fitness tracking smartwatch with heart rate monitoring, GPS, and smartphone integration. Track your health and stay connected.",
    features: [
      "Heart rate monitoring",
      "Built-in GPS",
      "Water resistant",
      "7-day battery life",
      "Smartphone notifications",
    ],
    category: "Electronics",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 79.99,
    image: "/placeholder.svg?height=600&width=600",
    description:
      "Ergonomic aluminum laptop stand designed to improve posture and reduce neck strain. Compatible with all laptop sizes.",
    features: ["Aluminum construction", "Adjustable height", "Heat dissipation", "Non-slip base", "Portable design"],
    category: "Accessories",
  },
]

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/products">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-gray-900">${product.price}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button onClick={handleAddToCart} size="lg" className="w-full bg-black hover:bg-gray-800">
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
