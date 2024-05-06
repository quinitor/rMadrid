


const playSoundA = function() {
    var sonido = new Audio("musica/Cancion.mp3");
    sonido.play();
    document.removeEventListener('lista1', playSoundA);
  }
  document.addEventListener('lista1', playSoundA);
  

const playSoundB = function() {
    var himno = new Audio("musica/himno.mp3");
    himno.play();
    document.removeEventListener('lista2', playSoundB);
  }
  document.addEventListener('lista2', playSoundB);




function audioStop(){

    let audio = new Audio("musica/Cancion.mp3");
    audio.pause(); 
}




function reproducirAudio(){
  fuenteDeReproduccion = audioCtx.createBufferSource();
  fuenteDeReproduccion.buffer = audioBuffer;
  fuenteDeReproduccion.playbackRate.value = .8;
  fuenteDeReproduccion.connect(audioCtx.destination);
  fuenteDeReproduccion.start(audioCtx.currentTime);
  }





function audio(){

  if (stop) {// si el audio está parado
    stop = false;
    sonido1.innerHTML = "||"
    reproducirAudio();
  }else{// de lo contrario
    stop = true;
    sonido1.innerHTML = "▷"
    detenerAudio();
  }

}


function musicB(){

var audio2 = document.getElementById('sonido2');
audio2.pause();
audio2.currentTime = 0;


}


  function oirHimno(){

    setTimeout( musicF, 0);
  
  }



  function musicF(){

    var audio1 = document.getElementById('sonido2');
    
    audio1.play();

  }


/* La foto de fonde de la letra del himno se hace opaco*/

  function visual(){

    /*document.getElementById("fondito").style.opacity = "0.1";*/
    document.getElementById("fondito1").style.opacity = "0.1";
 


  }

  /* Se visualiza la primera parte de la letra del himno */

function view(){

  
  document.getElementById("letra1").style.display = "block";
 
}

/* Cuando pasa un minuto y veinte segundos se ejecuta la funcion nomuestraB() */

function verparrafoA(){

  setTimeout( nomuestraB, 80000);


}

/* Se oculta la primera parte de la letra del himno der real madrid y se visualiza la foto de fondo
y se visualiza la segunda parte de la letra. */

function nomuestraB(){

  document.getElementById("letra1").style.display = "none"; 
  document.getElementById("letra2").style.display = "block";

}

/* Cuando pasan dos minutos y cuarenta y cuatro segundos se ejecuta la función verparrafoB() */

function verparrafoB(){

  setTimeout( nomuestraC, 164000);

}

/* Se oculta la segunda parte de la letra del himno y se muestra la imagen del fondo de la letra. */

function nomuestraC(){

  document.getElementById("letra2").style.display = "none";
  document.getElementById("fondito1").style.opacity = "0.9";
  /*document.getElementById("fondito").style.opacity = "0.9";*/

}

 /* Se visualiza la primera parte de la letra suvenir y se hace opaco el fondo */

function verLetra3A() {

  document.getElementById("fondito").style.opacity = "0.1";
  document.getElementById("letra3A").style.display = "block";

}

/* Cuando pasa un tiempo determinado se ejecuta la funcion letra3A() */
function verdos(){

  setTimeout( letra3A, 28800);

}

/* Se oculta la primera pare de la letra y se visualiza la segunda parte */

function letra3A(){

  document.getElementById("letra3A").style.display = "none";
  document.getElementById("letra3B").style.display = "block";

}

/* Cuando pasa un tiempo determinado se ejeuta la funcion letra3B() */

function verTres(){

  setTimeout( letra3B, 90000);

}

/* Se oculta la segunda parte de letra de la cancion suvenir 
y se visualiza la foto de fondo */

function letra3B(){

  
  document.getElementById("letra3B").style.display = "none";
  document.getElementById("fondito").style.opacity = "0.9";

}






/* Visualizacion del palmares -------------------------------------------------------- */


