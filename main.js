const Mdb = require('./Mplate')

let mdb = new Mdb()

mdb.connect()

mdb.dropDB()

mdb.createDB()

mdb.useDB()

mdb.createTable()

mdb.insert()

mdb.select()

mdb.end()

