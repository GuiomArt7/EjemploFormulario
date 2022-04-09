import React from 'react'
import style from './style.css'
import Formulario from './Registro'

function Login() {
  return (
    <div>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
        <body>
            <form class="formulario">
                <h1>Inicia sesión</h1>
                <div class="contenedor">
                    <div class="contenedor-input">
                        <i class='bx bx-envelope icon'></i>
                        <input type="email" placeholder="Escribe tu e-mail"/>
                    </div>
                    <div class="contenedor-input">
                        <i class='bx bxs-key icon'></i>
                        <input type="password" placeholder="Escribe tu contraseña"/>
                    </div>
                    <input type="submit" value="Registrarme" class="boton"/>
                    <p>¿No tienes una cuenta? <a class="link" href="/">Regístrate</a></p>
                </div>
            </form>
        </body>

    </div>
  )
}

export default Login