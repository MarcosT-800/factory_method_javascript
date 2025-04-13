// Padrão de Projeto Factory Method Simplificado - Transportes

// Classe base/interface para todos os tipos de transporte
class Transporte {
  entregar() {
    // Método que será implementado nas subclasses
  }
}

// Tipos concretos de transporte
class Caminhao extends Transporte {
  entregar() {
    return "Entrega realizada por caminhão via estrada.";
  }
}

class Navio extends Transporte {
  entregar() {
    return "Entrega realizada por navio via mar.";
  }
}

class Aviao extends Transporte {
  entregar() {
    return "Entrega realizada por avião via ar.";
  }
}

// Factory Method - Classe Criadora
class ServicoLogistica {
  // Este é o Factory Method
  criarTransporte(tipo) {
    switch(tipo) {
      case "terrestre":
        return new Caminhao();
      case "maritimo":
        return new Navio();
      case "aereo":
        return new Aviao();
      default:
        throw new Error("Tipo de transporte desconhecido");
    }
  }
  
  // Método que usa o objeto criado pelo Factory Method
  realizarEntrega(tipo) {
    // Cria o transporte apropriado
    const transporte = this.criarTransporte(tipo);
    
    // Usa o transporte para fazer a entrega
    return transporte.entregar();
  }
}

// Código para testar o funcionamento
const logistica = new ServicoLogistica();

console.log("Cliente 1:");
console.log(logistica.realizarEntrega("terrestre"));

console.log("\nCliente 2:");
console.log(logistica.realizarEntrega("maritimo"));

console.log("\nCliente 3:");
console.log(logistica.realizarEntrega("aereo"));
