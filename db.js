/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
    // connectionString: "postgresql:///biztime"
    user: 'postgres',
    host: 'localhost',
    database: 'biztime',
    password: 'postgres',
    port: 5432
});

client.connect();

module.exports = client;