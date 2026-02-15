const { server } = require('../utils/request');
const { generateUserData } = require("../data/user_data");

describe("Fluxo de Autenticação - ServerRest", () => {
  let userData = generateUserData(); // Gera um usuário único para este bloco

  test("Deve cadastrar um novo usuário administrador com sucesso", async () => {
    const response = await server.post("/usuarios").send(userData);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Cadastro realizado com sucesso");
    expect(response.body).toHaveProperty("_id");
  });

  test("Deve realizar login com o usuário criado anteriormente", async () => {
    const response = await server.post("/login").send({
      email: userData.email,
      password: userData.password,
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Login realizado com sucesso");
    expect(response.body).toHaveProperty("authorization");

    const token = response.body.authorization;
    process.env.TOKEN = token;
  });
});
