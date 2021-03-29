import React from "react";

import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";

import "./register.css";

function Register() {
  return (
    <div className="register">
      <div className="icon-register">
        <AiOutlineUserAdd />
      </div>

      <div className="register-user">
        <h1>Cadastrar-se</h1>

        <div className="register-registerInputName">
          <input type="text" placeholder="Digite seu Nome" />
        </div>

        <div className="register-registerInputEmail">
          <input type="text" placeholder="Digite sua E-mail" />
        </div>

        <div className="register-registerInputPassword">
          <input type="text" placeholder="Digite sua senha" />
        </div>

        <button className="buttonenter" type="submit">
          Cadastrar
        </button>

        <Link className="linkback" type="submit" as={Link} to="/">
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default Register;