function copitas(){

  document.getElementById("letra1").style.display = "block";
 
  setTimeout( musicF, 0);         /*Se reproduce la música*/
  setTimeout( palmaresA, 9000);
  setTimeout( palmaresB, 29000);
  setTimeout( palmaresC, 39000);
  setTimeout( palmaresD, 48000);
  setTimeout( palmaresE, 58000);
  setTimeout( palmaresF, 69000);
  setTimeout( palmaresG, 98000);

  setTimeout( nomuestraB, 80000); /*Se muestra la segunda parte de la letra*/

  setTimeout( palmaresH, 108000);
  setTimeout( palmaresI, 118000);
  setTimeout( palmaresJ, 128000);
  setTimeout( palmaresK, 138000);
  setTimeout( palmaresL, 147000);
  setTimeout( trofeoA, 158000);
  setTimeout( trofeoB, 165000);

  setTimeout( nomuestraC, 164000); /*Se oculta la segunda parte de la letra*/

}

/* Hacemos transparente */



function copaA(){

  setTimeout( palmaresA, 9000);

}

function palmaresA(){


  document.getElementById("orejona").style.opacity = "0.5";
  document.getElementById("nOrejona").style.opacity = "0.5";


}


function copaB(){

  setTimeout( palmaresB, 29000);

}


function palmaresB(){

  document.getElementById("liga").style.opacity = "0.5";
  document.getElementById("nLiga").style.opacity = "0.5";

}


function copaC(){

  setTimeout( palmaresC, 39000);

}


function palmaresC(){

  document.getElementById("cRey").style.opacity = "0.5";
  document.getElementById("nCrey").style.opacity = "0.5";

}


function copaD(){

  setTimeout( palmaresD, 48000);

}


function palmaresD(){

  document.getElementById("sEspaña").style.opacity = "0.5";
  document.getElementById("nScRey").style.opacity = "0.5";

}


function copaE(){

  setTimeout( palmaresE, 58000);

}


function palmaresE(){

  document.getElementById("sEu").style.opacity = "0.5";
  document.getElementById("nSeu").style.opacity = "0.5";

}


function copaF(){

  setTimeout( palmaresF, 69000);

}


function palmaresF(){

  document.getElementById("mClub").style.opacity = "0.5";
  document.getElementById("nMclub").style.opacity = "0.5";

}


function copaG(){

  setTimeout( palmaresG, 98000);

}

function palmaresG(){

  document.getElementById("orejona").style.opacity = "0.9";
  document.getElementById("nOrejona").style.opacity = "0.9";

}



function copaH(){

  setTimeout( palmaresH, 108000);

}


function palmaresH(){

  document.getElementById("liga").style.opacity = "0.9";
  document.getElementById("nLiga").style.opacity = "0.9";

}



function copaI(){

  setTimeout( palmaresI, 118000);

}


function palmaresI(){

  document.getElementById("cRey").style.opacity = "0.9";
  document.getElementById("nCrey").style.opacity = "0.9";

}

function copaJ(){

  setTimeout( palmaresJ, 128000);

}

function palmaresJ(){

  document.getElementById("sEspaña").style.opacity = "0.9";
  document.getElementById("nScRey").style.opacity = "0.9";

}


function copaK(){

  setTimeout( palmaresK, 138000);

}

function palmaresK(){

  document.getElementById("sEu").style.opacity = "0.9";
  document.getElementById("nSeu").style.opacity = "0.9";

}


function copaL(){
  
  setTimeout( palmaresL, 147000);

}

function palmaresL(){

  document.getElementById("mClub").style.opacity = "0.9";
  document.getElementById("nMclub").style.opacity = "0.9";


}


function ocultarCopitas(){

  document.getElementById("orejona").style.opacity = "0";
  document.getElementById("nOrejona").style.opacity = "0";
  document.getElementById("liga").style.opacity = "0";
  document.getElementById("nLiga").style.opacity = "0";
  document.getElementById("cRey").style.opacity = "0";
  document.getElementById("nCrey").style.opacity = "0";
  document.getElementById("sEspaña").style.opacity = "0";
  document.getElementById("nScRey").style.opacity = "0";
  document.getElementById("sEu").style.opacity = "0";
  document.getElementById("nSeu").style.opacity = "0";
  document.getElementById("mClub").style.opacity = "0";
  document.getElementById("nMclub").style.opacity = "0";

}


/* Quitamos las copas */


function trofeosA(){

  setTimeout( trofeoA, 158000);

}





