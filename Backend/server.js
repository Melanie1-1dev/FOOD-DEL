import express from "express"
import cors from "cors"


// app config
const app = express()
const port = 5176

//middleware

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.end("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})