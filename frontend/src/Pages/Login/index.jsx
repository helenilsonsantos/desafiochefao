import Header from "../../Componentes/Header";
import Login from "../../Componentes/Login";
import React from 'react'
import "./styles.css"



function LoginPages() {
    return (
    <div className="login-pagina">
      <Header />
      <Login />
    </div>
   
    );
}

export default LoginPages;