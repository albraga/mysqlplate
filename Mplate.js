const mysql = require('mysql')

class Mdb {

	constructor() {
		this.connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'example'
		//database: 'DATAB'
		})
	}

	connect() {
		this.connection.connect()
	}

	dropDB(sql = 'DROP DATABASE DATAB;') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(sql + ' ok')
		})
	}
	end() {
		this.connection.end()
	}

	createDB(sql = 'CREATE DATABASE DATAB;') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(sql + ' ok')
		})
	}
	end() {
		this.connection.end()
	}

	useDB(sql = 'USE DATAB;') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(sql + ' ok')
		})
	}
	end() {
		this.connection.end()
	}

	createTable(sql = 'CREATE TABLE TABELHA (descricao varchar(40));') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(sql + ' ok')
		})
	}
	end() {
		this.connection.end()
	}

}

module.exports = Mdb