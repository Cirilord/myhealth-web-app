# MyHealth

Sistema de gestão de planos de cuidados em saúde, permitindo o acompanhamento de pacientes com diferentes tipos de planos ativos, como linhas de cuidado (contínuos) e programas de saúde (pontuais).

## 📋 Visão Geral

O **MyHealth** tem como objetivo oferecer uma solução para equipes de saúde gerenciarem de forma eficiente planos de cuidado e programas de saúde, garantindo controle sobre sobreposição de planos, conflitos de agenda e registro de histórico de alterações.

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (Fullstack React)
- **Interface:** [Chakra UI](https://chakra-ui.com/)
- **Banco de Dados:** SQLite (desenvolvimento) e PostgreSQL (produção)
- **ORM:** [Prisma ORM](https://www.prisma.io/)
- **Linguagem:** TypeScript
- **API:** REST + Server Actions (Next.js)
- **Testes:** Jest + Testing Library (opcional)
- **Versionamento:** Git + GitHub

## 🏗️ Funcionalidades Principais

- Gestão de Pacientes (CRUD)
- Gestão de Planos de Cuidados (CRUD + regras de negócio)
- Gestão de Eventos dos Planos (CRUD)
- Validação de regras de negócio:
  - Apenas 1 linha de cuidado ativa por paciente
  - Até 3 programas ativos simultaneamente
  - Substituição de linhas de cuidado
  - Encerramento automático de programas após conclusão
- Detecção de conflitos e sobreposição de eventos
- Histórico de alterações e rastreabilidade
- Notificações para responsáveis em caso de conflitos

## 📦 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Cirilord/myhealth-web-app.git
cd myhealth-web-app
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Crie o .env com sqlite

```bash
DATABASE_URL="file:./dev.db"
```

### 4. Inicie o banco sqlite

```bash
npx prisma db push
```

### 5. Inicie o projeto

```bash
yarn dev
```
