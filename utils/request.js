require('dotenv').config();
const request = require('supertest');

const server = request(process.env.URL_SERVEREST || 'https://serverest.dev');
module.exports = { server };