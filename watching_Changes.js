const fs = require('fs');

// Watch for changes in a file
fs.watchFile('newfile.txt', (curr, prev) => {
  console.log('File changed.');
  console.log('Current modified time:', curr.mtime);
  console.log('Previous modified time:', prev.mtime);
});
