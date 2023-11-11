// Conecte-se ao servidor WebSocket
const socket = io('http://localhost:3001'); // Substitua pelo endereço correto do servidor WebSocket

// Lidar com eventos do servidor
socket.on('dataFromSensor1', (data) => {
    // Processar os dados recebidos do Sensor 1
    const sensor1Value = data;
    document.getElementById('sensor1Value').textContent = `Sensor 1: ${sensor1Value}`;
});

socket.on('dataFromSensor2', (data) => {
    // Processar os dados recebidos do Sensor 2
    const sensor2Value = data;
    document.getElementById('sensor2Value').textContent = `Sensor 2: ${sensor2Value}`;
});

socket.on('dataFromSensor3', (data) => {
    // Processar os dados recebidos do Sensor 3
    const sensor3Value = data;
    document.getElementById('sensor3Value').textContent = `Sensor 3: ${sensor3Value}`;
});

socket.on('dataFromSensor4', (data) => {
    // Processar os dados recebidos do Sensor 4
    const sensor4Value = data;
    document.getElementById('sensor4Value').textContent = `Sensor 4: ${sensor4Value}`;
});

socket.on('dataFromSensor5', (data) => {
    // Processar os dados recebidos do Sensor 5
    const sensor5Value = data;
    document.getElementById('sensor5Value').textContent = `Sensor 5: ${sensor5Value}`;
});
