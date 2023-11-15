// Conectar ao servidor WebSocket na URL especificada
const socket = io('http://localhost:3001');

// Função para atualizar o estado do sensor com base no valor recebido
function updateSensors(sensorId, sensorValue) {
    const sensorIconElement = document.getElementById(`${sensorId}Icon`);
    const sensorIconElement2 = document.getElementById(`${sensorId}Icon2`);

    if (sensorIconElement && sensorIconElement2) {
        sensorIconElement.style.opacity = sensorValue > 800 ? 0.2 : 1;
        sensorIconElement2.style.opacity = sensorValue > 800 ? 0.2 : 1;
    }

    console.log(`Sensor ${sensorId} - Value: ${sensorValue}`);
}

function highlightSensorWithPossibility(sensorId, possibility) {
    const sensorIconElement = document.getElementById(`${sensorId}Icon`);
    const sensorIconElement2 = document.getElementById(`${sensorId}Icon2`);

    if (sensorIconElement && sensorIconElement2) {
        // Limpa qualquer destaque anterior
        sensorIconElement.style.backgroundColor = '';
        sensorIconElement2.style.backgroundColor = '';

        // Se houver possibilidade de chuva, inicia o destaque
        if (possibility) {
            // Defina a frequência de piscar (em milissegundos)
            const blinkInterval = 700; // por exemplo, 500ms
            let isHighlighted = false;

            const blinkIntervalId = setInterval(() => {
                if (isHighlighted) {
                    sensorIconElement.style.opacity = 1.0; // Altere conforme necessário
                    sensorIconElement2.style.opacity = 1.0; // Altere conforme necessário
                } else {
                    sensorIconElement.style.backgroundColor = ''; // Volta para a cor original
                    sensorIconElement2.style.backgroundColor = ''; // Volta para a cor original
                }
                isHighlighted = !isHighlighted;
            }, blinkInterval);

            // Defina um tempo limite para parar o piscar (por exemplo, 3000ms)
            setTimeout(() => {
                clearInterval(blinkIntervalId);
                // Certifique-se de que a cor está de volta à original após o tempo limite
                sensorIconElement.style.backgroundColor = '';
                sensorIconElement2.style.backgroundColor = '';
            }, 3000);
        }
    }
}

function analisarSensoresDeChuva(sensorId, sensorValue) {
    // Ajuste a lógica conforme necessário para o seu caso
    if (sensorId === 'sensor4' && sensorValue < 800 && sensor1Value < 800) {
        console.log('Choveu no sensor 4 e sensor 1. Possibilidade de chuva no sensor 3.');
        highlightSensorWithPossibility('sensor3', true);
    } else {
        highlightSensorWithPossibility('sensor3', false);
    }

    if (sensorId === 'sensor2' && sensorValue < 800 && sensor1Value < 800) {
        console.log('Choveu no sensor 2 e sensor 1. Possibilidade de chuva no sensor 5.');
        highlightSensorWithPossibility('sensor5', true);
    } else {
        highlightSensorWithPossibility('sensor5', false);
    }

    if (sensorId === 'sensor3' && sensorValue < 800 && sensor1Value < 800) {
        console.log('Choveu no sensor 3 e sensor 1. Possibilidade de chuva no sensor 4.');
        highlightSensorWithPossibility('sensor4', true);
    } else {
        highlightSensorWithPossibility('sensor4', false);
    }

    if (sensorId === 'sensor5' && sensorValue < 800 && sensor1Value < 800) {
        console.log('Choveu no sensor 5 e sensor 1. Possibilidade de chuva no sensor 2.');
        highlightSensorWithPossibility('sensor2', true);
    } else {
        highlightSensorWithPossibility('sensor2', false);
    }
}

socket.on('dataFromSensor1', (data) => {
    updateSensors('sensor1', data);
    analisarSensoresDeChuva('sensor1', data);
});

socket.on('dataFromSensor2', (data) => {
    updateSensors('sensor2', data);
    analisarSensoresDeChuva('sensor2', data);
});

socket.on('dataFromSensor3', (data) => {
    updateSensors('sensor3', data);
    analisarSensoresDeChuva('sensor3', data);
});

socket.on('dataFromSensor4', (data) => {
    updateSensors('sensor4', data);
    analisarSensoresDeChuva('sensor4', data);
});

socket.on('dataFromSensor5', (data) => {
    updateSensors('sensor5', data);
    analisarSensoresDeChuva('sensor5', data);
});

// Adicione sensor1Value como uma variável global ou de escopo adequado
let sensor1Value = 0;

socket.on('dataFromSensor1', (data) => {
    updateSensors('sensor1', data);
    sensor1Value = data;
    analisarSensoresDeChuva('sensor1', data);
});