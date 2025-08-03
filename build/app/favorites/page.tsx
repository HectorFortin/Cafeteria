import { ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BottomNavigation from "../components/bottom-navigation"

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="h-6 w-6 text-gray-600" />
              <span className="text-lg font-medium text-gray-900">Favoritos</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No tienes favoritos aún</h2>
          <p className="text-gray-600 mb-6">Agrega productos a tus favoritos para encontrarlos fácilmente</p>
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700">Explorar Menú</Button>
          </Link>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
