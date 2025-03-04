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
                      href="https://camboim-biojoias-git-master-gustavopizentes-projects.vercel.app/"
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
                      href="https://www.figma.com/proto/P72HIvGcReBPwAnpn6cl5J/Untitled?page-id=217%3A81&node-id=217-205&viewport=146%2C380%2C0.9&t=VLDV391r7R6q4Nvi-1&scaling=min-zoom&content-scaling=fixed"
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
