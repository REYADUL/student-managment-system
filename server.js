const app = require('./app');
const {connect} = require('./mongo');

const PORT = 4000;

const setUp=()=>{
    const{setUpRoutes}=require("./studentController");
    setUpRoutes(app)
}

app.listen(PORT,async()=>{
    console.log(`listening on port ${PORT}`);
    await connect();
    setUp();

    app.use('/',(req,res)=>{
        console.log(`request received at ${new Date()}`);
        console.log('req form user',req.body);
        //console.dir(res);
        res.send(`request received at ${new Date()}`);
    })

    console.log('application up and running');
});


//this server ensure server is up and running 
//and build up connection and ensure it by connect() method