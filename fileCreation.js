const fs=require('fs');
const path = "one.txt";
//File RENAME
fs.rename(path,'readfile.txt',()=>{
    console.log("Rename Successfully");
})
//File Updation
const path2="info.txt";
fs.appendFile(path2,"DATA WRITTEN SUCCESSFULLY",()=>{
    console.log("Data Written to File")
});
//Read file
fs.readFile(path2,'utf8',(err,data)=>{
    if (err) throw err;
    console.log('File contents:', data);
})
//delete file
fs.unlink(path2,(err)=>{
    if(err)console.log(err);
    console.log("DATA DELETED SUCCESSFULLY");
})
//CREATION
const filePath = 'created_file.txt'; 
const fileContent = 'This is the content of the new file.'; 

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log('File has been created successfully.');
  }
});
//copying file
fs.copyFile('newMovedfile.txt','destination file.txt',()=>{
    console.log("copied successfully");
})