function trofeoA(){

  
    document.getElementById("orejona").style.opacity = "0.5";
    document.getElementById("nOrejona").style.opacity = "0.5";
    document.getElementById("liga").style.opacity = "0.5";
    document.getElementById("nLiga").style.opacity = "0.5";
    document.getElementById("cRey").style.opacity = "0.5";
    document.getElementById("nCrey").style.opacity = "0.5";
    document.getElementById("sEspaña").style.opacity = "0.5";
    document.getElementById("nScRey").style.opacity = "0.5";
    document.getElementById("sEu").style.opacity = "0.5";
    document.getElementById("nSeu").style.opacity = "0.5";
    document.getElementById("mClub").style.opacity = "0.5";
    document.getElementById("nMclub").style.opacity = "0.5";
  

}


function trofeosB(){

  setTimeout( trofeoB, 165000);

}


function trofeoB(){

  
  document.getElementById("orejona").style.opacity = "0";
  document.getElementById("nOrejona").style.opacity = "0";
  document.getElementById("liga").style.opacity = "0";
  document.getElementById("nLiga").style.opacity = "0";
  document.getElementById("cRey").style.opacity = "0";
  document.getElementById("nCrey").style.opacity = "0";
  document.getElementById("sEspaña").style.opacity = "0";
  document.getElementById("nScRey").style.opacity = "0";
  document.getElementById("sEu").style.opacity = "0";
  document.getElementById("nSeu").style.opacity = "0";
  document.getElementById("mClub").style.opacity = "0";
  document.getElementById("nMclub").style.opacity = "0";


}







/* CANCIONES DEL REAL MADRID _____________________________________________________________________*/


    /* Reproduccion cancion uno */

function temaA(){

    var tema1 = document.getElementById('tema1');
    tema1.play();

    
  }

function temaB(){

    var audio1 = document.getElementById('tema2');
    var audio2 = document.getElementById('tema3');
    var audio3 = document.getElementById('tema4');
    var audio4 = document.getElementById('tema5');
    var audio5 = document.getElementById('tema6');
    var audio6 = document.getElementById('tema7');
    var audio7 = document.getElementById('tema8');
    var audio8 = document.getElementById('tema9');
    var audio9 = document.getElementById('tema10');
    var audio10 = document.getElementById('tema11');
    
    audio1.pause();
    audio1.currentTime = 0;

    audio2.pause();
    audio2.currentTime = 0;

    audio3.pause();
    audio3.currentTime = 0;

    audio4.pause();
    audio4.currentTime = 0;

    audio5.pause();
    audio5.currentTime = 0;

    audio6.pause();
    audio6.currentTime = 0;

    audio7.pause();
    audio7.currentTime = 0;

    audio8.pause();
    audio8.currentTime = 0;

    audio9.pause();
    audio9.currentTime = 0;

    audio10.pause();
    audio10.currentTime = 0;
    
  }

      /* Reproduccion cancion dos */


      function temazos(){
    
        var audio1 = document.getElementById('tema1');
        var audio2 = document.getElementById('tema2');
        var audio3 = document.getElementById('tema3');
        var audio4 = document.getElementById('tema4');
        var audio5 = document.getElementById('tema5');
        var audio6 = document.getElementById('tema6');
        var audio7 = document.getElementById('tema7');
        var audio8 = document.getElementById('tema8');
        var audio9 = document.getElementById('tema9');
        var audio10 = document.getElementById('tema10');
        var audio11 = document.getElementById('tema11');
        
        audio1.pause();
        audio1.currentTime = 0;
    
        audio2.pause();
        audio2.currentTime = 0;
    
        audio3.pause();
        audio3.currentTime = 0;
    
        audio4.pause();
        audio4.currentTime = 0;
    
        audio5.pause();
        audio5.currentTime = 0;
    
        audio6.pause();
        audio6.currentTime = 0;
    
        audio7.pause();
        audio7.currentTime = 0;
    
        audio8.pause();
        audio8.currentTime = 0;
    
        audio9.pause();
        audio9.currentTime = 0;
    
        audio10.pause();
        audio10.currentTime = 0;

        audio11.pause();
        audio11.currentTime = 0;
        
      }









      function temaC(){

        var tema1 = document.getElementById('tema2');
        tema1.play();
    
        
      }
    
    function temaD(){
    
        var audio1 = document.getElementById('tema1');
        var audio2 = document.getElementById('tema3');
        var audio3 = document.getElementById('tema4');
        var audio4 = document.getElementById('tema5');
        var audio5 = document.getElementById('tema6');
        var audio6 = document.getElementById('tema7');
        var audio7 = document.getElementById('tema8');
        var audio8 = document.getElementById('tema9');
        var audio9 = document.getElementById('tema10');
        var audio10 = document.getElementById('tema11');
        
        audio1.pause();
        audio1.currentTime = 0;
    
        audio2.pause();
        audio2.currentTime = 0;
    
        audio3.pause();
        audio3.currentTime = 0;
    
        audio4.pause();
        audio4.currentTime = 0;
    
        audio5.pause();
        audio5.currentTime = 0;
    
        audio6.pause();
        audio6.currentTime = 0;
    
        audio7.pause();
        audio7.currentTime = 0;
    
        audio8.pause();
        audio8.currentTime = 0;
    
        audio9.pause();
        audio9.currentTime = 0;
    
        audio10.pause();
        audio10.currentTime = 0;
        
      }


