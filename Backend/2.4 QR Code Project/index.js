/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";

var url = "";

inquirer
  .prompt(["Enter url you want to convert to QR code: "])
  .then((answer) => {
    url = answer;
    console.log(url);
  })
  .catch((err) => {
    console.error(err);
  });
