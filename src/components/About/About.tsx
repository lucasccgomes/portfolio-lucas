import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h1>Sobre mim</h1>
            <p>-quem eu sou-</p>
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
                Desde então, trabalhei na área de produção de uma grande empresa e
                aprimorei minhas habilidades até estar pronto para seguir meu meu sonho
                de trabalhar na area de tecnologia.
                Atualmente, estou estudando arduamente para dominar as tecnologias mais
                recentes e avançadas do setor.
            </p>

            <section>
                <h2>👩‍💻 Meus projetos</h2>
                <p>
                    Você pode conferir alguns dos meus projetos no meu <a target='_blank' href="https://github.com/lucasccgomes">GitHub</a>.
                    Meus projetos incluem aplicativos web e móveis desenvolvidos com HTML5,
                    CSS, JavaScript, React e outros frameworks populares.
                </p>
            </section>
            <section>
                <h2>👨🏻‍🎓 Meus cursos</h2>
                <p>
                    Ao longo dos anos, concluí vários cursos online para aprimorar minhas habilidades.
                    Atualmente, estou me concentrando em tecnologias front-end, incluindo React e Angular.
                    Aqui estão alguns dos cursos que concluí recentemente:
                </p>
                <ul>
                    <li>EdX - CSS Basics</li>
                    <li>EdX - HTML5 and CSS Fundamentals</li>
                </ul>
            </section>
            <section>
                <h2>✅ Minha experiência</h2>
                <p>
                Além de minhas habilidades técnicas em desenvolvimento front-end, 
                também estou estagiando na área de front-end, onde tenho aprendido 
                e aplicado novas tecnologias para a construção de aplicativos web e móveis. 
                Além disso, tenho experiência em outras áreas, incluindo controle de estoque, 
                armazenamento, controle de NFs e documentação de colaboradores. 
                Minha experiência anterior como Operador de Empilhadeira me ensinou a 
                trabalhar de forma eficiente em equipe e a lidar com prazos apertados. 
                Estou sempre em busca de novas oportunidades para crescer minha carreira como desenvolvedor 
                front-end e aplicar minhas habilidades de forma criativa e inovadora.
                </p>
            </section>
            <section>
                <h2>Estilo de vida</h2>
                <ul>
                    <li>Amo estar com minha Família.</li>
                    <li>Adoro carro.</li>
                    <li>Amante de café.</li>
                    <li>Adoro ficar inventando coisas.</li>
                </ul>
            </section>

        </div >
    );
}

export default About;
