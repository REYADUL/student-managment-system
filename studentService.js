//import database
// const{getDb,getCollection}=require("./mongo");
const{ObjectId}=require("mongodb");
const{Student} = require("./student.model");


//CURD method 

const insert= async(requestBody)=>{
    
    const result = await Student.insertOne(requestBody);
    console.log(result);
    return result
}

const search= async(searchObject)=>{
    
 //customize query for like Search
//....
    const result = await Student.find(searchObject).toArray();
    console.log(result);
    return result
}

const getById = async(searchId)=>{
    // const db = await getDb();
    // const collection= db.collection('students');

    const result = await getCollection().findOne({_id:new ObjectId(searchId)});//ind database data type is string in objectId
    console.log(result);
    return result;

}

const update = async(documentId,body)=>{
   
    const result = await getCollection().updateOne(
        {_id:new ObjectId(documentId)},
        { $set: { "name" : "Shahed" } }
     );
    console.log(result);
    return result;
}

const deleteById=async(deleteId)=>{
   const result = await getCollection().deleteOne( { _id :new ObjectId(deleteId) });
   console.log(result);
   return result;

}
//Export module

module.exports = {
    insert,
    search,
    getById,
    update,
    deleteById
    
}