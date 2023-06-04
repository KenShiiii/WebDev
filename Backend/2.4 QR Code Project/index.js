/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

var url;

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter url you want to convert to QR code:",
    },
  ])
  .then((answer) => {
    url = answer.url;
    generateQR(url);
    generateTxt(url);
    console.log(answer.url);
  })
  .catch((err) => {
    console.error(err);
  });

/**
 *  Generate QR code from url */
function generateQR(url) {
  var qr_png = qr.image(url);
  qr_png.pipe(fs.createWriteStream("qr-code.png"));
}

/**
 * Generate TXT file from url */
function generateTxt(url) {
  fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
  });
}
