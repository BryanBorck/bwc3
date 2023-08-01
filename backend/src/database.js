import pg from 'pg';

const { Pool } = pg;
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port_database = process.env.DB_PORT;
const database = process.env.DB_DATABASE;

const connection = new Pool({
    user,
    password,
    host,
    port_database,
    database
});

export default connection;