// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID


const {MongoClient,ObjectID} = require('mongodb')


const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log(error)
    }
    const db = client.db(databaseName)
})

