import React, { useState } from "react";

import { Link } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/199/503/non_2x/coin-dollar-and-hand-png.png"
          alt="MdLockLogin App"
        />
      </div>

      <div className="login-right">
        <h1>Acessar o Site</h1>

        <div className="login-loginInputEmail">
          <MdEmail />
          <input
            name="email"
            type="email"
            placeholder="Digite um email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-loginInputPassword">
          <MdLock />
          <input
            name="password"
            placeholder="Digite sua senha"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-eye">
            {show ? (
              <HiEye size={20} onClick={handleClick} />
            ) : (
              <HiEyeOff size={20} onClick={handleClick} />
            )}
          </div>
        </div>

        <Link
          className="linkbuttonget"
          type="submit"
          as={Link}
          to="/converter/"
        >
          <p>Entrar</p>
        </Link>

        <h4>Não tenho conta</h4>

        <Link className="linkbutton" type="submit" as={Link} to="/register/">
          <p>Cadastrar</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
