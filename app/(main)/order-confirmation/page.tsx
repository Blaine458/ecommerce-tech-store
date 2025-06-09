import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto text-center border-0 shadow-sm">
          <CardContent className="p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Order #: ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <div className="space-y-3">
              <Button asChild size="lg" className="w-full bg-black hover:bg-gray-800">
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
