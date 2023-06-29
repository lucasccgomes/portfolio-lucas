import "../Styles/Pages.css";
import "../Project.css";
import React, { useState } from "react";
import DesktoMobile from "../../../assets/img/desktop-mobile-sf.png";
import LandingAdmDesktop from "../../../assets/video-project/landing-adm/landing-adm-desktop.webm";
import LandingAdmMobile from "../../../assets/video-project/landing-adm/landing-adm-mobile.mp4";

export const LandingAdm = () => {
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
            <source src={LandingAdmDesktop} type="video/mp4" />
          </video>
        </div>
        <div className="video-mobile video-admin" >
          <video autoPlay loop muted>
            <source src={LandingAdmMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="button" className="bt-descr">
        <button className="button-descrition">
          <a
            id="lp"
            className="button"
            onClick={() => handleDescriptionClick("landingpage")}
          >
            DESCRIÇÃO
          </a>
        </button>
        <button className="acessa button-descrition">
          <a
            className="button"
            target="_blank"
            href="https://lucasccgomes.github.io/landing-page/"
          >
            ABRIR
          </a>
        </button>
      </div>
      <div id="card-info">
        <div
          id="descricao-landingpage"
          className={`section ${
            activeSection === "landingpage" ? "show" : "hide"
          }`}
        >
          <div className="info">
            <p>
              Landing Page responsiva com menu mobile, criada usando HTML e CSS.
              A página apresenta informações de forma clara e organizada, com
              uma interface moderna e amigável. Este projeto é uma oportunidade
              de aprimorar minhas habilidades em design responsivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
