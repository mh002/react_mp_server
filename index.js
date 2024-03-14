//importing JSON server packages
const JSONserver=require('json-server')

//creating server using create() method from json-server
const MPserver=JSONserver.create()

//generating path/route to server resource
const router=JSONserver.router('db.json')

//initiating JSONserver middlewares
const middleware=JSONserver.defaults()

//Creating PORT number for server
const PORT=3000 | process.env.PORT

//implimenting middleware to server
MPserver.use(middleware)

//implimenting route to resource to server
MPserver.use(router)



//run command for server
MPserver.listen(PORT,()=>{
    console.log(`Server is Running at:${PORT}`)
})