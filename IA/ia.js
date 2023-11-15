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

DATA: 02/11/2023 - xx/xx/xxxx */
const socket = io('http://localhost:3001');


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
    if(sensor1 <= 799){
      sensor1 = true;
    } else {sensor1 = false;} 

    if(sensor2 <= 799){
      sensor2 = true;
    } else {sensor2 = false;}

    if(sensor3 <= 799){
      sensor3 = true;
    } else {sensor3 = false;}

    if(sensor4 <= 799){
      sensor4 = true;
    } else {sensor4 = false;}

    if(sensor5 <= 799){
      sensor5 = true;
    } else {sensor5 = false;}

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
    console.log('Previsão de chuva:', previsao);
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

socket.on('dataFromSensor1', (data) => {
  modeloIA.leituraSensores(data.sensor1, data.sensor2, data.sensor3, data.sensor4, data.sensor5);
});

socket.on('dataFromSensor2', (data) => {
  modeloIA.leituraSensores(data.sensor1, data.sensor2, data.sensor3, data.sensor4, data.sensor5);
});

socket.on('dataFromSensor3', (data) => {
  modeloIA.leituraSensores(data.sensor1, data.sensor2, data.sensor3, data.sensor4, data.sensor5);
});

socket.on('dataFromSensor4', (data) => {
  modeloIA.leituraSensores(data.sensor1, data.sensor2, data.sensor3, data.sensor4, data.sensor5);
});

socket.on('dataFromSensor5', (data) => {
  modeloIA.leituraSensores(data.sensor1, data.sensor2, data.sensor3, data.sensor4, data.sensor5);
});
