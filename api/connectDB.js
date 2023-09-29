import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  port: 3333,
  user: "root",
  password: process.env.DB_PASS,
  database: "social",
});

// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "YourPass",
//   // Note that we are intentionally not passing any database name (And yes it still works :))
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     return;
//   }
//   console.log("Connected to the database");

//   // Execute the SHOW DATABASES query
//   connection.query("SHOW DATABASES", (err, results) => {
//     if (err) {
//       console.error("Error retrieving databases:", err);
//       return;
//     }

//     // Extract the database names from the query results
//     const databases = results.map((result) => result.Database);

//     console.log("Available databases:", databases);
//   });

//   // Close the database connection when done
//   connection.end((err) => {
//     if (err) {
//       console.error("Error closing the database connection:", err);
//       return;
//     }
//     console.log("Database connection closed");
//   });
// });

// Now you already know from the print statement if the database in fact does exist or no.
// If not, just create new database with that name like following:

// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "YourPass",
//   // Note that we are intentionally not passing any database name (And yes it still works :))
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     return;
//   }
//   console.log("Connected to the database");

//   createDatabase("test_db"); // Avoid using hyphen in db names or you will need to change to underscore after facing error message when trying to run it
// });

// function createDatabase(databaseName) {
//   // Execute the CREATE DATABASE query
//   connection.query(
//     `CREATE DATABASE IF NOT EXISTS ${databaseName}`,
//     (err, results) => {
//       if (err) {
//         console.error("Error creating database:", err);
//         return;
//       }
//       console.log(`Database ${databaseName} created successfully`);
//     }
//   );
// }

// // Close the database connection when done
// connection.end((err) => {
//   if (err) {
//     console.error("Error closing the database connection:", err);
//     return;
//   }
//   console.log("Database connection closed");
// });