/* Reproduccion cancion tres */



function temaE(){

  var tema1 = document.getElementById('tema3');
  tema1.play();

  
}

function temaF(){

  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema4');
  var audio4 = document.getElementById('tema5');
  var audio5 = document.getElementById('tema6');
  var audio6 = document.getElementById('tema7');
  var audio7 = document.getElementById('tema8');
  var audio8 = document.getElementById('tema9');
  var audio9 = document.getElementById('tema10');
  var audio10 = document.getElementById('tema11');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;
  
}


/* Reproduccion cancion cuatro */


function temaG(){

  var tema1 = document.getElementById('tema4');
  tema1.play();

  
}

function temaH(){

  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema3');
  var audio4 = document.getElementById('tema5');
  var audio5 = document.getElementById('tema6');
  var audio6 = document.getElementById('tema7');
  var audio7 = document.getElementById('tema8');
  var audio8 = document.getElementById('tema9');
  var audio9 = document.getElementById('tema10');
  var audio10 = document.getElementById('tema11');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;
  
}


/* Reproduccion cancion cinco */


function temaI(){

  var tema1 = document.getElementById('tema5');
  tema1.play();

  
}

function temaJ(){

  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema3');
  var audio4 = document.getElementById('tema4');
  var audio5 = document.getElementById('tema6');
  var audio6 = document.getElementById('tema7');
  var audio7 = document.getElementById('tema8');
  var audio8 = document.getElementById('tema9');
  var audio9 = document.getElementById('tema10');
  var audio10 = document.getElementById('tema11');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;
  
}


/* Reproduccion cancion seis */


function temaK(){

  var tema1 = document.getElementById('tema6');
  tema1.play();

  
}

function temaL(){

  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema3');
  var audio4 = document.getElementById('tema4');
  var audio5 = document.getElementById('tema5');
  var audio6 = document.getElementById('tema7');
  var audio7 = document.getElementById('tema8');
  var audio8 = document.getElementById('tema9');
  var audio9 = document.getElementById('tema10');
  var audio10 = document.getElementById('tema11');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;
  
}


/* Reproduccion cancion siete */


function temaM(){

  var tema1 = document.getElementById('tema7');
  tema1.play();

  
}

function temaN(){

  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema3');
  var audio4 = document.getElementById('tema4');
  var audio5 = document.getElementById('tema5');
  var audio6 = document.getElementById('tema6');
  var audio7 = document.getElementById('tema8');
  var audio8 = document.getElementById('tema9');
  var audio9 = document.getElementById('tema10');
  var audio10 = document.getElementById('tema11');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;
  
}


/* Reproduccion cancion ocho */


function temaO(){

  var tema1 = document.getElementById('tema8');
  tema1.play();

  
}

function temaP(){

  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema3');
  var audio4 = document.getElementById('tema4');
  var audio5 = document.getElementById('tema5');
  var audio6 = document.getElementById('tema6');
  var audio7 = document.getElementById('tema7');
  var audio8 = document.getElementById('tema9');
  var audio9 = document.getElementById('tema10');
  var audio10 = document.getElementById('tema11');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;
  
}


