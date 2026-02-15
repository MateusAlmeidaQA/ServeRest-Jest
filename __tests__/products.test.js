const { server } = require('../utils/request');
const { getAdminToken } = require("../utils/login_utils");
const { fakerPT_BR } = require("@faker-js/faker");
const faker = fakerPT_BR;

describe("Produtos - Fluxos de sucesso e Erro", () => {
  let token;

  // Pegar o token uma vez para todos os testes
  beforeAll(async () => {
    token = await getAdminToken();
  });

  test("Deve cadastrar um produto com sucesso", async () => {
    expect(token).toBeDefined();

    const response = await server
      .post("/produtos")
      .set("Authorization", token)
      .send({
        nome: `Teclado Gamer ${faker.commerce.productName()}`,
        preco: 470,
        descricao: "RGB com switches mecânicos",
        quantidade: 50,
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Cadastro realizado com sucesso");
  });

  test("Não deve permitir cadastrar produto sem token", async () => {
    const response = await server
      .post("/produtos")
      .send({
        nome: `Teclado Gamer ${faker.commerce.productName()} ${faker.number.int()}`,
        preco: 470,
        descricao: "RGB com switches mecânicos",
        quantidade: 50,
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe(
      "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais",
    );
  });
});
