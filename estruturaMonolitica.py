usuarios = []

def adicionar_usuario(nome, idade):
    usuario = {'nome': nome, 'idade': idade}
    usuarios.append(usuario)
    print(f"Usuário {nome} adicionado com sucesso!")

def listar_usuarios():
    for usuario in usuarios:
        print(f"Nome: {usuario['nome']}, Idade: {usuario['idade']}")

def buscar_usuario(nome):
    for usuario in usuarios:
        if usuario['nome'] == nome:
            print(f"Usuário encontrado: Nome: {usuario['nome']}, Idade: {usuario['idade']}")
            return
    print("Usuário não encontrado.")

def main():
    while True:
        print("\nSistema de Cadastro de Usuários")
        print("1. Adicionar usuário")
        print("2. Listar usuários")
        print("3. Buscar usuário pelo nome")
        print("4. Sair")
        opcao = input("Escolha uma opção: ")

        if opcao == '1':
            nome = input("Nome do usuário: ")
            idade = input("Idade do usuário: ")
            adicionar_usuario(nome, idade)
        elif opcao == '2':
            listar_usuarios()
        elif opcao == '3':
            nome = input("Nome do usuário a ser buscado: ")
            buscar_usuario(nome)
        elif opcao == '4':
            print("Saindo do programa.")
            break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    main()