/* Reproduccion cancion nueve */


function temaQ(){

  var tema1 = document.getElementById('tema9');
  tema1.play();

  
}

function temaR(){

  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema3');
  var audio4 = document.getElementById('tema4');
  var audio5 = document.getElementById('tema5');
  var audio6 = document.getElementById('tema6');
  var audio7 = document.getElementById('tema7');
  var audio8 = document.getElementById('tema8');
  var audio9 = document.getElementById('tema10');
  var audio10 = document.getElementById('tema11');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;
  
}


/* Reproduccion cancion diez */


function temaS(){

  var tema1 = document.getElementById('tema10');
  tema1.play();

  
}

function temaT(){

  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema3');
  var audio4 = document.getElementById('tema4');
  var audio5 = document.getElementById('tema5');
  var audio6 = document.getElementById('tema6');
  var audio7 = document.getElementById('tema7');
  var audio8 = document.getElementById('tema8');
  var audio9 = document.getElementById('tema9');
  var audio10 = document.getElementById('tema11');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;
  
}


/* Reproduccion cancion once */


function temaU(){

  var tema1 = document.getElementById('tema11');
  tema1.play();

  
}

function temaV(){

  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema3');
  var audio4 = document.getElementById('tema4');
  var audio5 = document.getElementById('tema5');
  var audio6 = document.getElementById('tema6');
  var audio7 = document.getElementById('tema7');
  var audio8 = document.getElementById('tema8');
  var audio9 = document.getElementById('tema9');
  var audio10 = document.getElementById('tema10');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;
  
}


/* PAUSA TODOS LOS AUDIOS */



function pauseTemas(){


  var audio1 = document.getElementById('tema1');
  var audio2 = document.getElementById('tema2');
  var audio3 = document.getElementById('tema3');
  var audio4 = document.getElementById('tema4');
  var audio5 = document.getElementById('tema5');
  var audio6 = document.getElementById('tema6');
  var audio7 = document.getElementById('tema7');
  var audio8 = document.getElementById('tema8');
  var audio9 = document.getElementById('tema9');
  var audio10 = document.getElementById('tema10');
  var audio11 = document.getElementById('tema11');

  var audio12 = document.getElementById('sonido1');
  var audio13 = document.getElementById('sonido2');
  
  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;

  audio5.pause();
  audio5.currentTime = 0;

  audio6.pause();
  audio6.currentTime = 0;

  audio7.pause();
  audio7.currentTime = 0;

  audio8.pause();
  audio8.currentTime = 0;

  audio9.pause();
  audio9.currentTime = 0;

  audio10.pause();
  audio10.currentTime = 0;

  audio11.pause();
  audio11.currentTime = 0;

  audio12.pause();
  audio12.currentTime = 0;

  audio13.pause();
  audio13.currentTime = 0;
  
  
  
}





function clicking(){



  var bt1 = document.getElementsByTagName('li')[3];
  var bt2 = document.getElementsByTagName('li')[4];
  var bt3 = document.getElementsByTagName('li')[5];
  var bt4 = document.getElementsByTagName('li')[6];
  var bt5 = document.getElementsByTagName('li')[7];
  var bt6 = document.getElementsByTagName('li')[8];
  var bt7 = document.getElementsByTagName('li')[9];
  var bt8 = document.getElementsByTagName('li')[10];
  var bt9 = document.getElementsByTagName('li')[11];
  var bt10 = document.getElementsByTagName('li')[12];
  var bt11 = document.getElementsByTagName('li')[13];




  var boton = document.getElementById('btMenu');

        if (boton.style.display == "none"){

          document.getElementById('menu').style.height ="358px";
         

          bt1.style.display = "block";
          bt2.style.display = "block";
          bt3.style.display = "block";
          bt4.style.display = "block";
          bt5.style.display = "block";
          bt6.style.display = "block";
          bt7.style.display = "block";
          bt8.style.display = "block";
          bt9.style.display = "block";
          bt10.style.display = "block";
          bt11.style.display = "block";
        

        }else{

          document.getElementById('menu').style.height = "68px";

          bt1.style.display = "none";
          bt2.style.display = "none";
          bt3.style.display = "none";
          bt4.style.display = "none";
          bt5.style.display = "none";
          bt6.style.display = "none";
          bt7.style.display = "none";
          bt8.style.display = "none";
          bt9.style.display = "none";
          bt10.style.display = "none";
          bt11.style.display = "none";


  }


}


