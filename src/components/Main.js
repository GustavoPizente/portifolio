import React from "react";

function Main() {
  let rotation = 0;

 {/*} function setSlideIndex() {
    const slider = document.querySelector(".slider");
    rotation += 30;
    slider.style.transform = `rotateY(${rotation}deg) perspective(1000px)`; 
  }*/}

  return (
    <body className="body">
      <div className="sobre">

        <div className="caixafotoperfil">


        </div>

        <div className="textoperfil">
          <h2>let GustavoPizenteNazarine =</h2>
          <h1>
            'Apaixonado por criar experiências marcantes e ajudar empresas a se
            conectarem com seu público através da sua marca digital. Estudante
            de Design Gráfico e Desenvolvedor Front-
            end Reactjs/CSS/HTML5/JavaScript/Figma/
            Nestjs/MySQL/' ;
          </h1>
        </div>
      </div>

      <div className="projetos">
        <h2 className="tituloprojetos">PROJETOS</h2>

        <div className="slider" style={{ "--quantity": 6 }}>
          <div className="projeto" style={{ "--position": 1 }}>
            <a href="https://www.camboimbiojoias.com/">
              {" "}
              <img src="/camboimMain.png" alt="imagemprojeto"></img>
            </a>{" "}
          </div>
          <div className="projeto" style={{ "--position": 2 }}>
            {" "}
            <a href="https://arvores-de-pindorama.vercel.app/">
              <img src="/PindoramaMain.jpeg" alt="imagemprojeto"></img>
            </a>{" "}
          </div>
          <div className="projeto" style={{ "--position": 3 }}>
            {" "}
            <img src="/camboimMain.png" alt="imagemprojeto"></img>{" "}
          </div>
          <div className="projeto" style={{ "--position": 4 }}>
            {" "}
            <img src="/camboimMain.png" alt="imagemprojeto"></img>{" "}
          </div>
          <div className="projeto" style={{ "--position": 5 }}>
            {" "}
            <img src="/camboimMain.png" alt="imagemprojeto"></img>{" "}
          </div>
          <div className="projeto" style={{ "--position": 6 }}>
            {" "}
            <img src="/camboimMain.png" alt="imagemprojeto"></img>{" "}
          </div>
        </div>
      </div>
    </body>
  );
}

export default Main;
