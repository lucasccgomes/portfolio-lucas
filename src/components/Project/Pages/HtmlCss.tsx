import "../Styles/Pages.css";
import "../Project.css";
import React, { useState } from "react";
import DesktoMobile from "../../../assets/img/desktop-mobile-sf.png";
import HtmlCssDesktop from "../../../assets/video-project/html-css/html-css-desktop.mp4";
import HtmlCssMobile from "../../../assets/video-project/html-css/html-css-mobile.webm";

export const HtmlCss = () => {
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
            <source src={HtmlCssDesktop} type="video/mp4" />
          </video>
        </div>
        <div className="video-mobile">
          <video autoPlay loop muted>
            <source src={HtmlCssMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="button" className="bt-descr">
        <button className="button-descrition">
          <a
            id="cursohtmlcss"
            className="button"
            onClick={() => handleDescriptionClick("cursohtmlcss")}
          >
            DESCRIÇÃO
          </a>
        </button>
        <button className="acessa button-descrition">
          <a
            className="button"
            target="_blank"
            href="https://lucasccgomes.github.io/html-css/desafios/d010/index.html"
          >
            ABRIR
          </a>
        </button>
      </div>
      <div id="card-info">
        <div
          id="descricao-cursohtmlcss"
          className={`section ${
            activeSection === "cursohtmlcss" ? "show" : "hide"
          }`}
        >
          <div className="info">
            <p>
              Projeto baseado no curso de HTML e CSS do Gustavo Guanabara, com o
              objetivo de criar uma página web funcional do zero, utilizando
              técnicas avançadas como Flexbox e Grid para melhorar a aparência e
              a estrutura da página.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
