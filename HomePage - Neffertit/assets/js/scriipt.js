window.onload = function (){
    document.querySelector (".menuMobile").addEventListener ("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none'; 
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
};

function subirTela() {
       window.scrollTo({
           top: 0,
           behavior: "smooth"
       });
   }

   function decidirBotaoScroll() {
       if(window.scrollY === 0) {
           // ocultar o botão
           document.querySelector('.button').style.display = 'none';
       } else {
           // mostrar botão
           document.querySelector('.button').style.display = 'block';
       }
   }

   // setInterval(decidirBotaoScroll, 1000); irá executar a funcão de 1 e 1 segundo.Obs: Não a necessidade de ficar executando
   
  