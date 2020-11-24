const fs = require("fs");
const { resolve } = require("path");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if there is an error, reject the Promise and send the error to the .CATCH method
      if (err) {
        reject(err);
        //return out of the function here to make sure the promise doesnt accidentally the resolve function as well
        return;
      }

      //if good resolve promise
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Style sheet copied successfully",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
