//import the mongo client
const {MongoClient} = require('mongodb');
const connectionString='';

const url = 'mongodb://localhost:27017';
// const dbName = 'mydatabase';

let _db = null;//let ->because it changeable

//create a connect 
const connect =async()=>{
    const client = new MongoClient (url,
    {
        useNewUrlParser : true
    });

console.log('connecting to mongodb');
await client.connect();
_db = client.db("school");
}

//create a getdb
const getDb = ()=>{
    // if(!_db){
    //     await connect();
    // }
    return _db;

};
const getCollection=()=>{
     return _db.collection("students");
}

//export them
module.exports={
    connect,
    getDb,
    getCollection
};