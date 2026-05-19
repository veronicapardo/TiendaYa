'use client'
import React from "react"

export default function Navbar() {
  return (
    <div className="w-full bg-white p-4 sticky top-0 z-40 shadow-sm space-y-3">
      {/* Logo/Marca */}
      <div className="text-center">
        <h1 className="text-2xl font-black text-orange-500 tracking-wider">
          tienda<span className="text-amber-500">Ya!</span>
        </h1>
      </div>
      
      {/* Input de Búsqueda */}
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="Buscar..." 
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-sm"
        />
        <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-orange-600 transition-colors">
          Buscar
        </button>
      </div>
    </div>
  )
}
}