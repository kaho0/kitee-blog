import mysql from "mysql";
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kahoo_z2003BINTE",
  database: "blog",
});
