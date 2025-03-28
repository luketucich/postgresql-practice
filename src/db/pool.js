const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.PG_URL,
});

pool
  .query("SELECT current_database();")
  .then((res) => console.log("Connected to DB:", res.rows[0].current_database))
  .catch((err) => console.error("DB Connection Error:", err));

module.exports = pool;
