import React from "react";

function Header() {
  return (
    <header>
      <menu>
        <nav className="nav">
          <a  href="https://www.linkedin.com/in/gustavo-pizente-nazarine-69b6812b7/"
                      target="_blank">SOBRE</a>
          
            <div className="menudropdonw">
              PROJETOS 
              <ul className="opcoes">
               
                  <li>
                    <a
                      href="https://www.camboimbiojoias.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="itemopcoes"
                    >
                      CAMBOIMBIOJOIAS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://arvores-de-pindorama.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="itemopcoes"
                    >
                      ÁRVORES DE PINDORAMA
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://portifolio-seven-steel.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="itemopcoes"
                    >
                      PORTIFÓLIO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.figma.com/proto/rGb4fwf15QZub6A3EewlH2/Untitled?page-id=0%3A1&node-id=201-40&viewport=296%2C-51%2C0.37&t=Jo9fsRVHJQrv06Zd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=201%3A40"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="itemopcoes"
                    >
                      PROTÓTIPOS FIGMA
                    </a>
                  </li>
                </ul>
              </div>
           
          
          <a href="https://api.whatsapp.com/send?phone=5514997627237"
                      target="_blank">CONTATO</a>
        </nav>
      </menu>
    </header>
  );
}

export default Header;
