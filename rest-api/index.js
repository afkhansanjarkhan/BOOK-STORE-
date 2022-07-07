const bodyParser = require('body-parser');
const express = require('express');
const { join } = require('path');
path  = require('path');
mongoose = require('mongoose')
cors = require('cors');
mongoDb = require('./databases/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db,{
    useNewUrlParser : true,
    useUnifiedTopology: true    
}).then(()=>{
    console.log("Database connected");    
},
error=>{
console.log("connection error"+error);    
})


const bookRoute = require('./node-backend/routes/book.routes');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());
app.use(express.static(path.join(__dirname,'dist/Bookstore')));

app.use('/api',bookRoute);
const port = process.env.port || 8000;

app.listen(port,()=>{
    console.log("Listening to Port "+port);
})


app.use((req,res,next)=>{
    next(createError(404));
});

app.get('/',(req,res)=>{
    res.send("Invalid Endpoint");
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/Bookstore/index.html'));
});

app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode){
        err.statusCode = 500;
    }
    res.status(err.statusCode).send(err.message);
})
