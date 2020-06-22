//Criar uma aplicação de prevenção de COVID
//A aplicação deve:

//Perguntar se o usuário está usando máscara quando precisa sair de casa (Sim ou Não)
//Perguntar se o usuário está lavando as mãos frequentemente
//Se o usuário responder sim para as perguntas anteriores, mostrar um elogio para o usuário
//Se não, dar bronca no usuário



let mascara = (readlineSync.question('Voce esta utilizando mascara?:'));
let maos = (readlineSync.question('Voce esta lavando as mãos?:'));
     if (mascara ="Sim") {
          console.log("Continue utilizando mascara!!!");
      }
          else if  (mascara ="Não"){
              console.log("Vá utilizar mascaras!! ");
      } 

          else if (maos = "Sim") {
           console.log("Continue a lavar as mãos");
       }
         else if (maos = "Não") {
            console.log("Lave as suas mão, previna-se ")


         }  
        

         
            
    
