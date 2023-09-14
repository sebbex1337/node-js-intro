import mysql from "mysql2";

export const connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	database: "users_db",
	password: "Sebastianx2240",
	multipleStatements: true,
});
