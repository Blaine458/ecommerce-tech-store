"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/contexts/cart-context"

const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium wireless headphones with noise cancellation",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Advanced fitness tracking and notifications",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Ergonomic aluminum laptop stand",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Precision wireless mouse with ergonomic design",
    category: "Accessories",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Multi-port USB-C hub with 4K HDMI output",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Portable speaker with premium sound quality",
    category: "Electronics",
  },
]

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState("name")
  const [filterBy, setFilterBy] = useState("all")
  const { addToCart } = useCart()

  const filteredProducts = allProducts.filter(
    (product) => filterBy === "all" || product.category.toLowerCase() === filterBy,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return a.name.localeCompare(b.name)
  })

  return (
    <div className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">All Products</h1>

          <div className="flex gap-4">
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <Link href={`/products/${product.id}`}>
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-lg mb-2 hover:text-gray-600">{product.name}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">${product.price}</p>
                    <Button onClick={() => addToCart(product)} size="sm" className="bg-black hover:bg-gray-800">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  )
}
