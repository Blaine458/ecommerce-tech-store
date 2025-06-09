"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

const socialPosts = [
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999",
    likes: "2.4k",
    comments: "128",
    caption: "Our latest collection of smart home devices is now available! 🏠✨ #SmartHome #TechLife",
    date: "2 hours ago"
  },
  {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070",
    likes: "1.8k",
    comments: "95",
    caption: "New wireless headphones just dropped! 🎧 Experience music like never before. #AudioTech #NewRelease",
    date: "5 hours ago"
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",
    likes: "3.2k",
    comments: "156",
    caption: "Limited edition sneakers available now! Don't miss out on these beauties 👟 #SneakerHead #NewDrop",
    date: "1 day ago"
  }
]

export function SocialMediaSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Follow Us on Social Media</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay connected with us and be the first to know about new products, 
            exclusive offers, and behind-the-scenes content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square">
                <Image
                  src={post.image}
                  alt="Social media post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <span className="font-medium">@store</span>
                  </div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-600 mb-3 line-clamp-2">{post.caption}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Follow Us on Instagram
              <Instagram className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 