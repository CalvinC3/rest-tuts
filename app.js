const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config({ path: './.env' });

const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')


// Configs


// Connections

const connectToMongoDB = async () => {
  await mongo().then( async(mongoose) => {
    try{
      console.log('Connected to db')
      // const user = {
      //   email: 'test@gmail.com',
      //   username: 'Joe',
      //   password: '123456'
      // }
      // await new userSchema(user).save() 
    } catch (err) {
      console.error(err)
    } finally {
      mongoose.connection.close()
    }
  })
} 


// Build time setup function
const startApp = async () => {
  Promise.all([
    connectToMongoDB(),
  ]).then(val => {
    console.log('run test',val)
    app.listen(3080)
  })
}

// One kicker to start them all
startApp()



// Middlewares
// app.use('/posts', () => {
//   console.log('This is a middleware running')
// })

// Routes
app.get('/health-check', (req, res) => {
  const date = new Date(Date.now())
  res.send(`Server is running: ${date}`)
})

app.get('/', (req, res) => {
  res.send('We are on home')
})

app.get('/posts', (req, res) => {
  res.send('We are on posts')
})
