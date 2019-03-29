const express = require('express')
const Sequelize = require('sequelize')
const path = require('path')

// DB stuff

const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false
})

const User = db.define('user', {
  name: Sequelize.TEXT,
  bio: Sequelize.TEXT,
  rank: Sequelize.INTEGER
})

const syncAndSeed = () => {
  return db
    .sync({ force: true })
    .then(() => {
      return Promise.all([
        User.create({ name: 'larry', bio: 'I like larry', rank: 1 }),
        User.create({ name: 'moe', bio: 'I like mysefl', rank: 2 }),
        User.create({ name: 'curly', bio: "I don't like larry", rank: 3 })
      ])
    })
    .catch(e => console.log(`Failed to sync in syncAndSeed. Here's why:\n${e}`))
}

// Server/Routing
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))

app.get('/api/users', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(e => console.log(`Failed to get all users. Heres why:\n${e}`))
})

app.get('/api/users/:id', (req, res, next) => {
  User.findByPk(req.params.id)
    .then(user => res.send(user))
    .catch(e => console.log(`Failed to get the user. Heres why:\n${e}`))
})

app.delete('/api/users/:id', (req, res, next) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch(e => console.log(`Failed to delete the user. Heres why:\n${e}`))
})

// Starting server
const port = process.env.PORT || 3000
syncAndSeed().then(() => app.listen(port, () => console.log(`Listening on port ${port}...`)))
