const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'build', 'export');

function deleteDirectoryContents(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      const filePath = path.join(directory, file);
      fs.lstat(filePath, (err, stats) => {
        if (err) throw err;

        if (stats.isDirectory()) {
          deleteDirectoryContents(filePath);
          fs.rmdir(filePath, (err) => {
            if (err) throw err;
          });
        } else {
          fs.unlink(filePath, (err) => {
            if (err) throw err;
          });
        }
      });
    }
  });
}

deleteDirectoryContents(directory);
fs.rmdir(directory, (err) => {
  if (err) throw err;
  console.log('Directory removed successfully');
});
