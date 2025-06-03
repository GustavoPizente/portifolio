import React, { useState } from "react";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import Modal from "react-modal";

import { EffectCoverflow, Pagination } from "swiper/modules";

Modal.setAppElement("#root");

register();

function Main() {
  const data = [
     {
      id: "1",
      image: "caminhos.jpeg",
      link: "https://caminhos-da-fala.vercel.app/",
      text: "(Ver Versão Mobile) Trabalho profissional de desenvolvimento de identidade visual e site institucional para uma fonoaudióloga."
      
    },
    {
      id: "2",
      image: "camboimMain.png",
      link: "https://camboim-biojoias-git-master-gustavopizentes-projects.vercel.app/",
      text: "(Ver Versão Mobile) Primeira experiência como Front-end. Foi um período de muito estudo e dedicação para colocar em prática os conhecimentos de design. Devido às limitações da plataforma Wix, todo o projeto foi desenvolvido em um único bloco de HTML, CSS e JavaScript. Além disso, utilizei o Figma para a prototipagem."
      
    },
    {
      id: "3",
      image: "Buscar.jpeg",
    link: "https://viver-perto.vercel.app/",
    text: "(Projeto de 1 dia para teste) Todos querem viver perto daquilo que te faz bem e essa aplicação te mostra a praia mais perto da cidade informada. O usuário  digita o nome da cidade aonde vive e o mapa vai até lá. Em seguida ele voa até a cidade mais próxima e exibe uma segunda tela que mostra um texto encantador sobre a cidade e faz uma chamada para o mercado imobiliário "
     
    },
    {
      id: "4",
      image: "portifolio.jpeg",
      link: "https://portfolio-gustavonazarine.vercel.app/",
      text: "Este é o portfólio que você está visitando :) É meu último trabalho. Aqui, tive mais liberdade para criar, mas sempre com o foco nos objetivos de um portfólio: clareza e objetividade. O trabalho busca a simplicidade para que o usuário seja conduzido pelo contraste até o objeto principal, sem deixar de observar detalhes importantes do front-end, como a animação de background e a navegabilidade com o slider feito com a biblioteca Swiper."
    },
    {
    id: "5",
    image: "PindoramaMain.jpeg", 
      link: "https://arvores-de-pindorama.vercel.app/",
      text: "(Apenas Mobile No Momento. Falta o deploy do back-end que já está no GitHub) Este projeto fez parte dos meus estudos sobre consumo de API e programação de back-end. Utilizei Axios para fazer as requisições para o back-end desenvolvido em Nest.js, que, por sua vez, utilizou TypeORM para se comunicar com o banco de dados MySQL. O deploy foi realizado na Vercel. Agora Refatoranto tudo."
    
  },
    {
      id: "6",
      image: "figma.jpeg",
      link: "https://www.figma.com/proto/P72HIvGcReBPwAnpn6cl5J/Untitled?page-id=217%3A81&node-id=217-205&viewport=146%2C380%2C0.9&t=VLDV391r7R6q4Nvi-1&scaling=min-zoom&content-scaling=fixed",
      text: "Aqui, a ideia é deixar protótipos e desenhos feitos no Figma."
    },
  ];
  
  /*SET STATE DO MODAL*/
  const [modalisOpen, setModalIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openModal = (item) => {
    setActiveItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveItem(null);
  };

  /*SET STATE DO MODAL*/


  return (
    <body className="body">
      <div className="sobre">
        <div className="fundo">
          <img className="fundoquadro" src="fundo.png"></img>
        </div>

        <div className="caixafotoperfil"></div>

        <div className="textoperfil">
          <h2>let GustavoPizenteNazarine =</h2>
          <h1>
            'Desenvolvedor Front-end e Estudante de Design Gráfico
            Reactjs/CSS/HTML5/JavaScript/<p>Figma/Nestjs/MySQL/';</p>
          </h1>
         
        </div>
      </div>

      <div className="projetos">
        <h2 className="tituloprojetos">PROJETOS</h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverFlowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slidesShadows: true,
          }}
          pagination={true}
          scrollbar={{ draggable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <button onClick={()=>openModal(item)}>
                <img src={item.image} alt={`Imagem${item.id}`} className="slide-item" />
              </button>
              <Modal isOpen={modalisOpen} onRequestClose={closeModal} overlayClassName="modal-overlay"
        className="modal-content">
                

             {activeItem && (
          <div className="modal">
            <p>{activeItem.text} <p>Acesse </p> <a href={activeItem.link}>CLICANDO AQUI</a></p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        )}
              </Modal>
             

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <a href="\GustavoPizenteNazarine25.pdf" download>
      <button>Baixar Currículo</button>
      </a>
    </body>
  );
}

export default Main;
