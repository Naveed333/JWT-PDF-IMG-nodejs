const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



// without Middleware: new request -> run route Handler

// with Middleware : new request -> do somthing -> run route Handler



//Express Middleware1
// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET request Disabled')
//     }else{
//         next()
//     }
// })


//Express Middleware2
// app.use((req,res,next)=>{
//     res.status(503).send('site is currently down. Check back soon')
// })




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})





// const bcryptjs = require('bcryptjs')
// const myFunction = async()=>{
//     const password = 'naveed'
//     const hashPassword = await bcryptjs.hash(password, 6)
//     console.log(password)
//     console.log(hashPassword)


//     const isMatch = await bcryptjs.compare('naveed32',hashPassword)
//     console.log(isMatch)
// }
// myFunction()


// const jwt = require('jsonwebtoken')
// const myFunction = async ()=>{
//     const token  = jwt.sign({_id:'abc123'},'thismynewcode')
//     console.log(token)

//     const data = jwt.verify(token,'thismynewcode')
//     console.log(data)
// }

// myFunction()