// index.d.ts
declare module 'simple-encrypt-decrypt-cipher' {
    export default class SimpleCrypto {
        constructor(string?: string);
        encrypt(shiftAmount?: number): string;
        decrypt(shiftAmount?: number): string;
        encryptWithPassword(password: string, multiplier?: number): string;
        decryptWithPassWord(password: string, multiplier?: number): string;
    }
}