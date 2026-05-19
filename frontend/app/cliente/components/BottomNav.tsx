'use client'
import React from 'react'
// Crear un componente de navegación inferior para la aplicación, que se mostrará en todas las páginas del cliente, repartidor y cajero. Este componente tendrá botones para navegar a las diferentes secciones de la aplicación, como Home, Search, Cart y Profile
export default function BottomNav(){ //crear una funcion publica para que pueda ser usada en otras partes del proyecto
    const NavItems = [
        { icono:'🏠', label: 'Home'},
        { icono:'🍔', label: 'Productos'},
        { icono:'🛒', label: 'Carrito'},
        { icono:'📦', label: 'Mis pedidos'},
        { icono:'👤', label: 'Perfil'},
    ]
    return(
        <nav style={{position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff', padding: '10px 0', borderTop: '1px solid #ccc'}}>
            {NavItems.map((item, index) => (
                <button key={index} style={{background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer'}}>
                    {item.icono}
                </button>
            ))}
        </nav>
    )
}
