import express from 'express'
const PORT = process.env.PORT ?? 4321
const app = express()

app.use("/", express.static('dist', {redirect:false}))
app.get("*", (req,res,next)=>{
    res.sendFile(process.cwd() + '/dist/index.html')
})


app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`);
})