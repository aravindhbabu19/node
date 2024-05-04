const fs=require('fs')
const path=require('path')
const fsPromises=require('fs').promises

const fileOps=async()=>{
  try{
    const data=await fsPromises.readFile(path.join(__dirname,'files','File.txt'),'utf8')
    console.log(data)
    await fsPromises.writeFile(path.join(__dirname,'files','Files.txt'),"hello")
    console.log("write completed");
    await fsPromises.appendFile(path.join(__dirname,'files','news.txt'),"\n\nthank you")
    console.log("update completed");
    await fsPromises.rename(path.join(__dirname,'files','news.txt'),path.join(__dirname,'files','new1.txt'))
    console.log("rename completed");
    await fsPromises.unlink(path.join(__dirname,'files','Files.txt'))
    console.log("delete completed");
  }
  catch(err){
    console.log(err)
  }
}
fileOps()


/*fs.readFile(path.join(__dirname,'files','File.txt'),'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(path.join(__dirname,'files','Files.txt'),"hello",(err)=>{
  if (err) throw err;
  console.log("write completed");
})

fs.appendFile(path.join(__dirname,'files','news.txt'),"\n\nthank you",(err)=>{
  if (err) throw err;
  console.log("update completed");
})

fs.rename(path.join(__dirname,'files','news.txt'),path.join(__dirname,'files','Thank.txt'),(err)=>{
  if (err) throw err;
  console.log("rename completed");
})*/

process.on("uncaughtException",err=>{
  console.error(`There was an uncaught error:${err}`)
  process.exit();
})