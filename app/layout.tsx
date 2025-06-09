import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/ChatSupport"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Store - Minimal Ecommerce",
  description: "A clean and minimal ecommerce store",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <ChatSupport />
        </CartProvider>
      </body>
    </html>
  )
}
