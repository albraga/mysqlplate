const mysql = require('mysql')

class Mdb {

	constructor(host = 'localhost', user = 'root', password = 'example') {
		this.connection = mysql.createConnection({
		host,
		user,
		password
		//database: 'DATAB'
		})
	}

	connect() {
		this.connection.connect()
	}

	dropDB(sql = 'DROP DATABASE IF EXISTS datab;') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(`${sql} ok`)
		})
	}

	createDB(sql = 'CREATE DATABASE datab;') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(`${sql} ok`)
		})
	}
	end() {
		this.connection.end()
	}

	useDB(sql = 'USE datab;') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(`${sql} ok`)
		})
	}
	end() {
		this.connection.end()
	}

	createTable(sql = 'CREATE TABLE tabelha (nome varchar(40));') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(`${sql} ok`)
		})
	}

	insert(sql = 'INSERT INTO tabelha(nome) VALUES("Cesinha");') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(`${sql} ok`)
		})
	}

	select(sql = 'SELECT * FROM tabelha;') {
		this.connection.query(sql, (err, results, fields) => {
			if(err) throw err
			console.log(`${sql} = ${results[0].nome}`)
		})
	}
	
	end() {
		this.connection.end()
	}

}

module.exports = Mdb