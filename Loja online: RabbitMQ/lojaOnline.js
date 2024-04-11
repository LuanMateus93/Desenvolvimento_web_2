const amqp = require('amqplib');

async function main() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'pedidos';

  await channel.assertQueue(queue, { durable: false });

  // Simulação de envio de pedido
  const pedido = { id: 1, produto: 'Camiseta', quantidade: 2 };
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(pedido)));
  console.log("Pedido enviado:", pedido);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

main().catch(console.error);
