# Aplicativo Web de Academia para Progressão de Carga

## Descrição
Repositório destinado a um protótipo de um aplicativo web de academia para progressão de carga, onde o usuário poderá inserir seu plano de treinamento completo, incluindo divisão, exercícios, séries, repetições, carga e tempo de descanso.

## Tecnologias Utilizadas
- **Frontend:** ReactJS
- **Backend:** NodeJS com Fastify
- **Banco de Dados:** PostgreSQL

## Funcionalidades
### Requisitos Funcionais
1. **Cadastro de Usuário**
   - O usuário deve poder criar uma conta com nome, email e senha.
   - O usuário deve poder fazer login e logout.

2. **Gerenciamento de Treinamento**
   - O usuário deve poder criar, editar e deletar planos de treinamento.
   - O usuário deve poder adicionar, editar e remover exercícios de seu plano.
   - Cada exercício deve permitir a especificação de:
     - Número de séries
     - Número de repetições por série
     - Carga utilizada em cada série
     - Tempo de descanso entre séries

3. **Histórico de Treinamento**
   - O usuário deve poder visualizar um histórico de seus treinos anteriores.
   - O usuário deve poder ver a progressão de carga ao longo do tempo.

4. **Dashboard**
   - O usuário deve ter acesso a um dashboard com resumos e estatísticas de seu treinamento.
   - O dashboard deve mostrar gráficos de progresso, incluindo aumento de carga e frequência de treinos.

### Requisitos Não Funcionais
1. **Desempenho**
   - O sistema deve responder às requisições em no máximo 2 segundos.
   - O banco de dados deve ser capaz de suportar um grande número de usuários e dados de treino sem degradação de desempenho.

2. **Segurança**
   - As senhas dos usuários devem ser armazenadas de forma segura utilizando hashing.
   - O sistema deve proteger contra ataques comuns, como SQL Injection e Cross-Site Scripting (XSS).

3. **Escalabilidade**
   - O sistema deve ser capaz de escalar horizontalmente para suportar um aumento no número de usuários.
   - A arquitetura deve permitir a adição de novos serviços e funcionalidades sem grandes reestruturações.

4. **Usabilidade**
   - A interface do usuário deve ser intuitiva e fácil de usar.
   - O design deve ser responsivo, adaptando-se bem a diferentes tamanhos de tela.

5. **Manutenibilidade**
   - O código deve ser bem documentado para facilitar a manutenção e futuras expansões.
   - Devem ser seguidas boas práticas de desenvolvimento, como SOLID e DRY.

## Estrutura do Projeto
- **Frontend**
  - Diretório: `/frontend`
  - Framework: ReactJS
  - Principais bibliotecas: React Router, Redux

- **Backend**
  - Diretório: `/backend`
  - Framework: NodeJS com Fastify
  - Principais bibliotecas: fastify-cors, fastify-postgres

- **Banco de Dados**
  - Diretório: `/database`
  - Banco de Dados: PostgreSQL
  - Ferramentas: Sequelize (ou outra ORM, se preferir)