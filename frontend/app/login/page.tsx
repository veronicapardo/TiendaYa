'use client'

export default function Login() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>

      <input type="text" placeholder="Usuario" />

      <input type="password" placeholder="Contraseña" />

      <button>Ingresar</button>
    </div>
  )
}
//aqui va la autenticacion de usuarios, para redirigir a cada menu dependiendo del tipo de usuario que se loguee