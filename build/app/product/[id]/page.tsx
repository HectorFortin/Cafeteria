import { ArrowLeft, Heart, Minus, Plus, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import BottomNavigation from "../../components/bottom-navigation"

// Simulamos datos del producto (en una app real vendría de una API/base de datos)
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: 1,
      name: "Espresso Clásico",
      price: 2.5,
      image: "/placeholder.svg?height=400&width=400",
      category: "Espresso",
      rating: 4.8,
      reviews: 124,
      description:
        "Nuestro espresso clásico es la base perfecta para cualquier bebida de café. Preparado con granos 100% arábica tostados a la perfección, ofrece un sabor intenso y una crema dorada que deleitará tus sentidos.",
      ingredients: ["Café arábica 100%", "Agua filtrada"],
      nutritionalInfo: {
        calories: 5,
        caffeine: "75mg",
        size: "30ml",
      },
      popular: true,
      preparationTime: "2-3 min",
    },
    "2": {
      id: 2,
      name: "Cappuccino Artesanal",
      price: 4.25,
      image: "/placeholder.svg?height=400&width=400",
      category: "Cappuccino",
      rating: 4.9,
      reviews: 89,
      description:
        "Cappuccino artesanal con arte latte creado por nuestros baristas expertos. La combinación perfecta de espresso, leche vaporizada y espuma cremosa, decorado con hermosos diseños que hacen de cada taza una obra de arte.",
      ingredients: ["Espresso doble", "Leche entera", "Espuma de leche"],
      nutritionalInfo: {
        calories: 120,
        caffeine: "150mg",
        size: "180ml",
      },
      popular: true,
      preparationTime: "4-5 min",
    },
  }

  return products[id as keyof typeof products] || products["1"]
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="h-6 w-6 text-gray-600" />
              <span className="text-lg font-medium text-gray-900">Volver al Menú</span>
            </Link>
            <Button size="icon" variant="ghost">
              <Heart className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-lg"
            />
            {product.popular && (
              <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-600">Popular</Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="outline" className="text-amber-600 border-amber-600">
                  {product.category}
                </Badge>
                <span className="text-sm text-gray-500">Tiempo: {product.preparationTime}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reseñas)</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            {/* Ingredients */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Ingredientes</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="secondary">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Nutritional Info */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Información Nutricional</h3>
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-3 text-center">
                    <div className="text-2xl font-bold text-amber-600">{product.nutritionalInfo.calories}</div>
                    <div className="text-sm text-gray-600">Calorías</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-3 text-center">
                    <div className="text-2xl font-bold text-amber-600">{product.nutritionalInfo.caffeine}</div>
                    <div className="text-sm text-gray-600">Cafeína</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-3 text-center">
                    <div className="text-2xl font-bold text-amber-600">{product.nutritionalInfo.size}</div>
                    <div className="text-sm text-gray-600">Tamaño</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Price and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-amber-600">${product.price.toFixed(2)}</span>
                <div className="flex items-center space-x-3">
                  <Button size="icon" variant="outline">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-medium px-4">1</span>
                  <Button size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-6">
                Añadir al Carrito - ${product.price.toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
