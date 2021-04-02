const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')
const path = require('path')
const dbPath = "app/db/database.splite3"

// 静的ファイルのルートディレクトリを設定
app.use(express.static(path.join(__dirname, 'public')))

// Get all users
app.get('/api/v1/users', (req,res) => {
  //connect database
  const db = new sqlite3.Database(dbPath)

  db.all('SELECT * FROM users', (err, rows) => {
    res.json(rows)
  })

  db.close()
})


// Get a user
app.get('/api/v1/users/:id', (req,res) => {
  //connect database
  const db = new sqlite3.Database(dbPath)

  // idを取得
  const id = req.params.id

  db.get(`SELECT * FROM users WHERE id = ${id}`, (err, row) => {
    res.json(row)
  })

  db.close()
})

// Search users matching keyword
app.get('/api/v1/search', (req,res) => {
  //connect database
  const db = new sqlite3.Database(dbPath)

  // 検索valueを取得
  const keyword = req.query.q

  db.all(`SELECT * FROM users WHERE name LIKE "%${keyword}%"`, (err, rows) => {
    res.json(rows)
  })
  db.close()
})

const port = process.env.PORT || 8000
app.listen(port)
console.log("LIsten on port:" + port )