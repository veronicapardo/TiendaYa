'use client'

export default function CajeroPage() {
  const productos = [
    {
      nombre: "Chocolate BAURE",
      precio: "bs. 32",
      imagen:
        "https://pngimg.com/d/chocolate_PNG97183.png",
    },
    {
      nombre: "Sprite 2lts",
      precio: "bs. 20",
      imagen:
        "https://pngimg.com/d/sprite_PNG98774.png",
    },
    {
      nombre: "Chocolate BAURE",
      precio: "bs. 32",
      imagen:
        "https://pngimg.com/d/chocolate_PNG97183.png",
    },
    {
      nombre: "Sprite 2lts",
      precio: "bs. 20",
      imagen:
        "https://pngimg.com/d/sprite_PNG98774.png",
    },
    {
      nombre: "Chocolate BAURE",
      precio: "bs. 32",
      imagen:
        "https://pngimg.com/d/chocolate_PNG97183.png",
    },
    {
      nombre: "Sprite 2lts",
      precio: "bs. 20",
      imagen:
        "https://pngimg.com/d/sprite_PNG98774.png",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] p-5 gap-5">
      {/* SIDEBAR */}
      <div className="w-[230px] bg-white rounded-3xl shadow-md p-5 flex flex-col justify-between border-l-4 border-orange-400">
        <div>
          {/* LOGO */}
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-orange-500">
              tiendaYa
            </h1>
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-5">
            <button className="bg-orange-400 text-white py-3 rounded-xl font-semibold">
              🏠 Home
            </button>

            <button className="text-left font-semibold">
              🛍 Realizar pedido
            </button>

            <button className="text-left font-semibold">
              🛒 Productos
            </button>

            <button className="text-left font-semibold">
              💵 Cierre diario
            </button>

            <button className="text-left font-semibold">
              ⚙ Configuración
            </button>
          </div>
        </div>

        {/* USER */}
        <div className="bg-orange-100 rounded-2xl p-3 flex justify-between items-center">
          <span className="font-semibold text-red-800">
            👤 Cajero
          </span>

          <span>⌄</span>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="flex-1">
        {/* TITULO */}
        <h1 className="text-4xl font-bold mb-5">
          Home
        </h1>

        {/* BIENVENIDA */}
        <div className="bg-[#f3e6cf] rounded-3xl p-8 flex justify-between items-center mb-6">
          <div>
            <h2 className="text-5xl font-bold mb-2">
              ¡Bienvenido a Tienda YA! 👋
            </h2>

            <p className="text-gray-600 text-xl">
              Descubre la gran variedad de nuestros productos.
            </p>
          </div>

          {/* NOVEDADES */}
          <div className="bg-[#8b5a2b] text-white rounded-3xl p-6 w-[320px]">
            <h3 className="text-3xl font-bold mb-5">
              ¡Novedades¡
            </h3>

            <button className="bg-orange-400 px-6 py-2 rounded-full">
              Ver
            </button>
          </div>
        </div>

        {/* BUSCADOR */}
        <input
          type="text"
          placeholder="Buscar producto..."
          className="border-2 border-purple-500 w-[350px] p-3 rounded-md mb-6"
        />

        {/* CATEGORIAS */}
        <div className="flex gap-4 mb-8">
          <button className="bg-orange-400 text-white px-6 py-2 rounded-full">
            Todas
          </button>

          <button className="border border-black px-6 py-2 rounded-full">
            Bebidas
          </button>

          <button className="border border-black px-6 py-2 rounded-full">
            Cereales
          </button>

          <button className="border border-black px-6 py-2 rounded-full">
            Snacks
          </button>

          <button className="border border-black px-6 py-2 rounded-full">
            Lacteos
          </button>
        </div>

        {/* PRODUCTOS */}
        <div className="grid grid-cols-5 gap-8">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-300 p-4 flex flex-col items-center"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-[80px] h-[120px] object-contain"
              />

              <h3 className="font-semibold text-center mt-2">
                {producto.nombre}
              </h3>

              <p className="text-gray-500 mb-4">
                {producto.precio}
              </p>

              <button className="bg-orange-400 text-white px-8 py-2 rounded-full">
                Añadir
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}