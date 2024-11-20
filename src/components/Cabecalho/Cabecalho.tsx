"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegUserCircle } from "react-icons/fa";

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const [logado, setLogado] = useState(false)
  const [link, setLink] = useState("")

  useEffect(() => {
    verificarLogin()
  }, [])

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  const verificarLogin = () => {
    const idSindico = localStorage.getItem("idSindico")
    const idMorador = localStorage.getItem("idMorador")

    let logado : boolean = false

    if (idSindico || idMorador) {
      logado = true
      setLogado(logado)
    }

    if (logado) {
      if (idSindico) {
        setLink("/sindico")
      } else {
        setLink("/morador")
      }
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <Image
            className="navbar-logo w-20 ml-4"
            src={"/logo.png"}
            alt="logo da sustainify"
            width={100} height={100}
          />
        </Link>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="navbar-toggler-icon ml-4">{aberto ? 'X' : '☰'}</span>
        </button>
        <nav className={`navbar-menu ${aberto ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href="/integrantes" className="navbar-link">
                Sobre nós
              </Link>
            </li>          
          </ul>
        </nav>
      </div>
      { logado ? 
        <Link href={link}>
          <FaRegUserCircle className="md:w-12 md:h-12 w-8 h-8 text-cor2 hover:text-cor5 duration-500 transition"/>
        </Link>
        :
        <div className="navbar-login ms-auto">
          <Link href="/login" className="login-button">Login</Link>
        </div>
      }
    </header>
  );
}
