const mongoose = require('mongoose')
const {DB_USER, DB_PW, DB_CLUSTER} = process.env
const mongoPath = `mongodb+srv://${DB_USER}:${DB_PW}@${DB_CLUSTER}`

module.exports = async () => {
  console.log('test mongo path', mongoPath)
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return mongoose
}