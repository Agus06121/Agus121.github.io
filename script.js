// // Fungsi untuk mengenkripsi teks dengan algoritma Caesar
// function encrypt(text, shift) {
//     let result = '';
  
//     for (let i = 0; i < text.length; i++) {
//       let char = text[i];
//       if (char.match(/[a-z]/i)) {
//         let code = text.charCodeAt(i);
  
//         // Periksa huruf besar atau kecil
//         if (char === char.toLowerCase()) {
//           char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
//         } else {
//           char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
//         }
//       }
//       result += char;
//     }
//     return result;
//   }
  
//   // Fungsi untuk mendekripsi teks dengan algoritma Caesar
//   function decrypt(text, shift) {
//     return encrypt(text, (26 - shift) % 26);
//   }
  
//   // Contoh penggunaan
//   let plaintext = "Ini adalah contoh teks untuk dienkripsi!";
//   let shiftAmount = 3;
//   let encryptedText = encrypt(plaintext, shiftAmount);
//   let decryptedText = decrypt(encryptedText, shiftAmount);
  
//   console.log("Teks asli:", plaintext);
//   console.log("Teks terenkripsi:", encryptedText);
//   console.log("Teks terdekripsi:", decryptedText);
  

function encrypt(text, shift) {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);

      if (char === char.toLowerCase()) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
    }
    result += char;
  }
  return result;
}

function decrypt(text, shift) {
  return encrypt(text, (26 - shift) % 26);
}

function encryptText() {
  let plaintext = document.getElementById("plaintext").value;
  let shiftAmount = parseInt(document.getElementById("shift").value);
  let encryptedText = encrypt(plaintext, shiftAmount);
  document.getElementById("encrypted").innerHTML = "Encrypted Text: " + encryptedText;
}

function decryptText() {
  let plaintext = document.getElementById("plaintext").value;
  let shiftAmount = parseInt(document.getElementById("shift").value);
  let decryptedText = decrypt(plaintext, shiftAmount);
  document.getElementById("decrypted").innerHTML = "Decrypted Text: " + decryptedText;
}