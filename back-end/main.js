const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();

// Permitir todas as origens (apenas para fins de desenvolvimento)
app.use(cors());

const port = new SerialPort({ path: 'COM3', baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  },
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let sensorData = {
  sensor1: null,
  sensor2: null,
  sensor3: null,
  sensor4: null,
  sensor5: null,
};

io.on('connection', (socket) => {
  console.log('Cliente conectado via WebSocket');

  parser.on('data', (data) => {
    // Processar os dados recebidos aqui e atualizar sensorData
    sensorData = parseSensorData(data, sensorData);

    // Enviar os dados para o cliente
    socket.emit('dataFromSensor1', sensorData.sensor1);
    socket.emit('dataFromSensor2', sensorData.sensor2);
    socket.emit('dataFromSensor3', sensorData.sensor3);
    socket.emit('dataFromSensor4', sensorData.sensor4);
    socket.emit('dataFromSensor5', sensorData.sensor5);

    // Imprimir os dados tratados no console do servidor
    console.log('Dados tratados recebidos:', sensorData);
  });
});

function parseSensorData(data, sensorData) {
  // Dividir os dados em pares chave-valor
  const sensorDataPairs = data.split('\n');

  // Iterar sobre os pares e atualizar o objeto sensorData
  sensorDataPairs.forEach((pair) => {
    const [key, value] = pair.trim().split(':');
    const lowercaseKey = key.toLowerCase();

    if (lowercaseKey === 'sensor1') {
      sensorData.sensor1 = parseInt(value, 10);
    } else if (lowercaseKey === 'sensor2') {
      sensorData.sensor2 = parseInt(value, 10);
    } else if (lowercaseKey === 'sensor3') {
      sensorData.sensor3 = parseInt(value, 10);
    } else if (lowercaseKey === 'sensor4') {
      sensorData.sensor4 = parseInt(value, 10);
    } else if (lowercaseKey === 'sensor5') {
      sensorData.sensor5 = parseInt(value, 10);
    }
  });

  return sensorData;
}

httpServer.listen(3001, '0.0.0.0', () => {
  console.log('Servidor WebSocket rodando em http://localhost:3001');
});
