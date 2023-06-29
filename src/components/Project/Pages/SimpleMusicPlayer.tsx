import "../Styles/Pages.css";
import "../Project.css";
import React, { useState } from "react";
import DesktoMobile from "../../../assets/img/desktop-mobile-sf.png";
import MusicPlayerDesktop from "../../../assets/video-project/music-player/music-player-desktop.webm";
import MusicPlayerMobile from "../../../assets/video-project/music-player/music-player-mobile.webm";

export const SimpleMusicPlayer = () => {
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
            <source src={MusicPlayerDesktop} type="video/mp4" />
          </video>
        </div>
        <div className="video-mobile">
          <video autoPlay loop muted>
            <source src={MusicPlayerMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="button" className="bt-descr">
        <button className="button-descrition">
          <a
            id="musicplayer"
            className="button"
            onClick={() => handleDescriptionClick("musicplayer")}
          >
            DESCRIÇÃO
          </a>
        </button>
        <button className="acessa button-descrition">
          <a
            className="button"
            target="_blank"
            href="https://lucasccgomes.github.io/music-player/"
          >
            ABRIR
          </a>
        </button>
      </div>
      <div id="card-info">
        <div
          id="descricao-musicplayer"
          className={`section ${
            activeSection === "musicplayer" ? "show" : "hide"
          }`}
        >
          <div className="info">
            <p>
              Player de música simples utilizando HTML, CSS e JavaScript. O
              player possui suas próprias músicas e é fácil de usar. Permite
              reproduzir, pausar, avançar e retroceder entre as faixas e
              visualizar o tempo decorrido da música.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
