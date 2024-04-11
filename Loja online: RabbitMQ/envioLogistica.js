const amqp = require('amqplib');

async function main() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'pedidos';

  await channel.assertQueue(queue, { durable: false });
  console.log("Aguardando pedidos para envio...");

  channel.consume(queue, (message) => {
    const pedido = JSON.parse(message.content.toString());
    console.log("Pedido para envio:", pedido);

    // Simulação de envio para sistema de envio/logística
    console.log("Pedido enviado para sistema de envio/logística.");

  }, { noAck: true });
}

main().catch(console.error);
