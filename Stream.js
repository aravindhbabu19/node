const path=require('path')
const fs=require('fs')
const rs=fs.createReadStream(path.join(__dirname,'files','big.txt'),{encoding:'utf8'})
const ws=fs.createWriteStream(path.join(__dirname,'files','new1big.txt'))

/*rs.on('data',(datachunk)=>{
    ws.write(datachunk)
})*/
rs.pipe(ws)