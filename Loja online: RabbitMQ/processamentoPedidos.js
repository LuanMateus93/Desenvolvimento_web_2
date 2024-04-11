const amqp = require('amqplib');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'loja';

async function main() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'pedidos';

  await channel.assertQueue(queue, { durable: false });
  console.log("Aguardando pedidos...");

  channel.consume(queue, async (message) => {
    const pedido = JSON.parse(message.content.toString());
    console.log("Pedido recebido:", pedido);

    // Simulação de integração com banco de dados
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('pedidos');
    await collection.insertOne(pedido);
    console.log("Pedido registrado no banco de dados:", pedido);

    setTimeout(() => {
      client.close();
    }, 500);
  }, { noAck: true });
}

main().catch(console.error);
