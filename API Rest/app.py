from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from flasgger import Swagger

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'seu_segredo'  # Chave secreta para assinar o token JWT
jwt = JWTManager(app)
swagger = Swagger(app)

# Simulação de um banco de dados de usuários
users = {
    'usuario_exemplo': 'senha_exemplo'
}

# Endpoint para registro de usuário
@app.route('/register', methods=['POST'])
def register():
    """
    Endpoint para registro de usuário.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          id: User
          required:
            - username
            - password
          properties:
            username:
              type: string
              description: Nome de usuário
            password:
              type: string
              description: Senha
    responses:
      201:
        description: Usuário registrado com sucesso
    """
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username in users:
        return jsonify({"msg": "Nome de usuário já existe"}), 400
    users[username] = password
    return jsonify({"msg": "Usuário registrado com sucesso"}), 201

# Endpoint para login de usuário
@app.route('/login', methods=['POST'])
def login():
    """
    Endpoint para login de usuário.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          id: UserLogin
          required:
            - username
            - password
          properties:
            username:
              type: string
              description: Nome de usuário
            password:
              type: string
              description: Senha
    responses:
      200:
        description: Token JWT gerado com sucesso
    """
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username not in users or users[username] != password:
        return jsonify({"msg": "Credenciais inválidas"}), 401
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token), 200

# Endpoint para logout de usuário
@app.route('/logout', methods=['POST'])
def logout():
    """
    Endpoint para logout de usuário.
    ---
    responses:
      200:
        description: Logout realizado com sucesso
    """
    # Remover cookies JWT para efetuar logout
    resp = jsonify({"msg": "Logout realizado com sucesso"})
    resp.delete_cookie('access_token_cookie')
    return resp, 200

# Endpoint para renovação do token JWT
@app.route('/refresh_token', methods=['POST'])
@jwt_required()
def refresh_token():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)
    return jsonify(access_token=access_token), 200

# Endpoint protegido que requer autenticação JWT
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    """
    Endpoint protegido que requer autenticação JWT.
    ---
    security:
      - JWT: []
    responses:
      200:
        description: Retorna o usuário autenticado
    """
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

if __name__ == '__main__':
    app.run(debug=True)
