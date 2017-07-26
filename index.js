const fs = require('fs');
const path = require('path');
const main = {
  readFile: function(){
    const data = fs.readFileSync(path.join(__dirname, 'dist', `style.css`));
    return data;
  },
  writeFile: function(target){
    const data = main.readFile();
    fs.writeFile(target, data);
  }
}
module.exports = main;
