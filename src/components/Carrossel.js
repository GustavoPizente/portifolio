 {/* <div className="slider" style={{ "--quantity": 6 }}>
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
        </div> */}

        css 
        .projetos {

            width: 100%;
            height: 50vh;
            text-align: center;
            overflow: hidden;
            display: flex;
            position: relative;
            flex-direction: column;
            align-items: center;
           
          }
          
          .projetos .slider {
          
            position: absolute;
            width: 180px;
            height: 235px;
            top: 30%;
            left: calc(50% - 100px); 
            transform-style: preserve-3d;
            transform: perspective(1000px);
            animation: autoRun 40s linear infinite;
          
          }
          
          .slider:hover{
          
          
            animation-play-state: paused!important;
           
          }
          
          .slider:hover .projeto{
          
          
           filter: grayscale(1);
           
          }
          
          .slider .projeto:hover {
          
            filter: grayscale(0);
            scale: 1.1;
          }
          
          
          
          
          @keyframes autoRun {
          
            from {
              transform: perspective(1000px) rotateX rotateY(0deg);
                }
                to {
          
                  transform: perspective(1000px) rotateY(360deg);
                }
          }
          
          .projetos .slider .projeto {
            position: absolute;
            inset: 0 0 0 0;
            transition: filter 0.5s, scale 0.5s;
          
            transform: rotateY(calc((var(--position) - 1) * (360deg / var(--quantity)))) translateZ(220px);
          }
          
          
          
          
          .projetos .slider .projeto img {
          
            width: 100%;
            height: 100%;
            object-fit: cover ;
          }
          