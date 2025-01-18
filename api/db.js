import mysql from "mysql";

// Create the database connection
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kahoo_z2003BINTE",
  database: "blog",
  debug: true, // Enables debugging for MySQL queries
});

// Connect to the database and handle errors
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    return;
  }
  console.log("Connected to the database successfully!");
});