/* VISUALIZACIÓN DE LETRAS DE CANCION */



function visualletrita(){


      tema = document.getElementById('letrasTema');

      tema.style.display = "block";


}

function closePanelesLetras(){


  tema = document.getElementById('letrasTema');

  tema.style.display = "none";

  document.getElementById('menu').style.display ="none";



}



function letrita1(){

  document.getElementById('letrita').innerHTML = "Vamos campeones,<br>hoy teneis que ganar por los colores,<br>lucha con juego,<br>ese escudo en el pecho es lo primero.<br><br>Porque aqui estamos todos,<br>te venimos a ver,<br> no podemos perder.<br>te llevamos muy dentro,<br>Vamos campeones,<br>hoy teneis que ganar por los colores,<br>lucha con juego,<br>ese escudo en el pecho es lo primero.<br><br>Porque aqui estamos todos,<br>te venimos a ver,<br>te llevamos muy dentro,<br>no podemos perder.<br><br>Vamos campeones,<br>hoy teneis que ganar por los colores.";

}

function letrita2(){
 
  document.getElementById('letrita').innerHTML = "Por eso yo te animaré<br>siempre de corazón,<br>los hinchas nunca te fallan,<br>intenta no fallar a la afición.<br><r>Por eso yo te animaré<br>siempre de corazón,<br>los hinchas nunca te fallan,<br>intenta no fallar a la afición.<br><br>lolololo lolololo lolo lolololo lololo lolololo lololololololololo,<br>lolololo lolololo lolo lolololo lololo lolololo lololololololololo.";


}

function letrita3(){

  document.getElementById('letrita').innerHTML = "Vente con el Real Madrid,<br> que es lo que se lleva ahora.<br><br> Vente con nuestro autobús,<br> que vamos a Barcelona.<br> Hay que llegar al Nou Camp<br> y ganar por 5-0.<br> Es la forma más directa<br> de acabar siendo primero.";

}


function letrita4(){

  document.getElementById('letrita').innerHTML = "Real Madrid, mi buen amigo,<br> este año volveré a estar contigo.<br> Te animaremos de corazón,<br> esta es la hinchada que te quiere, campeón.<br> No me importa lo que digan,<br> lo que digan los demás;<br> yo te sigo a todas partes,<br> cada día te quiero más.<br><br>Lolololo lololo lololo lolololo lololololo lolololo lololo lololo lolololololololo<br>Lolololo lololo lololo lolololo lololololo lolololo lololo lololo lolololololololo.";

}


function letrita5(){

  document.getElementById('letrita').innerHTML = "Somos los hinchas más pasionales,<br> somos los hinchas más fieles y leales.<br> Por este equipo por el que vivimos,<br> por estos colores por los que morimos.<br><br>oeoe oeoe oeoeoeoeoeoe oeoe oeoe oeoeoeoeoeoe.<br><br>Arriba, arriba arriba,<br>arriba con ese balón,<br> que Luis Figo lo prepara,<br> que Luis Figo lo prepara<br> y Raúl remata a gol.";

}


function letrita6(){

  document.getElementById('letrita').innerHTML = "Real Madrid,<br> gloria a ti campeón.<br> Tu bandera es signo de pasión,<br> gloria a ti, campeón.<br><br>Tus fieles seguidores,<br> siempre estan donde tu estas,<br> animando con fuerza de principio hasta el final,<br> para poder ganar,<br> por los colores al rival.<br>Aquí estan los inchas nadie los puede parar,<br> el grito de a por ellos siempre es incondicional,<br> y el mundo cantará los roles del real real. ";

}


function letrita7(){

  document.getElementById('letrita').innerHTML = "Ya estamos todos aquí,<br> animando al Real Madrid.<br> Cuando el Madrid marcará,<br> este estadio estallará.<br> Desde el fondo se alzarán,<br> son los hinchas del Real.<br><br>Real Madrid real Madrid real Madrid,<br> real Madrid real Madrid real Madrid,<br> real Madrid real Madrid real Madriiid,<br> real Madrid, real Madrid.";

}


