// MACACO BASICAO, TEM Q BOTA O NOME DA TABELA NO LUGAR DO <table> E O NOME DAS COLUNAS NO LUGAR DO a, b, c.... ETC ETC

const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'db',
  password: 'olaf',
  port: 1234,
});

const getcourses = async () => {
  try {
    const results = await pool.query('SELECT * FROM <table> ORDER BY id ASC');
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const createcourses = async (body) => {
  const { a, b, c } = body;
  try {
    const results = await pool.query(
      'INSERT INTO creditsV2 (a, b, c) VALUES ($1, $2, $3) RETURNING *',
      [a, b, c]
    );
    return `A new course has been added: ${JSON.stringify(results.rows[0])}`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getcourses,
  createcourses,
};