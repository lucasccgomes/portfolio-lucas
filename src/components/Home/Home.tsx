import React from 'react'
import './Home.css'
import ProfilePhoto1 from '../../assets/img/foto1.png'
import ProfilePhoto2 from '../../assets/img/foto2.png'
import { BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'

const Home = () => {
    return (
        <div className='home'>
            <div className="brief-about">
                <p className='helo'>Olá, Eu sou o Lucas</p>
                <h1 className='myname'>FRONTEND</h1>
                <h1 className='myname developer'><b>DEVELOPER</b></h1>
                <div className="brief-description">
                    <p>Sou um desenvolvedor Front-end em início de carreira. <br />
                        Tenho habilidades em Git, GitHub, React, TypeScript, JavaScript, HTML e CSS, adquiridas por meio de estudos e projetos pessoais. <br />
                        Sou uma pessoa curiosa, comprometida e disposta a aprender constantemente para aprimorar minhas habilidades e contribuir com soluções eficientes. <br />
                        {/*Gosto de trabalhar em equipe e estou em busca de oportunidades para crescer profissionalmente e aplicar minhas habilidades de forma criativa.*/}</p>
                </div>
                <div className="icons">
          <a target='_blank' href="https://www.linkedin.com/in/lucasccgomes/"><BsLinkedin className='linkedin' /></a>
          <a target='_blank' href="https://github.com/lucasccgomes"><BsGithub className='github' /></a>
          <a target='_blank' href="https://wa.me/5547991399367"><BsWhatsapp className='whatsapp' /></a>
        </div>
            </div>
            <div className="profile-photo">
                <img src={ProfilePhoto2} alt="Lucas Gomes" />
            </div>
        </div>
    );
}

export default Home;
