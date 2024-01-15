const prompt = require("prompt-sync")({sigint: true});

class Usuario{
  constructor(Idusuario,nomeusuario,enderecocontatou,histreserva){
      this.Idusuario = Idusuario
      this.nomeusuario = nomeusuario
      this.enderecocontatou = enderecocontatou
      this.histreserva = histreserva
  }
}
class Propriedade{
  constructor(Idpropriedade,nomepropriedade,enderecop,capHosp,nquartos,preconoite,disp){
  this.Idpropriedade = Idpropriedade
  this.nomepropriedade = nomepropriedade
  this.enderecop = enderecop
  this.capHosp = capHosp
  this.nquartos = nquartos
  this.preconoite = preconoite
  this.disp = disp
  }
}
class Reserva{
  constructor(Idusuario, Idpropriedade, datacheckin, datacheckout,valortotalreserva){
  this.Idusuario = Idusuario
  this.Idpropriedade = Idpropriedade
  this.datacheckin = datacheckin
  this.datacheckout = datacheckout
  this.valortotalreserva = valortotalreserva

  }
}
class Anuncio{
  constructor(Idanuncio,idpropietario,idp,titulo,descricao,status){
      this.Idanuncio = Idanuncio
      this.idpropietario = idpropietario
      this.idp = idp
      this.titulo = titulo
      this.descricao = descricao
      this.status = status
  }
}
class Sistema{

    get Idusuario(){
        return this.Idusuario
    }
    get nomeusuario(){
        return this.nomeusuario
    }
    get enderecocontatou(){
        return this.enderecocontatou
    }
    get histreserva(){
        return this.histreserva
    }
    set nomeusuario(novonomeusuario){
        this.nomeusuario = novonomeusuario
      
    }
    set enderecocontatou(enderecocontatou){
        this.enderecocontatou = enderecocontatou
    }
    set histreserva(histreserva){
        this.histreserva = histreserva
    }
}

let idusuario = 0;
let opcao2;
let opcao;
let logincadastrado = [];
let senhacadastrada = [];
function menuinicial(){
    console.log("Pousada Eclipse");
    console.log("1.Fazer login");
    console.log("2.Fazer Cadastro");
    console.log("3.Sair do programa");
    opcao = prompt("Escolha uma opção: ");
}
menuinicial();

while(opcao != '3'){
    if(opcao == '1'){
        let logindigitado
        let senhadigitada
        logindigitado = (prompt('Digite seu login: '))
        senhadigitada = (prompt('Digite sua senha: '))
        if(logincadastrado.includes(logindigitado) && senhacadastrada.includes(senhadigitada)){
            console.log("Login efetuado com sucesso!")
            menu2();
            break;
        }
        else{
            console.log("Login ou senha inválida.")
        }
    }
    else if (opcao == '2'){
        logincadastrado.push(prompt("Escolha seu login: "))
        senhacadastrada.push(prompt("Escolha sua senha: "))
        idusuario = idusuario + 1
        nomeusuario = prompt("Digite seu nome: ")
        enderecocontatou = prompt("Digite seu endereço: ")
        novousuario = new Usuario(idusuario,nomeusuario,enderecocontatou)
        console.log("Cadastro realizado!")
        menuinicial();
    }
    else{
        console.log("Caractere inválido:");
        menuinicial();
    }
}


//estrutura inicial do menu2
function menu2(){
  console.log("4.Ver meus Dados");
  console.log("5.Modificar Dados");
  console.log("6.Ver lista de Propriedades");
  console.log("7.Ver lista de Reservas");
  console.log("8.Ver lista de Anúncios");
  console.log("9.Reservar propriedade");
  console.log("10.Cancelar Reserva");
  console.log("11.Adicionar Propriedade");
  console.log("12.Excluir propriedade");
  console.log("13.Fazer Anúncio");
  console.log("14.Excluir Anúncio");
  console.log("15.Visualizar Estadia");
  console.log("16.Visualizar Avaliações");
  opcao2 = prompt("Escolha uma opção: ");
  while(opcao2 >= 4 && opcao2 <= 16){
    if(opcao2 == '4'){
      console.log("ID unico: " + idusuario);
      console.log("Nome: " + nomeusuario);
      console.log("Endereço: " + enderecocontatou);
      break;
  
      }
      else if (opcao2 == '5'){
        console.log("5.Modificar Dados");
        nomeusuario = prompt("Novo nome: ");
        console.log("Nome alterado para: " + nomeusuario);
        console.log(novousuario);
        break;
  
      }
      else if (opcao2 == '6'){
        console.log("6.Ver lista de Propriedades");
        break;
    }
      else if (opcao2 == '7'){
        console.log("7.Ver lista de Reservas");
        break;
      }
      else if (opcao2 == '8'){
        console.log("8.Ver lista de Anúncios");
        break;
      }
      else if (opcao2 == '9'){
        console.log("9.Reservar propriedade");
        break;
      }
      else if (opcao2 == '10'){
        console.log("10.Cancelar Reserva");
        break;
      }
      else if (opcao2 == '11'){
        console.log("11.Adicionar Propriedade");
        break;
      }
      else if (opcao2 == '12'){
        console.log("12.Excluir propriedade");
        break;
      }
      else if (opcao2 == '13'){
        console.log("13.Fazer Anúncio");
        break;
      }
      else if (opcao2 == '14'){
        console.log("14.Excluir Anúncio");
        break;
      }
      else if (opcao2 == '15'){
        console.log("15.Visualizar Estadia");
        break;
  
      }
      else if(opcao2 == '16'){
        console.log("16.Visualizar Avaliações");
        break;
      }
      else{
        console.log("Caractere inválido:");
        menu2();
      }
  }

}

