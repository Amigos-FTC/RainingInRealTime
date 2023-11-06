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
const faker = require('faker');
const { ne } = require('faker/lib/locales');
// Importe o módulo 'hashmap'
const HashMap = require('hashmap');

// Função para gerar dados sintéticos.
function gerarDadosSinteticos() {
    const dadosSinteticos = new HashMap();
    dadosSinteticos.set('A', faker.random.number({ min: 0, max: 1 })) // Dado do sensor A (0 ou 1)
    dadosSinteticos.set('B', faker.random.number({ min: 0, max: 1 })) // Dado do sensor B (0 ou 1)
    dadosSinteticos.set('C', faker.random.number({ min: 0, max: 0 })) // Dado do sensor C (0 ou 1)
    dadosSinteticos.set('D', faker.random.number({ min: 0, max: 0 })) // Dado do sensor D (0 ou 1)
    dadosSinteticos.set('E', faker.random.number({ min: 0, max: 0 })) // Dado do sensor E (0 ou 1)
    return dadosSinteticos;
}

// Função para apresentar os dados dados para desenvolvedores.
function apresentarDados(dados) {
    console.log('Sensor A: ', dados.get('A'));
    console.log('Sensor B: ', dados.get('B'));
    console.log('Sensor C: ', dados.get('C'));
    console.log('Sensor D: ', dados.get('D'));
    console.log('Sensor E: ', dados.get('E'));
}

