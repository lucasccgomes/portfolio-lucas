import "../Styles/Pages.css";
import "../Project.css";
import React, { useState } from "react";
import DesktoMobile from "../../../assets/img/desktop-mobile-sf.png";
import CCFlixDesktop from "../../../assets/video-project/ccflix/ccflix-desktop.mp4";
import CCFlixMobile from "../../../assets/video-project/ccflix/ccflix-mobile2.mp4";

export const CCFlix = () => {
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
            <source src={CCFlixDesktop} type="video/mp4" />
          </video>
        </div>
        <div className="video-mobile">
          <video autoPlay loop muted>
            <source src={CCFlixMobile} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="button" className="bt-descr">
        <button className="button-descrition">
          <a
            id="ccflix"
            className="button"
            onClick={() => handleDescriptionClick("clonenetflix")}
          >
            DESCRIÇÃO
          </a>
        </button>
        <button className="acessa button-descrition">
          <a
            className="button"
            target="_blank"
            href="https://lucasccgomes.github.io/ccflix/"
          >
            ABRIR
          </a>
        </button>
      </div>
      <div id="card-info">
        <div
          id="descricao-clonenetflix"
          className={`section ${
            activeSection === "clonenetflix" ? "show" : "hide"
          }`}
        >
          <div className="info">
            <p>
              Clone da Netflix, criado apenas com HTML e CSS. Com um design
              limpo e moderno, a página foi desenvolvida para imitar a
              experiência de navegação na Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
