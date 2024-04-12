Relatório sobre a Implementação de um Sistema de Mensagens usando RabbitMQ
Introdução:
O objetivo deste relatório é descrever a implementação de um sistema de mensagens assíncronas utilizando o RabbitMQ, um corretor de mensagens de código aberto amplamente utilizado em aplicações distribuídas. O sistema foi projetado para uma loja online, onde os pedidos dos clientes são processados e encaminhados para o sistema de envio/logística.

Descrição do Problema:

A loja online recebe pedidos de clientes que precisam ser processados e registrados no sistema da loja.
Após o processamento, os pedidos devem ser enviados para o sistema de envio/logística para agendar a entrega.
Implementação:

Definição das Filas:

Foram criadas duas filas no RabbitMQ: uma para receber pedidos da loja online e outra para enviar pedidos processados para o sistema de envio.
Produtores de Mensagens (lojaOnline.js):

Um programa foi escrito em Node.js para simular a loja online e enviar pedidos para a fila correspondente no RabbitMQ.
Consumidores de Mensagens:

Foram escritos dois programas em Node.js como consumidores de mensagens:
Um consumidor recebe os pedidos da fila da loja online, processa-os e os registra no banco de dados da loja (processamentoPedidos.js).
O outro consumidor recebe os pedidos processados da fila e os envia para o sistema de envio/logística (envioLogistica.js).
Integração com Banco de Dados e Sistema de Envio:

A integração dos consumidores com o banco de dados da loja e o sistema de envio/logística foi implementada usando a biblioteca 'mongodb' para acesso ao banco de dados MongoDB.
Testes e Avaliação:

Os testes foram realizados simulando o envio de pedidos através do produtor de mensagens.
Verificou-se se os pedidos foram corretamente processados e registrados no banco de dados da loja.
Verificou-se se os pedidos foram corretamente enviados para o sistema de envio/logística.
Conclusão:
A implementação bem-sucedida do sistema de mensagens usando RabbitMQ permitiu que os pedidos da loja online fossem processados e encaminhados para o sistema de envio/logística de forma assíncrona e eficiente. A utilização de filas e consumidores de mensagens proporcionou uma arquitetura distribuída escalável e robusta para lidar com o fluxo de pedidos em uma loja online.
