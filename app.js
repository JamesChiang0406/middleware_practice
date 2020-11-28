// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const localTime = time.toLocaleTimeString()
  const reqUrl = req.url
  const reqMethod = req.method

  console.log(`${year}-${month}-${time.getDate()} ${localTime} | ${reqMethod} from ${reqUrl}`)

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
