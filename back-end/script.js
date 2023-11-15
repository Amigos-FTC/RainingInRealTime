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

socket.on('dataFromSensor1', (data) => {
    updateSensors('sensor1', data);
});

socket.on('dataFromSensor2', (data) => {
    updateSensors('sensor2', data);
});

socket.on('dataFromSensor3', (data) => {
    updateSensors('sensor3', data);
});

socket.on('dataFromSensor4', (data) => {
    updateSensors('sensor4', data);
});

socket.on('dataFromSensor5', (data) => {
    updateSensors('sensor5', data);
});
