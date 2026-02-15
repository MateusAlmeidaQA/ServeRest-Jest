const { server } = require('../utils/request');
const { generateUserData } = require("../data/user_data");


const getAdminToken = async () => {
  const user = generateUserData();

  //Cadastrando usuário
  await server.post("/usuarios").send(user);

  //Fazendo login
  const resLogin = await server
    .post("/login")
    .send({ email: user.email, password: user.password });

  return resLogin.body.authorization;
};

module.exports = { getAdminToken };