function letrita8(){

  document.getElementById('letrita').innerHTML = "Dale Madrid, dale,<br> te sigo a todas partes, yo te quiero.<br> Vamos a dar la vuelta al mundo entero,<br> hay que ponerle un poco más de juego.<br> Es lo que dice la gente,<br> que amamos al Madrid hasta la muerte.<br> Así somos sus fieles seguidores,<br> madridistas incondicionales.<br><br>lolololololo lolo lolo lolo lololololo,<br> lolololololo lololololo lololololololololololo.";

}


function letrita9(){

  document.getElementById('letrita').innerHTML = "Campeones, campeones oe oe oe,<br> campeones campeones oe oe oe.<br><br>Todo el estadio, debe cantar,<br> animando a nuestro Real,<br> madrid, madrid, madrid, madrid,<br> a la bin a la ban a la bin bon ban,<br> Madrid, Madrid y nadie más.";
}


function letrita10(){

  document.getElementById('letrita').innerHTML = "En españa real,<br> en europa real,<br> en el mundo real,<br> para siempre real madrid.<br><br> A por ellos oe, a por ellos oe,<br> a por ellos oeeee, a por ellos eoe.";


}


function visualPanel(){

  document.getElementById('menu').style.display ="block";
         
}

function openEstadio(){

  setTimeout(verEstadio, 1000);

}

function verEstadio(){

  document.getElementById('Estadio').style.display ="block";


}


function closeEstadio(){

  setTimeout(cEstadio, 90600);

}


function cEstadio(){

  document.getElementById('Estadio').style.display ="none";


}


function openTeam(){

  setTimeout(team, 3000);

}

function team(){

  document.getElementById('team').style.display ="block";


}


function closeTeam(){

  setTimeout(teamC, 90600);

}

function teamC(){

  document.getElementById('team').style.display ="none";


}

/* ------------------------------------------- */

function letraaaSuvenir(){

  var audio1 = document.getElementById('sonido1');
  audio1.play();

  setTimeout(vLetra1, 100);
  setTimeout(vLetra2, 3400);
  setTimeout(vLetra3, 7000);
  setTimeout(vLetra4, 10900);
  setTimeout(vLetra5, 14400);
  setTimeout(vLetra6, 18100);
  setTimeout(vLetra7, 21200);
  setTimeout(vLetra8, 25000);
  setTimeout(vLetra9, 28200);    
  setTimeout(vLetra10, 32200);
  setTimeout(vLetra11, 35900);   
  setTimeout(vLetra12, 40100);
  setTimeout(vLetra13, 43600);  
  setTimeout(vLetra14, 46600);
  setTimeout(vLetra15, 50200);     
  setTimeout(vLetra16, 53500);
  setTimeout(vLetra17, 57600);
  setTimeout(vLetra18, 61200);
  setTimeout(vLetra19, 65200);
  setTimeout(vLetra20, 68900);
  setTimeout(vLetra21, 72900);
  setTimeout(vLetra22, 77000); 
  setTimeout(vLetra23, 80900);  
  setTimeout(vLetra24, 85100);
  setTimeout(vLetra25, 89000);


}

/* SE MUESTRA LA LETRA DE LA CANCION SOUVERNIR */




      function ltr1(){

        setTimeout(vLetra1, 100);
       
          
       }
          
        function vLetra1(){
          
            document.getElementById('l1').style.display ="block";
          
        }


        function ltr2(){

          setTimeout(vLetra2, 3400);
            
         }
            
        function vLetra2(){
            
              document.getElementById('l1').style.display ="none";
              document.getElementById('l2').style.display ="block";
            
          }


          function ltr3(){

            setTimeout(vLetra3, 7000);

          }


          function vLetra3(){
            
            document.getElementById('l2').style.display ="none";
            document.getElementById('l3').style.display ="block";
          
        }


        function ltr4(){

          setTimeout(vLetra4, 10900);

        }


        function vLetra4(){
          
          document.getElementById('l3').style.display ="none";
          document.getElementById('l4').style.display ="block";
        
      }


      function ltr5(){

        setTimeout(vLetra5, 14400);

      }


      function vLetra5(){
        
        document.getElementById('l4').style.display ="none";
        document.getElementById('l5').style.display ="block";
      
    }


    function ltr6(){

      setTimeout(vLetra6, 18100);

    }


    function vLetra6(){
      
      document.getElementById('l5').style.display ="none";
      document.getElementById('l6').style.display ="block";
    
  }


  function ltr7(){

    setTimeout(vLetra7, 21200);

  }


  function vLetra7(){
    
    document.getElementById('l6').style.display ="none";
    document.getElementById('l7').style.display ="block";
  
}


