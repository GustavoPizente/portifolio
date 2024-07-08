import React from "react";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow"

import { EffectCoverflow,Pagination } from "swiper/modules";


register();

function Main() {
  const data = [
    { id: "1", image: "camboimMain.png", link: "https://www.camboimbiojoias.com/" },
    { id: "2", image: "PindoramaMain.jpeg", link: "https://arvores-de-pindorama.vercel.app/" },
    { id: "3", image: "portifolio.jpeg", link: "https://portifolio-seven-steel.vercel.app/" },
    { id: "4", image: "figma.jpeg", link: "https://www.figma.com/proto/rGb4fwf15QZub6A3EewlH2/Untitled?page-id=0%3A1&node-id=201-40&viewport=296%2C-51%2C0.37&t=Jo9fsRVHJQrv06Zd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=201%3A40" },
  ];

  {
    /*} function setSlideIndex() {
    const slider = document.querySelector(".slider");
    rotation += 30;
    slider.style.transform = `rotateY(${rotation}deg) perspective(1000px)`; 
  }*/
  }

  return (
    <body className="body">
      <div className="sobre">
        <div className="caixafotoperfil"></div>

        <div className="textoperfil">
          <h2>let GustavoPizenteNazarine =</h2>
          <h1>
            'Estudante de Design Gráfico e Desenvolvedor Front-end
            Reactjs/CSS/HTML5/JavaScript/Figma/ Nestjs/MySQL/' ;
          </h1>
        </div>
      </div>

      <div className="projetos">
        <h2 className="tituloprojetos">PROJETOS</h2>

       

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverFlowEffect={{
            rotate:50,
            stretch:0,
            depth:100,
            modifier:1,
            slidesShadows:true,

          }}
          navigation={true}
          scrollbar={{ draggable: true }}
          modules={[EffectCoverflow]}
          className="swiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
                 <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt="slider" className="slide-item" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </body>
  );
}

export default Main;
