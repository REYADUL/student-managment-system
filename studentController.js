const{insert,search,getById, update,deleteById}=require('./studentService');

const setUpRoutes=(app)=>{

    console.log('setting up new student routes')

    app.get('/api/students/detail/:id',async(req,res)=>{
        console.log(`GET/api/students/detil/getById`,req.params);
        const result = await getById(req.params.id)
        res.send(`From Students GET API and ${result} ${req.params.id}`);
    
    })
    
    app.post('/api/students/search',async(req,res)=>{
        console.log(`POST/api/students/search `,req.body);
        const result=await search(req.body);
        res.send(result);
    })
    
    app.post('/api/students/create',async(req,res)=>{
        console.log(`POST/api/student/ceate `,req.body);
        const result=await insert(req.body)
        res.send(result);
    })
    
    
    app.put('/api/students/update/:id', async(req,res)=>{
        console.log(`PUT/api/students/update`,req.params.id);
        const updated=await update(req.params.id,req.body);
        res.send(updated);
    })
    
    
    app.delete('/api/students/delete/:id',async(req,res)=>{
        console.log(`DELETE/api/student/delete`,req.params.id);
        const result = await deleteById(req.params.id);
        res.send(`From Delete ApI ${result}`);
    })
    
    
};

module.exports= {setUpRoutes};