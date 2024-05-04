const { promises } = require('dns');
const fs=require('fs')
const path=require('path')
const fsPromises=require('fs').promises
const fileOps=async()=>{
  const data=await fsPromises.readFile(path.join(__dirname,'edits','Edit1.txt'),'utf8')
  console.log(data)
  await fsPromises.writeFile(path.join(__dirname,'edits','Edit1.txt'),"Thank you",'utf8')
  console.log('Write completed')
  await fsPromises.appendFile(path.join(__dirname,'edits','Edit2.txt'),'cggesj','utf8')
  console.log('Update completed')
  await fsPromises.rename(path.join(__dirname,'files','new1.txt'),(path.join(__dirname,'edits','New.txt')))
  console.log('Rename completed')
  await fsPromises.unlink(path.join(__dirname,'edits','Edit2.txt'))
  console.log("delete completed");
}
fileOps()
/*fs.readFile(path.join(__dirname,'edits','Edit.txt'),'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

fs.writeFile(path.join(__dirname,'edits','Edit.txt'),"Thank you",'utf8', (err)=> {
  if (err) throw err;
  console.log("Write completed");
}); 

fs.appendFile(path.join(__dirname,'edits','Edit1.txt'),'cggesj','utf8', (err)=> {
  if (err) throw err;
  console.log("Update completed");
}); 

fs.rename(path.join(__dirname,'edits','Edit.txt'),(path.join(__dirname,'edits','New.txt')), (err)=> {
  if (err) throw err;
  console.log("Rename completed");
}); 
*/
process.on('uncaughtException',err=>{
    console.error(`There was an uncaught error:${err}`)
    process.exit();
})