import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
  res.json({ message: 'Hello World!' })
})

// 404
app.get('*', (req, res) => res.sendStatus(404))

app.listen(port, () => console.log(`App running on port ${port}`))
