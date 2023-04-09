import './Project.css';
import React, { useState } from 'react';

import { DiCss3, DiJavascript } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsCalculator, BsMusicPlayer } from 'react-icons/bs';
import { RiPagesLine, RiNetflixFill, RiCake3Line } from 'react-icons/ri';
import { MdOutlineSchool } from 'react-icons/md';

import BuildCalculator from '../../assets/img/build-a-calculator.png';
import LandingPage from '../../assets/img/landing-page.png';
import CloneNetflix from '../../assets/img/clone-netflix.png';
import MusicPlayer from '../../assets/img/music-player.png';
import CursoHtmlCss from '../../assets/img/curso-html-css.png';
import LpBoloPote from '../../assets/img/lp-bolo-pote.png';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';



const Project: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleDescriptionClick = (id: string) => {
    setActiveSection(activeSection === id ? '' : id);
  };
  return (

    <div id='project' className='project'>
      <h1>📝 Projetos</h1>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={40}
        slidesPerView={1.3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className='card-project'>
          <h1><BsCalculator />:Build-a-Calculator</h1>
          <div className="img-card">
            <img src={BuildCalculator} alt="build calculator" />
          </div>
          <div className="card-info">
            <div className="card-icon">
              <p className='progress'><AiFillHtml5 className='html5' />21.8%</p>
              <p className='progress'><DiCss3 className='css3' />19.9%</p>
              <p className='progress'><DiJavascript className='javascript' />58.3%</p>
            </div>
            <div id="button">
              <button className="button-descrition">
                <a id="calculator"
                  className="button"
                  onClick={() => handleDescriptionClick("calculator")}>DESCRIÇÃO</a>
              </button>
              <button className="acessa button-descrition">
                <a className="button" target='_blank'
                  href='https://lucasccgomes.github.io/build-a-calculator/' >ABRIR</a>
              </button>
            </div>
          </div>
          <div id="descricao-calculator" className={`section ${activeSection === "calculator" ? "show" : "hide"}`}> <div className='info'>
            <p>Calculadora web desenvolvida com HTML, CSS e JavaScript,
              que permite aos usuários realizar cálculos matemáticos básicos.
              Com uma interface intuitiva e amigável, os usuários podem inserir
              números e escolher entre diferentes operações matemáticas,
              incluindo adição, subtração, multiplicação e divisão.</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='card-project'>
          <h1><RiPagesLine />:Landing-Page</h1>
          <div className="img-card">
            <img src={LandingPage} alt="Landing Page" />
          </div>
          <div className="card-info">
            <div className="card-icon">
              <p className='progress'><AiFillHtml5 className='html5' />42.8%</p>
              <p className='progress'><DiCss3 className='css3' />57.2%</p>
              <p className='progress'><DiJavascript className='javascript' />0%</p>
            </div>
            <div id="button">
              <button className="button-descrition">
                <a id="lp"
                  className="button"
                  onClick={() => handleDescriptionClick("landingpage")}>DESCRIÇÃO</a>
              </button>
              <button className="acessa button-descrition">
                <a className="button" target='_blank'
                  href='https://lucasccgomes.github.io/landing-page/' >ABRIR</a>
              </button>
            </div>
          </div>
          <div id="descricao-landingpage" className={`section ${activeSection === "landingpage" ? "show" : "hide"}`}>
            <div className='info'>
              <p>Landing Page responsiva com menu mobile, criada usando HTML e CSS.
                A página apresenta informações de forma clara e organizada,
                com uma interface moderna e amigável.
                Este projeto é uma oportunidade de aprimorar minhas habilidades em design responsivo.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='card-project'>
          <h1><RiCake3Line />:Lp-Bolo-Pote</h1>
          <div className="img-card">
            <img src={LpBoloPote} alt="Projeto para minha esposa site de vendas de bolo no Pote" />
          </div>
          <div className="card-info">
            <div className="card-icon">
              <p className='progress'><AiFillHtml5 className='html5' />4.6%</p>
              <p className='progress'><DiCss3 className='css3' />34.7%</p>
              <p className='progress'><DiJavascript className='javascript' />60.7%</p>
            </div>
            <div id="button">
              <button className="button-descrition">
                <a id="lpbolopote"
                  className="button"
                  onClick={() => handleDescriptionClick("lpbolopote")}>DESCRIÇÃO</a>
              </button>
              <button className="acessa button-descrition">
                <a className="button" target='_blank'
                  href='https://www.carolcakes.com.br/' >ABRIR</a>
              </button>
            </div>
          </div>
          <div id="descricao-lpbolopote" className={`section ${activeSection === "lpbolopote" ? "show" : "hide"}`}>
            <div className='info'>
              <p>Desenvolvi uma página de vendas de bolo no pote para minha esposa,
                com um formulário que direciona o pedido para o WhatsApp com uma mensagem pronta.
                O design é atraente e fácil de usar, tornando a compra rápida e fácil para os clientes.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='card-project'>
          <h1><RiNetflixFill />:Clone-Netflix</h1>
          <div className="img-card">
            <img src={CloneNetflix} alt="Clone Netflix" />
          </div>
          <div className="card-info">
            <div className="card-icon">
              <p className='progress'><AiFillHtml5 className='html5' />48.6%</p>
              <p className='progress'><DiCss3 className='css3' />51.4%</p>
              <p className='progress'><DiJavascript className='javascript' />0%</p>
            </div>
            <div id="button">
              <button className="button-descrition">
                <a id="ccflix"
                  className="button"
                  onClick={() => handleDescriptionClick("clonenetflix")}>DESCRIÇÃO</a>
              </button>
              <button className="acessa button-descrition">
                <a className="button" target='_blank'
                  href='https://lucasccgomes.github.io/ccflix/' >ABRIR</a>
              </button>
            </div>
          </div>
          <div id="descricao-clonenetflix" className={`section ${activeSection === "clonenetflix" ? "show" : "hide"}`}>
            <div className='info'>
              <p>Clone da Netflix, criado apenas com HTML e CSS. Com um design limpo e moderno,
                a página foi desenvolvida para imitar a experiência de navegação na Netflix</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='card-project'>
          <h1><BsMusicPlayer />:Music-Player</h1>
          <div className="img-card">
            <img src={MusicPlayer} alt="Music Player" />
          </div>
          <div className="card-info">
            <div className="card-icon">
              <p className='progress'><AiFillHtml5 className='html5' />19.8%</p>
              <p className='progress'><DiCss3 className='css3' />31.0%</p>
              <p className='progress'><DiJavascript className='javascript' />49.2%</p>
            </div>
            <div id="button">
              <button className="button-descrition">
                <a id="musicplayer"
                  className="button"
                  onClick={() => handleDescriptionClick("musicplayer")}>DESCRIÇÃO</a>
              </button>
              <button className="acessa button-descrition">
                <a className="button" target='_blank'
                  href='https://lucasccgomes.github.io/music-player/' >ABRIR</a>
              </button>
            </div>
          </div>
          <div id="descricao-musicplayer" className={`section ${activeSection === "musicplayer" ? "show" : "hide"}`}>
            <div className='info'>
              <p>Player de música simples utilizando HTML, CSS e JavaScript.
                O player possui suas próprias músicas e é fácil de usar.
                Permite reproduzir, pausar, avançar e retroceder entre as faixas
                e visualizar o tempo decorrido da música.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='card-project'>
          <h1><MdOutlineSchool />:Curso-Html-CSS</h1>
          <div className="img-card">
            <img src={CursoHtmlCss} alt="Projeto do curso do Gustavo Guanabara" />
          </div>
          <div className="card-info">
            <div className="card-icon">
              <p className='progress'><AiFillHtml5 className='html5' />93.2%</p>
              <p className='progress'><DiCss3 className='css3' />6.8%</p>
              <p className='progress'><DiJavascript className='javascript' />0%</p>
            </div>
            <div id="button">
              <button className="button-descrition">
                <a id="cursohtmlcss"
                  className="button"
                  onClick={() => handleDescriptionClick("cursohtmlcss")}>DESCRIÇÃO</a>
              </button>
              <button className="acessa button-descrition">
                <a className="button" target='_blank'
                  href='https://lucasccgomes.github.io/html-css/desafios/d010/index.html' >ABRIR</a>
              </button>
            </div>
          </div>
          <div id="descricao-cursohtmlcss" className={`section ${activeSection === "cursohtmlcss" ? "show" : "hide"}`}>
            <div className='info'>
              <p>Projeto baseado no curso de HTML e CSS do Gustavo Guanabara,
                com o objetivo de criar uma página web funcional do zero,
                utilizando técnicas avançadas como Flexbox e Grid para melhorar
                a aparência e a estrutura da página.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div >
  );
}

export default Project;
