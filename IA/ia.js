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

Este código é parte de um projeto mais amplo chamado "RRT - Rain in Real Time", que visa melhorar a segurança, eficiência e qualidade de vida da usuários, fornecendo informações climáticas precisas e em tempo real. 
A implementação de inteligência artificial é fundamental para alcançar esse objetivo e proporcionar inclusão digital no cotidiano das pessoas.

AUTORES: [Nomes inseridos de acordo com os contribuidores] Sammuel G Martins
DATA: 02/11/2023 - xx/xx/xxxx
*/
const faker = require('faker'); // Biblioteca para gerar dados sintéticos. É necessário intalar a biblioteca com o comando "npm install faker". 
// Importe o módulo 'hashmap'
const HashMap = require('hashmap');

// Função para gerar dados sintéticos.
function gerarDadosSinteticos(qtdDados) {
    const dadosSinteticos = [];

    for (let i = 0; i < qtdDados; i++) {
        const sensorA = faker.random.number({ min: 0, max: 1 }); // Dado do sensor A (0 ou 1)
        const sensorB = faker.random.number({ min: 0, max: 1 }); // Dado do sensor B (0 ou 1)
        const sensorC = faker.random.number({ min: 0, max: 1 }); // Dado do sensor C (0 ou 1)
        const sensorD = faker.random.number({ min: 0, max: 1 }); // Dado do sensor D (0 ou 1)
        const sensorE = faker.random.number({ min: 0, max: 1 }); // Dado do sensor E (0 ou 1)
        dadosSinteticos.push([sensorA, sensorB, sensorC, sensorD, sensorE]);
    }
    return dadosSinteticos;
}

// Função para tratar os dados sintéticos gerados. 
function tratamentoDados(dados) {
    let dadosTratados = new HashMap();
    let alf = ['A', 'B', 'C', 'D', 'E'];

    for (let i = 0; i < alf.length; i++) {
        let chave = alf[i];
        let valor = dados[i];
        dadosTratados.set(chave, valor);
    }

    // imprime os dados tratados
    console.log('Dados tratados: ');
    dadosTratados.forEach((valor, chave) => {
        console.log(`Sensor ${chave} = ${valor}`);
    });


    return dadosTratados;
}


// Função para apresentar os dados. A função apresenta os dados para desenvolvedores.
function apresentarDados(dados) {
    console.log('Dados tratados: ');
    dados.forEach((valor, chave) => {
        console.log(`Sensor ${chave} = ${valor}`);
    });
}

//--------------------------------------------------------------\\
// Código principal
const dadosSinteticos = gerarDadosSinteticos(1);
const dadosTratados = tratamentoDados(dadosSinteticos);
//apresentarDados(dadosTratados);