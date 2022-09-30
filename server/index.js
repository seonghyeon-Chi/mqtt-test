const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

client.subscribe('test')

client.on('message', function (topic, message) {
  console.log(topic)
  console.log(message.toString())
  client.end()
})