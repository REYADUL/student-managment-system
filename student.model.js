const { getDb}=require('./mongo');




const getCollection = ()=>{
    console.log(`creating student collection by schema
    `);

    const db= getDb();

    // const validator = db.collection.validate({})

    
    const collection=db.collection('students',{
        validator:{
            $jsonSchema:{
                bsonType:"object",
                required:["name","phone","age","city"],
                properties:{
                    name:{
                        bsonType:"string",
                        description:"must be a string and is required"
                    },
                    phone:{
                        bsonType:"string",
                        description:"must be a string and is required"
                    },
                    age:{
                        bsonType:"int",
                        minimum:0,
                        maximum:200,
                        description:"must be integer in [0,200] and is required"
                    },
                    city:{
                        enum:[
                            "Dhaka",
                            "Chittagong",
                            "Rajshahi",
                            "Khulna",
                            "Sylhet",
                            "jessore"
                        ],
                        description:"can only be one of the enum values and is required"
                            
                    },
                }
            }
        }
    })
    return collection;
}

module.exports={
    Student:getCollection()

}