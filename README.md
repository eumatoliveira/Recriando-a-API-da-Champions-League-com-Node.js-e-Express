# 🏆 Champions League API

![Champions League](https://img.shields.io/badge/UEFA-Champions_League-blue?style=for-the-badge&logo=uefa)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Uma API REST profissional inspirada na Champions League, desenvolvida com Node.js e Express, utilizando padrões de arquitetura modernos e separação de responsabilidades em camadas.

---

## 📖 Sobre o Projeto

Este projeto foi construído para simular o backend de uma plataforma de gerenciamento de jogadores e clubes da UEFA Champions League. A arquitetura foi pensada para ser escalável, modular e de fácil manutenção, seguindo os princípios de camadas (Controllers, Services, Repositories).

### 🚀 Funcionalidades

- **Gerenciamento de Jogadores (CRUD)**:
  - Listar todos os jogadores da competição.
  - Buscar detalhes de um jogador específico por ID.
  - Cadastrar novos atletas.
  - Atualizar estatísticas e informações degradando o estado de forma controlada.
  - Remover jogadores do banco de dados.
- **Consulta de Clubes**:
  - Listagem de clubes participantes para integração de dados.
- **Logging e Monitoramento**:
  - Middleware de log integrado para registrar todas as requisições com timestamps.

---

## 🏗️ Arquitetura do Sistema

O projeto segue uma arquitetura de camadas para garantir o desacoplamento:

```text
src/
├── controllers/    # Camada de entrada (Request/Response)
├── services/       # Regras de negócio e lógica de orquestração
├── repositories/   # Abstração de acesso aos dados (Data Access)
├── models/         # Definições de entidades (Classes/Interfaces)
├── routes/         # Definição dos endpoints da API
├── utils/          # Helpers (HTTP Helpers e utilitários)
└── data/           # Persistência de dados (Arquivos JSON)
```

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução Javascript.
- **Express**: Framework web minimalista e flexível.
- **CORS**: Segurança para permitir acesso de diferentes origens.
- **ES Modules**: Utilização de `import/export` nativo do Node.js.
- **Filesystem (fs/promises)**: Persistência de dados assíncrona.

---

## 🚦 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/)

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/eumatoliveira/Recriando-a-API-da-Champions-League-com-Node.js-e-Express.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd Recriando-a-API-da-Champions-League-com-Node.js-e-Express
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Execução
Inicie o servidor em modo de desenvolvimento (com auto-reload):
```bash
npm run dev
```
O servidor estará disponível em: `http://localhost:3333`

---

## 🔗 Endpoints

### Jogadores
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/players` | Retorna todos os jogadores |
| `GET` | `/api/players/:id` | Retorna um jogador específico |
| `POST` | `/api/players` | Cria um novo jogador |
| `PATCH` | `/api/players/:id` | Atualiza dados de um jogador |
| `DELETE` | `/api/players/:id` | Remove um jogador |

### Clubes
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/clubs` | Retorna a lista de clubes |

---

## 🧠 Visão 2050: State Managed API
Este projeto não trata apenas de código, mas de **Estado**. A separação entre Repositories e Services permite que a API seja facilmente portada para infraestruturas de tempo real ou sistemas de persistência quântica no futuro, sem alterar o contrato de serviço com o cliente.

---

## 👨‍💻 Desenvolvedor
Desenvolvido por **[Mateus Oliveira](https://github.com/eumatoliveira)** 🚀
