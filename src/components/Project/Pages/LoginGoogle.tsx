import "../Styles/Pages.css";
import "../Project.css";
import React, { useState } from "react";
import DesktoMobile from "../../../assets/img/desktop-mobile-sf.png";
import TelaLoginGoogleDesktop from "../../../assets/video-project/tela-login-firebase/tela-login-firebase-desktop.webm";
import TelaLoginGoogleMobile from "../../../assets/video-project/tela-login-firebase/tela-login-firebase-mobile.webm";

export const LoginGoogle = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleDescriptionClick = (id: string) => {
    setActiveSection(activeSection === id ? "" : id);
  };
  return (
    <div>
      <div className="img-all-display">
        <img src={DesktoMobile} alt="tela desktop e mobile" />
        <div className="video-desktop">
          <video autoPlay loop muted>
            <source src={TelaLoginGoogleDesktop} type="video/mp4" />
          </video>
        </div>
        <div className="video-mobile">
          <video autoPlay loop muted>
            <source src={TelaLoginGoogleMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="button" className="bt-descr">
        <button className="button-descrition">
          <a
            id="telalogingoogle"
            className="button"
            onClick={() => handleDescriptionClick("telalogingoogle")}
          >
            DESCRIÇÃO
          </a>
        </button>
        <button className="acessa button-descrition">
          <a
            className="button"
            target="_blank"
            href="https://lucasccgomes.github.io/tela-login-google/"
          >
            ABRIR
          </a>
        </button>
      </div>
      <div id="card-info">
        <div
          id="descricao-telalogingoogle"
          className={`section ${
            activeSection === "telalogingoogle" ? "show" : "hide"
          }`}
        >
          <div className="info">
            <p>
              Tela de login com autenticação usando contas do Google, utilizando
              o serviço Firebase como plataforma de backend. A ideia é oferecer
              aos usuários a possibilidade de acessar o sistema de forma rápida
              e segura, utilizando suas contas do Google para autenticação. O
              Firebase será responsável por gerenciar a autenticação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
