import React from "react";
import style from './style.css';
import login from "./Login";

const Registro = () => {
  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log("Hola")
  }
  return (
    <div>
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      <body>
        <form className="formulario" onSubmit={handleSubmit} >
          <h1>Regístrate</h1>
          <div className="contenedor">
            <div className="contenedor-input">
              <i className="bx bx-envelope icon"></i>
              <input type="email" placeholder="Escribe tu e-mail" required />
            </div>
            <div className="contenedor-input">
              <i className="bx bxs-key icon"></i>
              <input type="password" placeholder="Escribe tu contraseña" required/>
            </div>
            <div className="contenedor-input">
              <i className="bx bxs-key icon"></i>
              <input type="password" placeholder="Confirma tu contraseña" required/>
            </div>
            <button className="boton">Registrarme</button>
            <p>
              ¿Ya tienes una cuenta?{" "}
              <a className="link" href="login">
                Inicia sesión
              </a>
            </p>
          </div>
        </form>
      </body>
    </div>
  );
};

export default Registro;
