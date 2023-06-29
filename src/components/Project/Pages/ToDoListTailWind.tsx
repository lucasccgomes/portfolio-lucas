import "../Styles/Pages.css";
import "../Project.css";
import React, { useState } from "react";
import DesktoMobile from "../../../assets/img/desktop-mobile-sf.png";
import ToDoListTailWindDesktop from "../../../assets/video-project/to-do-list-tailwind/to-do-list-tailwind-desktop.webm";
import ToDoListTailWindMobile from "../../../assets/video-project/to-do-list-tailwind/to-do-list-tailwind-mobile.webm";

export const ToDoListTailWind = () => {
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
            <source src={ToDoListTailWindDesktop} type="video/mp4" />
          </video>
        </div>
        <div className="video-mobile">
          <video autoPlay loop muted>
            <source src={ToDoListTailWindMobile} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="button" className="bt-descr">
        <button className="button-descrition">
          <a
            id="todoListTailwind"
            className="button"
            onClick={() => handleDescriptionClick("todoListTailwind")}
          >
            DESCRIÇÃO
          </a>
        </button>
        <button className="acessa button-descrition">
          <a
            className="button"
            target="_blank"
            href="https://todo-list-tailwind.netlify.app/"
          >
            ABRIR
          </a>
        </button>
      </div>
      <div id="card-info">
        <div
          id="descricao-todoListTailwind"
          className={`section ${
            activeSection === "todoListTailwind" ? "show" : "hide"
          }`}
        >
          <div className="info">
            <p>
              Este projeto é uma lista de tarefas simples desenvolvida usando o
              framework CSS chamado Tailwind CSS. A lista de tarefas é uma
              ferramenta útil para ajudar você a se organizar e acompanhar as
              atividades que precisa realizar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
