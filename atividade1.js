//Criar uma aplicação que realiza auto-checkin//

//Criar uma aplicação que realiza auto-checkin
//A aplicação deve://

//Perguntar qual o número do vôo do usuário
//Perguntar em qual fileira o usuário deseja sentar (A, B, C, D ou F)
//Devolver um cartão de embarque com as informações de número do vôo e fileira escolhida pelo usuário *//


let numerodevoo = parseInt(readlineSync.question('Em qual voo deseja sentar : '));
let fileira = parseInt(readlineSync.question('Em qual fileira deseja sentar : '));

switch (fileira) {
    case "A":
        console.log("Fileira de LETRA A");
        break;
    case "B":
        console.log("Fileira de LETRA B");
        break;
    case "C":
        console.log("Fileira de letra C");
        break;
    case "D":
        console.log("Fileira de letra D");
        break;

    case "F":
        console.log("Fileira de letra F");
        break;
  
    }
    console.log("Seu cartao de embarque é" );
    console.log("Seu voo é de numero: "+ numerodevoo);
    console.log("Sua Fileira é :"+ fileira );


 