// Main function - Função para interpretar os dados e prever a direção da chuva. 
function previsaoDaChuva(dados) {
    const porcentChuva = new HashMap();
    porcentChuva.set('A', 0);
    porcentChuva.set('B', 0);
    porcentChuva.set('C', 0);
    porcentChuva.set('D', 0);
    porcentChuva.set('E', 0);

    if (dados.get('A') === 1) {
        porcentChuva.set('B', 25);
        porcentChuva.set('C', 25);
        porcentChuva.set('D', 25);
        porcentChuva.set('E', 25);

        if (dados.get('B') === 1) { // A para B
            porcentChuva.set('C', 40);
            porcentChuva.set('D', 40);
            porcentChuva.set('E', 20);
            console.log('Noroeste');
        } else if (dados.get('C') === 1) { // A para C
            porcentChuva.set('B', 40);
            porcentChuva.set('D', 20);
            porcentChuva.set('E', 40);
            console.log('Nordeste');
        } else if (dados.get('D') === 1) { // A para D
            porcentChuva.set('B', 40);
            porcentChuva.set('C', 20);
            porcentChuva.set('E', 40);
            console.log('Suldoeste');
        } else if (dados.get('E') === 1) { // A para E
            porcentChuva.set('B', 20);
            porcentChuva.set('C', 40);
            porcentChuva.set('D', 40);
            console.log('Sudeste');
        }
    } else if (dados.get('B') === 1) {
        porcentChuva.set('A', 28.3);
        porcentChuva.set('C', 28.3);
        porcentChuva.set('D', 28.3);
        porcentChuva.set('E', 15);

        if (dados.get('C') === 1) { // B para C
            porcentChuva.set('A', 70);
            porcentChuva.set('D', 15);
            porcentChuva.set('E', 15);
            console.log('Leste');
            if (dados.get('D') === 1) { // B para C para D
                porcentChuva.set('A', 80);
                porcentChuva.set('E', 20);
                console.log('Chuva variável no noroeste')
            } else if (dados.get('E') === 1) { // B para C para E
                porcentChuva.set('A', 80);
                porcentChuva.set('D', 20);
                console.log('Chuva variável no nordeste')
            } else if (dados.get('A') === 1) { // B para C para A
                porcentChuva.set('D', 80);
                porcentChuva.set('E', 20);
                console.log('Chuva variável no Norte')
            }


        } else if (dados.get('D') === 1) { // B para D
            porcentChuva.set('A', 70);
            porcentChuva.set('C', 15);
            porcentChuva.set('E', 15);
            console.log('Sul');
            if (dados.get('C') === 1) { // B para D para C
                porcentChuva.set('A', 80);
                porcentChuva.set('E', 20);
                console.log('Chuva variável no noroeste')
            } else if (dados.get('E') === 1) { // B para D para E
                porcentChuva.set('A', 80);
                porcentChuva.set('C', 20);
                console.log('Chuva variável no Sudoeste')
            } else if (dados.get('A') === 1) { // B para D para A
                porcentChuva.set('C', 80);
                porcentChuva.set('E', 20);
                console.log('Chuva variável no Oeste')
            }
        } else if (dados.get('A') === 1) { // B para A
            porcentChuva.set('C', 15);
            porcentChuva.set('D', 15);
            porcentChuva.set('E', 70);
            console.log('Sudeste');
            if (dados.get('C') === 1) { // B para A para C
                porcentChuva.set('D', 80);
                porcentChuva.set('E', 20);
                console.log('Chuva variável no Norte')
            } else if (dados.get('D') === 1) { // B para A para D
                porcentChuva.set('C', 80);
                porcentChuva.set('E', 20);
                console.log('Chuva variável no Oeste')
            } else if (dados.get('E') === 1) { // B para A para E
                porcentChuva.set('C', 50);
                porcentChuva.set('D', 50);
                console.log('Chuva variável no Nordeste')
            }
        }
    } else if (dados.get('C') === 1) {
        porcentChuva.set('A', 28.3);
        porcentChuva.set('B', 28.3);
        porcentChuva.set('D', 15);
        porcentChuva.set('E', 28.3);

        if (dados.get('A') === 1) { // C para A
            porcentChuva.set('B', 15);
            porcentChuva.set('D', 70);
            porcentChuva.set('E', 15);
            console.log('Nordeste');
        } else if (dados.get('B') === 1) { // C para B
            porcentChuva.set('A', 70);
            porcentChuva.set('D', 15);
            porcentChuva.set('E', 15);
            console.log('Oeste');
        } else if (dados.get('E') === 1) { // C para E
            porcentChuva.set('A', 70);
            porcentChuva.set('B', 15);
            porcentChuva.set('D', 15);
            console.log('Sul');
        }
    } else if (dados.get('D') === 1) {
        porcentChuva.set('A', 28.3);
        porcentChuva.set('B', 28.3);
        porcentChuva.set('C', 15);
        porcentChuva.set('E', 28.3);

        if (dados.get('B') === 1) { // D para B
            porcentChuva.set('A', 70);
            porcentChuva.set('C', 15);
            porcentChuva.set('E', 15);
            console.log('Norte');
        } else if (dados.get('E') === 1) { // D para E
            porcentChuva.set('A', 70);
            porcentChuva.set('B', 15);
            porcentChuva.set('C', 15);
            console.log('Leste');
        } else if (dados.get('A') === 1) { // D para A
            porcentChuva.set('B', 15);
            porcentChuva.set('C', 70);
            porcentChuva.set('E', 15);
            console.log('Nordeste');
        }
    } else if (dados.get('E') === 1) {
        porcentChuva.set('A', 28.3);
        porcentChuva.set('B', 15);
        porcentChuva.set('C', 28.3);
        porcentChuva.set('D', 28.3);

        if (dados.get('A') === 1) { // E para A
            porcentChuva.set('B', 70);
            porcentChuva.set('C', 15);
            porcentChuva.set('D', 15);
            console.log('Noroeste');
        } else if (dados.get('D') === 1) { // E para D
            porcentChuva.set('A', 70);
            porcentChuva.set('B', 15);
            porcentChuva.set('C', 15);
            console.log('Oeste');
        } else if (dados.get('C') === 1) { // E para C
            porcentChuva.set('A', 70);
            porcentChuva.set('B', 15);
            porcentChuva.set('D', 15);
            console.log('Norte');
        }
    } else {
        porcentChuva.set('A', 0);
        porcentChuva.set('B', 0);
        porcentChuva.set('C', 0);
        porcentChuva.set('D', 0);
        porcentChuva.set('E', 0);

        console.log('Sem chuva');
    }
}

//--------------------------------------------------------------\\
// Código principal

for (let i = 0; i < 10; i++) {
    gerarDadosSinteticos();
    apresentarDados(gerarDadosSinteticos());
    previsaoDaChuva(gerarDadosSinteticos());
}

//--------------------------------------------------------------\\