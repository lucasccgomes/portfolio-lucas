import "../Styles/Pages.css";
import "../Project.css";
import React, { useState } from "react";
import DesktoMobile from "../../../assets/img/desktop-mobile-sf.png";
import AdivinheDesktop from "../../../assets/video-project/adivinhe/adivinhe-desktop.webm";
import AdivinheMobile from "../../../assets/video-project/adivinhe/adivinhe-mobile.webm";

export const Adivinhe = () => {
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
            <source src={AdivinheDesktop} type="video/mp4" />
          </video>
        </div>
        <div className="video-mobile">
          <video autoPlay loop muted>
            <source src={AdivinheMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="button" className="bt-descr">
      <button className="button-descrition">
                <a
                  id="adivinheNumero"
                  className="button"
                  onClick={() => handleDescriptionClick("adivinheNumero")}
                >
                  DESCRIÇÃO
                </a>
              </button>
              <button className="acessa button-descrition">
                <a
                  className="button"
                  target="_blank"
                  href="https://lucasccgomes.github.io/adivinhe-o-numero/"
                >
                  ABRIR
                </a>
              </button>
            </div>
      <div id="card-info" >
      <div
            id="descricao-adivinheNumero"
            className={`section ${
              activeSection === "adivinheNumero" ? "show" : "hide"
            }`}
          >
            <div className="info">
              <p>
                Este projeto é um jogo de adivinhação de números desenvolvido
                para me ajudar a praticar habilidades em JavaScript. Nele, um
                número é selecionado aleatoriamente pelo robô e seu objetivo
                como jogador é adivinhar qual número foi escolhido.
              </p>
            </div>
          </div>
          </div>
    </div>
  );
};
