const { default: mongoose } = require("mongoose");
const { app } = require("./app");
const dotenv = require('dotenv')

dotenv.config()

PORT = process.env.PORT || 5000
DATABASE = process.env.DATABASE

mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE}`)
    .then(()=>console.log('connected success'))
    .catch((err)=>console.log('error', err.message))


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
