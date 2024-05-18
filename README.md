# Sistema de Gerenciamento de Tenants

Bem-vindo ao Sistema de Gerenciamento de Tenants! Este sistema foi desenvolvido para permitir a gestão de múltiplos tenants em uma única aplicação. Abaixo, você encontrará uma explicação sobre como usar este sistema, incluindo instruções sobre como configurá-lo e como realizar operações básicas.

## Como Usar

### Configuração

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm instalados em seu ambiente de desenvolvimento.
3. Instale as dependências do projeto executando o seguinte comando no terminal:

    ```
    npm install
    ```

4. Certifique-se de ter o MySQL instalado em sua máquina local. Você pode baixar e instalar o MySQL [aqui](https://www.mysql.com/).
5. Configure as informações de conexão com o MySQL no arquivo `config/db.js`.

### Inicialização do Servidor

1. Após configurar o banco de dados, inicie o servidor executando o seguinte comando no terminal:

    ```
    node app.js
    ```

2. O servidor será iniciado e estará pronto para aceitar solicitações.

### Operações CRUD

O sistema oferece as seguintes operações CRUD (Create, Read, Update, Delete) para gerenciar tenants:

- **Criar Tenant**: Crie um novo tenant fornecendo um nome.
- **Listar Todos os Tenants**: Obtenha uma lista de todos os tenants registrados.
- **Obter Tenant por ID**: Obtenha detalhes de um tenant específico fornecendo seu ID.
- **Atualizar Tenant**: Atualize o nome de um tenant existente fornecendo seu ID.
- **Excluir Tenant**: Exclua um tenant existente fornecendo seu ID.

Para realizar estas operações, você pode utilizar ferramentas como o Postman para enviar requisições HTTP para os endpoints correspondentes.

### Endpoints

Aqui estão os endpoints disponíveis no sistema:

- **POST /api/tenants**: Cria um novo tenant.
- **GET /api/tenants**: Retorna todos os tenants.
- **GET /api/tenants/:id**: Retorna um tenant específico pelo ID.
- **PUT /api/tenants/:id**: Atualiza um tenant específico pelo ID.
- **DELETE /api/tenants/:id**: Exclui um tenant específico pelo ID.

Certifique-se de incluir os cabeçalhos corretos nas requisições, como `Content-Type: application/json`.