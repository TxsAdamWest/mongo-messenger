let Router = require('express').Router;
const apiRouter = Router()

let User = require('../db/schema.js').User
let Msg = require('../db/schema.js').Msg


apiRouter.get('/messages',function(request,response) {
  //first argument gives the criteria (WHICH msgs do i want),  and second being WHAT to do with that response data.
  Msg.find({},function(err,records) {
    response.json(records)
  })
})  

apiRouter.post('/messages',function(request,response) {
  let newRecord = new Msg(request.body)
  newRecord.save(function(err) {
    if (err) {
      console.log(err)
      response.send(err)
    }
    else {
      response.json(newRecord)
    }
  })
})

module.exports = apiRouter