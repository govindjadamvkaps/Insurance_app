import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDb from './src/db/DbConfig.js'
import UserRouter from './src/routers/InsuranceRouter.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',UserRouter)



app.listen(process.env.PORT, ()=>{
    connectDb()
    console.log(`server is listning on port ${process.env.PORT}`)
})

