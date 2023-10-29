const fs = require('fs');

// Create a directory
fs.mkdir('newDirectory', (err) => {
  if (err) throw err;
  console.log('Directory created.');

  // Delete a directory
  fs.rmdir('directoryToDelete', (err) => {
    if (err) throw err;
    console.log('Directory deleted.');

    // Rename a directory
    fs.rename('oldDirectoryName', 'newDirectoryName', (err) => {
      if (err) throw err;
      console.log('Directory renamed.');
    });
  });
});
