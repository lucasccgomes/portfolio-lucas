import "../Styles/Pages.css";
import "../Project.css";
import React, { useState } from "react";
import DesktoMobile from "../../../assets/img/desktop-mobile-sf.png";
import LandingBoloPtDesktop from "../../../assets/video-project/landing-bolo-pt/landing-bolo-pt-desktop.mp4";
import LandingBoloPtMobile from "../../../assets/video-project/landing-bolo-pt/landing-bolo-pt-mobile.webm";

export const LandingBoloPt = () => {
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
            <source src={LandingBoloPtDesktop} type="video/mp4" />
          </video>
        </div>
        <div className="video-mobile">
          <video autoPlay loop muted>
            <source src={LandingBoloPtMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="button" className="bt-descr">
        <button className="button-descrition">
          <a
            id="lpbolopote"
            className="button"
            onClick={() => handleDescriptionClick("lpbolopote")}
          >
            DESCRIÇÃO
          </a>
        </button>
        <button className="acessa button-descrition">
          <a
            className="button"
            target="_blank"
            href="https://www.carolcakes.com.br/"
          >
            ABRIR
          </a>
        </button>
      </div>
      <div id="card-info">
        <div
          id="descricao-lpbolopote"
          className={`section ${
            activeSection === "lpbolopote" ? "show" : "hide"
          }`}
        >
          <div className="info">
            <p>
              Desenvolvi uma página de vendas de bolo no pote para minha esposa,
              com um formulário que direciona o pedido para o WhatsApp com uma
              mensagem pronta. O design é atraente e fácil de usar, tornando a
              compra rápida e fácil para os clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
