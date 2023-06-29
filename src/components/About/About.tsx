import React from 'react';
import './About.css'
import ImgAbout from '../../assets/img/about.svg'
import ImgExperience from '../../assets/img/experience.svg'


const About = () => {
    return (
        <div id='about'>

            <div className="title-about" id='title-about'>
                <h1><b>- quem eu sou -</b></h1>
            </div>
            <div className="about-me">

                <div className="about-description">
                    <h1>🌎 Olá Mundo!</h1>
                    <p>
                        Meu nome é <span>Lucas</span>, e eu sou um desenvolvedor front-end
                        com um olhar fresco e mente aberta, sempre pronto para novos desafios.
                        Nasci e cresci no interior de São Paulo, onde comecei minha carreira
                        como Operador de Empilhadeira. No entanto, sempre tive o desejo de
                        explorar o mundo além do meu pequeno mundo. Então, em 2019, decidi
                        sair da minha zona de conforto e experimentar coisas novas.
                    </p>
                    <p>
                        Desde então, trabalhei na área de produção de uma grande empresa,
                        onde aprimorei minhas habilidades até estar pronto para seguir
                        meu sonho de trabalhar na área de tecnologia.
                        Atualmente, atuo como almoxarife e estou estudando arduamente para
                        dominar as tecnologias mais recentes e avançadas da área de desenvolvimento.
                    </p>
                </div>
                <div className="img-about">
                    <img src={ImgAbout} alt="imagem representa foco e objetivo" />
                </div>
            </div>
            <section className='courses'>
                <div className="info-courses">
                    <h1>👨🏻‍🎓 Meus cursos</h1>
                    <p>
                        Eu estou sempre procurando maneiras de aprimorar minhas
                        habilidades e conhecimentos. Nesse sentido,
                        tenho concluído vários cursos online nos últimos meses
                        para me aprofundar em tecnologias front-end,
                        incluindo o framework React.
                        A seguir, você pode conferir alguns dos cursos
                        que concluí recentemente:
                    </p>
                    <ul>
                        <li className='concluded '>EdX - CSS Basics</li>
                        <li className='concluded '>EdX - HTML5 and CSS Fundamentals</li>
                        <li className='concluded '>Curso em Video - Algoritimo</li>
                        <li className='course-progress'>Edx - JavaScript Introduction</li>
                    </ul>
                </div>
            </section>
            <section id='experience'>
                <div className="experience">
                    <h2>✅ Minha experiência</h2>
                    <p>
                        Além de minhas habilidades técnicas em desenvolvimento front-end,
                        também estou trabalhando como estagiário na área de front-end, aplicando novas tecnologias
                        na construção de aplicativos web e móveis.
                        Estou sempre em busca de novas oportunidades para
                        aprender e crescer como desenvolvedor front-end e
                        aplicar minhas habilidades de forma criativa e inovadora.
                        Minha experiência anterior em áreas como controle de estoque,
                        armazenamento e documentação de colaboradores me
                        ensinou a trabalhar de forma eficiente em equipe e
                        a lidar com desafios de forma colaborativa.
                    </p>
                </div>
                <div className="img-about">
                    <img src={ImgExperience} alt="imagem representa um CV" />
                </div>
            </section>
        </div >
    );
}

export default About;
