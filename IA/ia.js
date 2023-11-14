/*
PROBLEMA:
Este código aborda implementação de uma IA para de prever a direção da chuva com base em dados coletados por sensores de chuva conectados a um Arduino. 
O desafio principal é fornecer informações úteis para os usuários sobre as condições climáticas, permitindo que eles se preparem adequadamente para a chuva.

DESCRIÇÃO:
O projeto utiliza sensores de chuva para detectar a presença de chuva em locais específicos. 
Com base nos dados desses sensores, o objetivo é prever a direção da chuva e onde há maior probabilidade de ocorrer.

SOLUÇÃO:
A solução envolve a implementação de um modelo de IA. Com o modelo treinado, ele é usado para fazer previsões em tempo real com base nos dados dos sensores do Arduino. 
As previsões são então disponibilizadas em uma plataforma web para acesso dos usuários.

Este código é parte de um projeto mais amplo chamado "RRT - Rain in Real Time", que visa melhorar a segurança, eficiência e qualidade de vida dos usuários, fornecendo informações climáticas precisas e em tempo real. 
A implementação de inteligência artificial é fundamental para alcançar esse objetivo e proporcionar inclusão digital no cotidiano das pessoas.

DATA: 02/11/2023 - xx/xx/xxxx

OBSERVAÇÕES: implementação de uma inteligência artificial para prever possíveis comportamentos da chuva com base nos dados obtidos pelos sensores do Arduino. Imagine três sensores em linha; o primeiro sensor a esquerda detecta chuva; após ele, o sensor do meio detecta a chuva; isso significa que a chuva está indo para leste (para a direita). É assim que nosso programa irá deduzir a provável direção da chuva. Entretanto usaremos 5 sensores formando um quadrado. O sensor A estará no meio; o sensor B na ponta superior esquerda do quadrado; o sensor C na ponta direita superior do quadrado; o sensor D na ponta esquerda inferior do quadrado; o sensor E estará na ponta inferior direita.*/
// Biblioteca para gerar dados sintéticos. É necessário intalar a biblioteca com o comando "npm install faker". 

class IaPrevisaoChuva {
  constructor() {
    this.probChuvaA = false;
    this.probChuvaB = false;
    this.probChuvaC = false;
    this.probChuvaD = false;
    this.probChuvaE = false;

    this.sessoesLidas = [];
  }

  leituraSensores(sensor1, sensor2, sensor3, sensor4, sensor5) {
    const sessaoAtual = { sensorA: sensor1, sensorB: sensor2, sensorC: sensor3, sensorD: sensor4, sensorE: sensor5 };

    this.sessoesLidas.push(sessaoAtual);

    if (this.sessoesLidas.length > 3) {
      this.sessoesLidas.shift(); // Remove a leitura mais antiga
      // Mantém no máximo três sessões de leitura
    }

    this.analisarProb();
    const previsao = this.previsao();

    console.log('Leitura IA dos sensores:', sessaoAtual);
    console.log('Histórico de leituras:', this.sessoesLidas);
  }

  analisarProb() {
    this.probChuvaA = false;
    this.probChuvaB = false;
    this.probChuvaC = false;
    this.probChuvaD = false;
    this.probChuvaE = false;

    if (this.sessoesLidas[0].sensorD === true || this.sessoesLidas[1].sensorD === true || this.sessoesLidas[2].sensorD === true) {
      if (this.sessoesLidas[0].sensorA === true || this.sessoesLidas[1].sensorA === true || this.sessoesLidas[2].sensorA === true) {
        this.probChuvaC = true;
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      } else {
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      }
    }

    else if (this.sessoesLidas[0].sensorC === true || this.sessoesLidas[1].sensorC === true || this.sessoesLidas[2].sensorC === true) {
      if (this.sessoesLidas[0].sensorA === true || this.sessoesLidas[1].sensorA === true || this.sessoesLidas[2].sensorA === true) {
        this.probChuvaD = true;
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      } else {
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      }
    }

    else if (this.sessoesLidas[0].sensorE === true || this.sessoesLidas[1].sensorE === true || this.sessoesLidas[2].sensorE === true) {
      if (this.sessoesLidas[0].sensorA === true || this.sessoesLidas[1].sensorA === true || this.sessoesLidas[2].sensorA === true) {
        this.probChuvaB = true;
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      } else {
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      }
    }

    else if (this.sessoesLidas[0].sensorE === true || this.sessoesLidas[1].sensorE === true || this.sessoesLidas[2].sensorE === true) {
      if (this.sessoesLidas[0].sensorA === true || this.sessoesLidas[1].sensorA === true || this.sessoesLidas[2].sensorA === true) {
        this.probChuvaB = true;
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      } else {
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      }
    }
    
    else if (this.sessoesLidas[0].sensorB === true || this.sessoesLidas[1].sensorB === true || this.sessoesLidas[2].sensorB === true) {
      if (this.sessoesLidas[0].sensorA === true || this.sessoesLidas[1].sensorA === true || this.sessoesLidas[2].sensorA === true) {
        this.probChuvaE = true;
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      } else {
        return this.probChuvaA;
        return this.probChuvaB;
        return this.probChuvaC;
        return this.probChuvaD;
        return this.probChuvaE;
      }
    }

    else {
      return this.probChuvaA;
      return this.probChuvaB;
      return this.probChuvaC;
      return this.probChuvaD;
      return this.probChuvaE;
    }

  }


}

//--------------------------------------------------------------\\
// Exemplo de uso
const modeloIA = new IaPrevisaoChuva();
modeloIA.leituraSensores(true, false, true, false, false); // Substitua os valores pelos dados reais dos sensores
modeloIA.leituraSensores(false, true, false, false, true); // Outra leitura de exemplo
//--------------------------------------------------------------\\