function ltr8(){

  setTimeout(vLetra8, 25000);

}


function vLetra8(){
  
  document.getElementById('l7').style.display ="none";
  document.getElementById('l8').style.display ="block";

}



function ltr9(){

  setTimeout(vLetra9, 28200);

}


function vLetra9(){
  
  document.getElementById('l8').style.display ="none";
  document.getElementById('l9').style.display ="block";

}


function ltr10(){

  setTimeout(vLetra10, 32200);

}


function vLetra10(){
  
  document.getElementById('l9').style.display ="none";
  document.getElementById('l10').style.display ="block";

}

function ltr11(){

  setTimeout(vLetra11, 35900);

}


function vLetra11(){
  
  document.getElementById('l10').style.display ="none";
  document.getElementById('l11').style.display ="block";

}


function ltr12(){

  setTimeout(vLetra12, 40100);

}


function vLetra12(){
  
  document.getElementById('l11').style.display ="none";
  document.getElementById('l12').style.display ="block";

}


function ltr13(){

  setTimeout(vLetra13, 43600);

}


function vLetra13(){
  
  document.getElementById('l12').style.display ="none";
  document.getElementById('l13').style.display ="block";

}


function ltr14(){

  setTimeout(vLetra14, 46600);

}


function vLetra14(){
  
  document.getElementById('l13').style.display ="none";
  document.getElementById('l14').style.display ="block";

}


function ltr15(){

  setTimeout(vLetra15, 50200);

}


function vLetra15(){
  
  document.getElementById('l14').style.display ="none";
  document.getElementById('l15').style.display ="block";

}


function ltr16(){

  setTimeout(vLetra16, 53500);

}


function vLetra16(){
  
  document.getElementById('l15').style.display ="none";
  document.getElementById('l16').style.display ="block";

}


function ltr17(){

  setTimeout(vLetra17, 57600);

}


function vLetra17(){
  
  document.getElementById('l16').style.display ="none";
  document.getElementById('l17').style.display ="block";

}


function ltr18(){

  setTimeout(vLetra18, 61200);

}


function vLetra18(){
  
  document.getElementById('l17').style.display ="none";
  document.getElementById('l18').style.display ="block";

}

function ltr19(){

  setTimeout(vLetra19, 65200);

}


function vLetra19(){
  
  document.getElementById('l18').style.display ="none";
  document.getElementById('l19').style.display ="block";

}

function ltr20(){

  setTimeout(vLetra20, 68900);

}


function vLetra20(){
  
  document.getElementById('l19').style.display ="none";
  document.getElementById('l20').style.display ="block";

}


function ltr21(){

  setTimeout(vLetra21, 72900);

}


function vLetra21(){
  
  document.getElementById('l20').style.display ="none";
  document.getElementById('l21').style.display ="block";

}

function ltr22(){

  setTimeout(vLetra22, 77000);

}


function vLetra22(){
  
  document.getElementById('l21').style.display ="none";
  document.getElementById('l22').style.display ="block";

}


function ltr23(){

  setTimeout(vLetra23, 80900);

}


function vLetra23(){
  
  document.getElementById('l22').style.display ="none";
  document.getElementById('l23').style.display ="block";

}


function ltr24(){

  setTimeout(vLetra24, 85100);

}


function vLetra24(){
  
  document.getElementById('l23').style.display ="none";
  document.getElementById('l24').style.display ="block";

}


function ltr25(){

  setTimeout(vLetra25, 89000);

}


function vLetra25(){
  
  document.getElementById('l24').style.display ="none";

}




function musicD(){

  var audio1 = document.getElementById('sonido1');
  audio1.play();
  
  }

function musicE(){

  var audio2 = document.getElementById('sonido1');
  
  audio2.pause();
  audio2.currentTime = 0;
  
  }









