import React, { useState, useEffect } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    
    
    console.log ('MudouValordesLIDEINDEX:slideIndex', slideIndex )
    
    showDivs(slideIndex);
  }, [slideIndex]);

  const showDivs = (n) => {

    console.log('showdivs n ' , n)
    const slides = document.getElementsByClassName("mySlides");
    console.log('showdivs length' , slides.length)
   

    let qual = slides.length
    console.log(qual)

    
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }

  };

  return (
    <div className="conjuntoslider">
     
      
      <button className="botaoesquerdo" onClick={() =>  setSlideIndex(slideIndex-1)}><svg width="44" height="74" viewBox="0 0 44 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41 71.5L5 38L41 3" stroke="black" stroke-width="6"/>
</svg>
</button>
      
       <img
            src="/imgs/CamboimPrint2.png" 
            class="mySlides"
            id="slide3"
          />

          <img
            src="/imgs/CamboimMobile.png" 
            
            id="slide3hover"
          />
          <img
            src="https://i.ibb.co/QrjvLJT/banneralargadoresmaior-1.png"
            class="mySlides"
            id="slide2"
          />
          <img
            
            src="https://i.ibb.co/zGsHyss/brincosbanner2maior-c-pia-1.png"
            class="mySlides"
            id="slide1"
          />
          <img 
            src="https://i.ibb.co/d0HNRrx/raposamyslides.png" 
            class="mySlides"
            id="slide4"
          />

           <img 
            src="#" 
            class="mySlides"
            id="slide5"
          />

         <button className="botaodireito" onClick={() =>  setSlideIndex(slideIndex+1)}><svg width="44" height="74" viewBox="0 0 44 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L39 36.5L3 71.5" stroke="black" stroke-width="6"/>
</svg></button>
    </div>
  );
};

export default Slider;