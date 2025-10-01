const express = require ('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.set('views engine','ejs')

app.get('/',(req,res)=>{
    res.render('home.ejs')


})

app.post('/saveForm',(req,res)=>{
    console.log(req.body)
    const obj = {data:req.body}
    res.render('about.ejs',obj)
})

const PORT =3000
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})