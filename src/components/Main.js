import React, { useState, useRef, useEffect } from "react";
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
    projectimage: "caminhosid.png",
    link: "https://caminhos-da-fala.vercel.app/",
    text: `
Resumo: Desenvolvimento de identidade visual e site institucional para uma fonoaudióloga.<br /><br />
Objetivos: Divulgar seu trabalho e criar um espaço de comunicação entre a profissional e o seu público, com o fim de consolidar sua presença e autoridade.<br /><br />
Design (UI/UX):<br />
- Wireframe e protótipo no Figma<br />
- Identidade Visual buscando realçar o ambiente terapêutico dinâmico e confortável através das cores e dos movimentos da página. Ao mesmo tempo, através das retas, o branco e o modelo 3D, consegue também realçar aspectos do estudo clínico e das Ciências. A logo é exclusiva e representa os diversos campos trabalhados na terapia, assim como a centralização e segurança criada pelo ambiente terapêutico. <br />
- Layout responsivo mobile-first<br /><br />
Desenvolvimento:<br />
- Next.js com TypeScript, Three.js, Blender <br />
- Animações com Framer Motion<br />
- Principais Componentes: Menu Fixo Drop Down, Mapa com localização, Seção sobre o atendimento, Seção com 3D interativo, Sobre a profissional, Contato<br /><br />
Deploy:<br />
- Hospedado no Vercel<br />
- SEO básico e carregamento otimizado<br /><br />
Código:<br />
- Repositório no GitHub https://github.com/GustavoPizente/caminhos-da-fala
`.trim(),
  },
  {
    id: "2",
    image: "camboimMain.jpeg",
    projectimage: "Logo.png",
    link: "https://camboim-biojoias-git-master-gustavopizentes-projects.vercel.app/",
    text: `
Resumo: Desenvolvimento de site para E-commerce de acessórios sustentáveis.<br /><br />
Objetivos: Criar um canal de vendas com vasto catálogo e fácil atividade de compra.<br /><br />
(Hoje o modelo consta apenas para exibição da página principal no portfólio, pois a marca não está mais em funcionamento.)<br /><br />
Design (UI/UX):<br />
- Wireframe e protótipo no Figma<br />
- Identidade Visual buscando mostrar a essência da marca com as cores remetendo à natureza, além das informações visuais com o mesmo tema. Existe um amplo material gráfico para essa marca que inclui a logo com colagem e ilustração, trazendo simplicidade e realçando o símbolo que já vinha sendo usado como uma marca. <br />
- Layout responsivo mobile-first<br /><br />
Desenvolvimento:<br />
- HTML, CSS e JavaScript<br />
- Integrado à plataforma Wix<br />
- Principais Componentes: Menu Fixo Drop Down, Slider com Categorias, Seção sobre como funciona, Seção com quem usa, Sobre a empresa e Contato<br /><br />
Deploy:<br />
- Hospedado no Vercel<br />
Código:<br />
- Repositório no GitHub https://github.com/GustavoPizente/camboim-biojoias
`.trim(),
  },
  {
    id: "3",
    image: "Buscar.jpeg",
    projectimage: "ondas.png",
    link: "https://viver-perto.vercel.app/",
    text: `
Resumo: Projeto feito em um dia para teste para uma Imobiliária.<br /><br />
Objetivos: Criar uma página de entretenimento com o fim de conhecer e se conectar com novos clientes. O usuário digita o nome da cidade onde vive e o mapa vai até lá. Em seguida, ele voa até a cidade mais próxima e exibe uma segunda tela que mostra um texto encantador sobre a cidade e faz uma chamada para o mercado imobiliário. <br /><br />
Design (UI/UX):<br />
- Wireframe e protótipo no Figma<br />
- Identidade Visual construída de forma simples, com o tempo que teria, porém trazendo os elementos da praia: sol, areia e mar. <br />
- Layout responsivo mobile-first<br /><br />
Desenvolvimento:<br />
- React com TypeScript, OpenStreetMap, Leaflet e API do GPT <br />
- Principais Componentes: Campo de pesquisa, Mapa com localidade e Modal com Opções imobiliárias para cidade buscada<br /><br />
Deploy:<br />
- Hospedado no Vercel<br />
Código:<br />
- Repositório no GitHub https://github.com/GustavoPizente/viver-perto
`.trim(),
  },
  {
    id: "4",
    image: "Podas&Jardinagem.jpeg",
    projectimage: "podas.gif",
    link: "https://podas-jardinagem.vercel.app/",
    text: `
Resumo: Desenvolvimento de identidade visual e site para Jardineiro.<br /><br />
Objetivos: Criar um cartão digital simples para deixar como contato no Google Maps. <br /><br />
Design (UI/UX):<br />
- Wireframe e protótipo no Figma<br />
- A Identidade Visual traz o verde e as ilustrações que deixam claro o serviço oferecido. As retas e a simplicidade se conectam com o público-alvo através de um tema clean e elegante. <br />
- Layout responsivo mobile-first<br /><br />
Desenvolvimento:<br />
- Next.js com TypeScript <br />
- Principais Componentes: Cartão central com contato direto ao Whatsapp, Slider com imagens de trabalhos feitos. <br /><br />
Deploy:<br />
- Hospedado no Vercel<br />
Código:<br />
- Repositório no GitHub https://github.com/GustavoPizente/podas-jardinagem
`.trim(),
  },
  {
    id: "5",
    image: "portifolio.jpeg",
    projectimage: "portifolio.png",
    link: "https://portfolio-gustavonazarine.vercel.app/",
    text: `
Este é o portfólio que você está visitando :) É meu último trabalho. Aqui, tive mais liberdade para criar, mas sempre com o foco nos objetivos de um portfólio: clareza e objetividade. O trabalho busca a simplicidade para que o usuário seja conduzido até o objeto principal (que são os projetos), sem deixar de observar detalhes importantes do front-end, como a Identidade visual, a navegabilidade com o slider feito com a biblioteca Swiper e a tela interativa com Three.js e o Blender<br /><br />

Na versão Desktop, você pode arrastar o Slider para retirá-lo da frente da animação e liberar espaço para a interação. As setas comandam o cesto. Na versão mobile, dê um duplo clique em PROJETOS para minimizá-lo ou voltar.
Código:<br />
- Repositório no GitHub https://github.com/GustavoPizente/portifolio
`.trim(),
  },
  {
    id: "6",
    image: "PindoramaMain.jpeg",
    projectimage: "pindorama.png",
    link: "https://arvores-de-pindorama.vercel.app/",
    text: `
Resumo: Hub de contato entre Marceneiros.<br /><br />
Objetivos: Criar um local para troca de conhecimento e projetos entre marceneiros, com local para estudo, jogos e interações como rede social. <br /><br />
Esse projeto foi feito para testar muitos conceitos, especialmente a criação e consumo de uma API que criei com Nest.js para fazer pesquisa e cadastro de madeiras. Hoje carece de mais horas de trabalho e refatoramento.
Design (UI/UX):<br />
- Wireframe e protótipo no Figma<br />
- Identidade visual realçando temas da natureza e madeira. <br />
- Layout responsivo mobile-first<br /><br />
Desenvolvimento:<br />
- React.js, Swiper, Nest.js <br />
- Principais Componentes: Slider central com Login, área de jogos e área de pesquisa. <br /><br />
Deploy:<br />
- Hospedado no Vercel<br />
Código:<br />
- Repositório no GitHub https://github.com/GustavoPizente/arvores-de-pindorama
`.trim(),
  },
  {
    id: "7",
    image: "figma.jpeg",
    projectimage: "figma.png",
    link: "https://www.figma.com/proto/P72HIvGcReBPwAnpn6cl5J/Untitled?page-id=217%3A81&node-id=217-205&viewport=146%2C380%2C0.9&t=VLDV391r7R6q4Nvi-1&scaling=min-zoom&content-scaling=fixed",
    text: "Aqui, a ideia é deixar protótipos e desenhos feitos no Figma.",
  },
];

  const [modalisOpen, setModalIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (item) => {
    setActiveItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveItem(null);
  };

  const projectsDivRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [startMouseX, setStartMouseX] = useState(0);
  const [startMouseY, setStartMouseY] = useState(0);
  const [startTranslateX, setStartTranslateX] = useState(0);
  const [startTranslateY, setStartTranslateY] = useState(0);

  const handleMouseDown = (e) => {
    if (isMobile) return;
    if (!projectsDivRef.current) return;

    setIsDragging(true);
    setStartMouseX(e.clientX);
    setStartMouseY(e.clientY);
    setStartTranslateX(translateX);
    setStartTranslateY(translateY);

    projectsDivRef.current.classList.add("no-transition");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setTranslateX(startTranslateX + (e.clientX - startMouseX));
    setTranslateY(startTranslateY + (e.clientY - startMouseY));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (projectsDivRef.current) {
      projectsDivRef.current.classList.remove("no-transition");
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startMouseX, startMouseY, startTranslateX, startTranslateY]);

  const handleDoubleClick = () => {
    if (isMobile) {
      setIsMinimized(!isMinimized);
    }
  };

  return (
    <body className="body">
      <div className="sobre">
        <div className="caixafotoperfil"></div>

        <div className="textoperfil">
          <h2>let GustavoPizenteNazarine =</h2>
          <h1>
            <p>'Desenvolvedor Front-end e Estudante de Design Gráfico</p>
            <p>Reactjs/Nextjs/CSS/HTML5/ <br></br>JavaScript/Figma/Nestjs/SQL/ <br></br>Blender/Three.js';</p>
          </h1>
        </div>
      </div>

      <div
        className="projetos"
        ref={projectsDivRef}
        onMouseDown={!isMobile ? handleMouseDown : undefined}
        onDoubleClick={handleDoubleClick}
        style={{
          cursor: isDragging && !isMobile ? "grabbing" : "grab",
          transform: !isMobile ? `translate(${translateX}px, ${translateY}px)` : "none",
          overflow: "hidden",
          height: isMinimized && isMobile ? "50px" : "auto", // Adjust height as needed
          transition: isMobile ? "height 0.3s ease-out" : "none",
        }}
      >
        <h2 className="tituloprojetos">PROJETOS</h2>

        {(!isMinimized || !isMobile) && (
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
                <button onClick={() => openModal(item)} onMouseDown={(e) => e.stopPropagation()}>
                  <img
                    src={item.image}
                    alt={`Imagem${item.id}`}
                    className="slide-item"
                  />
                </button>
                <Modal
                  isOpen={modalisOpen}
                  onRequestClose={closeModal}
                  overlayClassName="modal-overlay"
                  className="modal-content"
                >
                  {activeItem && (
                    <div className="modal">
                      <div className="modal-scroll">
                        <img
                          src={activeItem.projectimage}
                          alt="Imagem do projeto"
                          className="modal-image"
                        />
                        <div
                          className="modal-text"
                          dangerouslySetInnerHTML={{ __html: activeItem.text }}
                        />
                        <p>
                          Acesse <a href={activeItem.link}>CLICANDO AQUI</a>
                        </p>
                      </div>
                      <button onClick={closeModal}>Fechar</button>
                    </div>
                  )}
                </Modal>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <a href="\GustavoPizenteNazarine25.pdf" download>
        <button>Baixar Currículo</button>
      </a>
    </body>
  );
}

export default Main;