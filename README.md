# 🚀 Automação de Testes de API - ServeRest (Jest + Supertest)
[![API Regression Tests (ServeRest)](https://github.com/MateusAlmeidaQA/ServeRest-Jest/actions/workflows/main.yml/badge.svg)](https://github.com/MateusAlmeidaQA/ServeRest-Jest/actions/workflows/main.yml)

Este projeto demonstra uma estrutura de automação de testes de API, utilizando o ecossistema JavaScript para validar os fluxos da plataforma **ServeRest**.

## 🎯 Objetivos do Projeto
- Implementar testes funcionais (CRUD) e de segurança (autenticação).
- Aplicar boas práticas de arquitetura (Page Objects/Request Helpers).
- Demonstrar o uso de dados dinâmicos para testes resilientes.

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Ambiente de execução.
- **Jest**: Framework de testes e asserções.
- **Supertest**: Biblioteca para requisições HTTP.
- **Faker.js**: Geração de massa de dados aleatória e válida.
- **Jest HTML Reporters**: Visualização amigável dos resultados.

## 📁 Estrutura do Projeto
```text
├── __tests__/      # Testes organizados por domínio (Auth, Produtos, etc.)
├── data/           # Fábrica de massa de dados (Faker)
├── utils/          # Configurações globais e helpers de requisição
├── reports/        # Relatórios gerados automaticamente (ignorado no git)
└── jest.config.js  # Configurações do motor de testes

🚀 Como Executar
Pré-requisitos
Node.js instalado (versão 18 ou superior recomendada).

Instalação
Clone o repositório

Instale as dependências:
npm install

Rodando os Testes
Execução padrão:
npm test

Execução com Relatório HTML:
npm run test:report
Após rodar, abra o arquivo ./reports/index.html no seu navegador.

📈 Diferenciais Implementados
[x] Base URL Centralizada: Facilidade para trocar de ambiente (Local/Prod).

[x] Massa de Dados Dinâmica: Uso de Faker para evitar conflitos de ID e E-mail.

[x] Hooks de Teste: Uso de beforeAll para reaproveitamento de tokens.

[x] Relatórios Visuais: Integração com jest-html-reporters.

Por: Mateus Almeida