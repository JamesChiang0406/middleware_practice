// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  const start_time = new Date()
  const year = start_time.getFullYear()
  const month = start_time.getMonth() + 1
  const localTime = start_time.toLocaleTimeString()
  const reqUrl = req.url
  const reqMethod = req.method

  res.on('finish', () => {
    const end_time = new Date()
    const duration = end_time - start_time

    console.log(`${year}-${month}-${start_time.getDate()} ${localTime} | ${reqMethod} from ${reqUrl} | total time: ${duration}ms`)
  })

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
