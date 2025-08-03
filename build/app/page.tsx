import { Coffee, Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BottomNavigation from "./components/bottom-navigation"

const menuItems = [
  {
    id: 1,
    name: "Espresso Clásico",
    price: 2.5,
    image: "/placeholder.svg?height=200&width=200",
    category: "Espresso",
    rating: 4.8,
    description: "Café espresso tradicional con crema perfecta",
    popular: true,
  },
  {
    id: 2,
    name: "Cappuccino Artesanal",
    price: 4.25,
    image: "/placeholder.svg?height=200&width=200",
    category: "Cappuccino",
    rating: 4.9,
    description: "Cappuccino con arte latte y espuma cremosa",
    popular: true,
  },
  {
    id: 3,
    name: "Latte Vainilla",
    price: 4.75,
    image: "/placeholder.svg?height=200&width=200",
    category: "Latte",
    rating: 4.7,
    description: "Latte suave con jarabe de vainilla natural",
  },
  {
    id: 4,
    name: "Americano",
    price: 3.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Americano",
    rating: 4.6,
    description: "Café americano fuerte y aromático",
  },
  {
    id: 5,
    name: "Mocha Chocolate",
    price: 5.25,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mocha",
    rating: 4.8,
    description: "Deliciosa mezcla de café y chocolate",
  },
  {
    id: 6,
    name: "Frappé Caramelo",
    price: 5.5,
    image: "/placeholder.svg?height=200&width=200",
    category: "Frappé",
    rating: 4.9,
    description: "Bebida helada con caramelo y crema batida",
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Coffee className="h-8 w-8 text-amber-600" />
              <h1 className="text-xl font-bold text-gray-900">Café Aroma</h1>
            </div>
            <Badge variant="secondary" className="hidden sm:flex">
              Menú Digital
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bienvenido a Café Aroma</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Descubre nuestros cafés artesanales preparados con los mejores granos seleccionados
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Nuestro Menú</h3>
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            {menuItems.length} productos
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.popular && (
                  <Badge className="absolute top-3 left-3 bg-amber-500 hover:bg-amber-600">Popular</Badge>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-lg text-gray-900 line-clamp-1">{item.name}</h4>
                  <span className="text-xl font-bold text-amber-600">${item.price.toFixed(2)}</span>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{item.rating}</span>
                  <Badge variant="outline" className="ml-2 text-xs">
                    {item.category}
                  </Badge>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                <div className="flex space-x-2">
                  <Link href={`/product/${item.id}`} className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      Ver Detalles
                    </Button>
                  </Link>
                  <Button className="flex-1 bg-amber-600 hover:bg-amber-700">Añadir al Carrito</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
