class SimpleCrypto {
  constructor(string = "") {
    this.string = string;
    this.modLength = 127;
  }
  encrypt(shiftAmount = 1) {
    let encrypted = "";
    for (let i = 0; i < this.string.length; i++) {
      let ascii = this.string.charCodeAt(i);
      encrypted += String.fromCharCode(
        (ascii + shiftAmount + this.modLength) % this.modLength
      );
    }
    return encrypted;
  }
  decrypt(shiftAmount = -1) {
    return this.encrypt(Math.abs(shiftAmount) * -1);
  }
  encryptWithPassword(password, multiplier = 1) {
    let encrypted = "";
    for (let i = 0; i < this.string.length; i++) {
      let passwordVsCharIndex = i % password.length;
      let inputAscii = this.string.charCodeAt(i);
      let passwordAscii = password.charCodeAt(passwordVsCharIndex);
      encrypted += String.fromCharCode(
        (inputAscii +
          multiplier * (passwordAscii + passwordVsCharIndex + i) +
          this.modLength) %
          this.modLength
      );
    }
    return encrypted;
  }
  decryptWithPassWord(password, multiplier = -1) {
    return this.encryptWithPassword(password, Math.abs(multiplier)*-1);
  }
}
export default SimpleCrypto;
