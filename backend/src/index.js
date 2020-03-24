const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar / Listar informações no Back-End
 * POST: Cria informações no Back-End
 * PUT: Altera informações no Back-End
 * DELETE: Deleta informações no Back=End 
 */ 

 /**
  * Tipos de Parâmetros: 
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?"
  * geralmente servem para filtros, paginação, 
  * 
  * Route Params: Parâmetros utilizados para identificar recursos
  * 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
  * 
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * DRIVER do Banco de Dados:  SELECT * FROM users
    * ou outra estratégia
    * QUERY BUILDER: escreve as querys utilizando o próprio javascript
    * ex: table('users').select('*').where() 
    * assim as querys ficam compatíveis com qq banco SQL... muito interessante isso!
    * utilizaremos o KNEX.JS
    */



