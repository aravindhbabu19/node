const fs=require('fs')
if(!fs.existsSync('./New1'))
fs.mkdir('./New1',err=>{
    if(err) throw err
    console.log('folder created')
})

else{
    console.log('folder is already there')
}
