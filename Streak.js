const fs=require('fs')
if(!fs.existsSync('./fold')){
fs.mkdir('./fold',(err)=>{
    if(err) throw err
    console.log("folder created")
})
}
else{
    console.log("folder already there")
}