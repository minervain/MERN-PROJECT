const mongoose=require('mongoose')

const database=()=>{
mongoose.connect(process.env.MONGO,
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('mongoose connected')
}).catch((err)=>{
    console.log(err)
})

}
 module.exports=database;