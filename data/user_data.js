const { fakerPT_BR } = require("@faker-js/faker");
const faker = fakerPT_BR;

const generateUserData = () => {
  return {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true",
  };
};

module.exports = { generateUserData };
