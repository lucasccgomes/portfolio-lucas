import "./Project.css";
import React, { useState } from "react";
import { DiCss3, DiJavascript } from "react-icons/di";
import { AiFillHtml5, AiOutlineLogin, AiFillRobot } from "react-icons/ai";
import { BsCalculator, BsMusicPlayer } from "react-icons/bs";
import {
  RiPagesLine,
  RiNetflixFill,
  RiCake3Line,
  RiTodoLine,
} from "react-icons/ri";
import { MdOutlineSchool } from "react-icons/md";
import { Pagination } from "swiper";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { CCFlix } from "./Pages/CCFlix";
import { LandingAdm } from "./Pages/LandingAdm";
import { LandingBoloPt } from "./Pages/LandingBoloPt";
import { LoginGoogle } from "./Pages/LoginGoogle";
import { HtmlCss } from "./Pages/HtmlCss";
import { Adivinhe } from "./Pages/Adivinhe";
import { ToDoListTailWind } from "./Pages/ToDoListTailWind";
import { SimpleMusicPlayer } from "./Pages/SimpleMusicPlayer";
import { BuildaCalculator } from "./Pages/BuildaCalculator";

const Project: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleDescriptionClick = (id: string) => {
    setActiveSection(activeSection === id ? "" : id);
  };
  return (
    <div id="project" className="project">
      <h1>📝 Projetos</h1>
      <Swiper
        className="mySwiper"
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Pagination, Navigation]}
        navigation={true}
      >

        <SwiperSlide className="card-project">
          <h1>
            <BsCalculator />
            :Build-a-Calculator
          </h1>
          <div className="img-card">
            <BuildaCalculator/>
          </div>
        </SwiperSlide>

        <SwiperSlide className="card-project">
          <h1>
            <RiPagesLine />
            :Landing-Page
          </h1>
          <div className="img-card">
            <LandingAdm />
          </div>        
        </SwiperSlide>

        <SwiperSlide className="card-project">
          <h1>
            <RiCake3Line />
            :Lp-Bolo-Pote
          </h1>
          <div className="img-card">
            <LandingBoloPt />
          </div>
        </SwiperSlide>

        <SwiperSlide className="card-project">
          <h1>
            <RiNetflixFill />
            :Clone-Netflix
          </h1>
          <div className="img-card">
            <CCFlix />
          </div>            
        </SwiperSlide>

        <SwiperSlide className="card-project">
          <h1>
            <AiOutlineLogin />
            :Tela-Login-Google
          </h1>
          <div className="img-card">
            <LoginGoogle />
          </div>
        </SwiperSlide>

        <SwiperSlide className="card-project">
          <h1>
            <AiFillRobot />
            :Adivinhe-o-Numero
          </h1>
          <div className="img-card">
            <Adivinhe/>
          </div>
        </SwiperSlide>

        <SwiperSlide className="card-project">
          <h1>
            <RiTodoLine />
            :To-do-List-Tailwind
          </h1>
          <div className="img-card">
            <ToDoListTailWind/>
          </div>         
        </SwiperSlide>

        <SwiperSlide className="card-project">
          <h1>
            <BsMusicPlayer />
            :Music-Player
          </h1>
          <div className="img-card">
            <SimpleMusicPlayer/>
          </div>         
        </SwiperSlide>
        <SwiperSlide className="card-project">
          <h1>
            <MdOutlineSchool />
            :Curso-Html-CSS
          </h1>
          <div className="img-card">
            <HtmlCss/>
          </div>          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
