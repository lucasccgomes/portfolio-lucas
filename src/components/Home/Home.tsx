import React from 'react'
import './Home.css'
import ProfilePhoto1 from '../../assets/img/foto1.png'
import ProfilePhoto2 from '../../assets/img/foto2.png'

const Home = () => {
    return (
        <div className='home'>
            <div className="brief-about">
                <p className='helo'>Olá! Meu nome é,</p>
                <h1 className='myname'>Lucas <b>Gomes</b></h1>
                <div className="brief-description">
                    <p>Sou um desenvolvedor Front-end em início de carreira. <br />
                Tenho habilidades em Git, GitHub, React, TypeScript, JavaScript, HTML e CSS, adquiridas por meio de estudos e projetos pessoais. <br />
                Sou uma pessoa curiosa, comprometida e disposta a aprender constantemente para aprimorar minhas habilidades e contribuir com soluções eficientes. <br />
                Gosto de trabalhar em equipe e estou em busca de oportunidades para crescer profissionalmente e aplicar minhas habilidades de forma criativa.</p>
                </div>
            </div>
            <div className="profile-photo">
                <img src={ProfilePhoto2} alt="Lucas Gomes" />
            </div>
        </div>
    );
}

export default Home;
