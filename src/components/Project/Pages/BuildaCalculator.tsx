import "../Styles/Pages.css";
import "../Project.css";
import React, { useState } from "react";
import DesktoMobile from "../../../assets/img/desktop-mobile-sf.png";
import BuildaCalculatorDesktop from "../../../assets/video-project/build-a-calculator/build-a-calculator-desktop.webm";
import BuildaCalculatorMobile from "../../../assets/video-project/build-a-calculator/build-a-calculator-mobile.webm";

export const BuildaCalculator: React.FC = () => {
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
            <source src={BuildaCalculatorDesktop} type="video/mp4" />
          </video>
        </div>
        <div className="video-mobile">
          <video autoPlay loop muted>
            <source src={BuildaCalculatorMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="button" className="bt-descr">
        <button className="button-descrition">
          <a
            id="calculator"
            className="button"
            onClick={() => handleDescriptionClick("calculator")}
          >
            DESCRIÇÃO
          </a>
        </button>
        <button className="acessa button-descrition">
          <a
            className="button"
            target="_blank"
            href="https://lucasccgomes.github.io/build-a-calculator/"
          >
            ABRIR
          </a>
        </button>
      </div>
      <div id="card-info">
        <div className={`section ${
            activeSection === "calculator" ? "show" : "hide"
          }`}
          id="descricao-calculator"
        >
          <div className="info">
            <p>
              Calculadora web desenvolvida com HTML, CSS e JavaScript, que
              permite aos usuários realizar cálculos matemáticos básicos. Com
              uma interface intuitiva e amigável, os usuários podem inserir
              números e escolher entre diferentes operações matemáticas,
              incluindo adição, subtração, multiplicação e divisão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
