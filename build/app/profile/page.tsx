import { ArrowLeft, Settings, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BottomNavigation from "../components/bottom-navigation"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="h-6 w-6 text-gray-600" />
              <span className="text-lg font-medium text-gray-900">Perfil</span>
            </Link>
            <Button size="icon" variant="ghost">
              <Settings className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-amber-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Bienvenido a Café Aroma</h2>
            <p className="text-gray-600 mb-6">Inicia sesión para acceder a tu perfil y historial de pedidos</p>
            <div className="space-y-3">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Iniciar Sesión</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Crear Cuenta
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNavigation />
    </div>
  )
}
