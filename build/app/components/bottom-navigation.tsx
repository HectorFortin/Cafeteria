"use client"

import { Coffee, Heart, Home, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    name: "Inicio",
    href: "/",
    icon: Home,
  },
  {
    name: "Menú",
    href: "/menu",
    icon: Coffee,
  },
  {
    name: "Carrito",
    href: "/cart",
    icon: ShoppingCart,
  },
  {
    name: "Favoritos",
    href: "/favorites",
    icon: Heart,
  },
  {
    name: "Perfil",
    href: "/profile",
    icon: User,
  },
]

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href === "/" && pathname === "/")

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors",
                isActive ? "text-amber-600 bg-amber-50" : "text-gray-500 hover:text-gray-700",
              )}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
