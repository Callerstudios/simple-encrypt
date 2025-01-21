# Simple Encrypt Decrypt Cipher

A simple and lightweight library for encrypting and decrypting data using character shifting and character mixing. Designed for basic data protection needs with easy-to-use methods for string encryption and decryption.

## Features

- **Character Shifting Encryption**: Encrypt strings by shifting character codes.
- **Password-based Encryption**: Enhanced security by mixing input with a password.
- **Simple API**: Easy-to-use methods for encrypting and decrypting.
- **TypeScript Support**: Includes type definitions for strong typing.

## Installation

Install the package via npm:

```bash
npm install simple-encrypt-decrypt-cipher
```

## Usage

### Importing the Library

#### JavaScript (ESM):
```javascript
import SimpleCrypto from 'simple-encrypt-decrypt-cipher';
```

#### TypeScript:
```typescript
import SimpleCrypto from 'simple-encrypt-decrypt-cipher';
```

### Basic Encryption and Decryption
```javascript
const crypto = new SimpleCrypto('Hello, World!');

// Encrypt with character shifting
const encrypted = crypto.encrypt(3); // Shift characters by 3
console.log(encrypted);

// Decrypt with the same shift value
const decrypted = crypto.decrypt(3);
console.log(decrypted); // Outputs: 'Hello, World!'
```

### Password-based Encryption
```javascript
const crypto = new SimpleCrypto('Sensitive Data');

// Encrypt with a password
const encrypted = crypto.encryptWithPassword('mySecretPassword');
console.log(encrypted);

// Decrypt with the same password
const decrypted = crypto.decryptWithPassWord('mySecretPassword');
console.log(decrypted); // Outputs: 'Sensitive Data'
```

## API Reference

### Class: `SimpleCrypto`

#### Constructor
```typescript
new SimpleCrypto(string?: string);
```
- **string**: The input string to encrypt or decrypt (default: empty string).

#### Methods

- **`encrypt(shiftAmount?: number): string`**
  - Encrypts the string using character shifting.
  - **shiftAmount**: Number of characters to shift (default: 1).

- **`decrypt(shiftAmount?: number): string`**
  - Decrypts the string using character shifting.
  - **shiftAmount**: Number of characters to shift (default: -1).

- **`encryptWithPassword(password: string, multiplier?: number): string`**
  - Encrypts the string using a password-based approach.
  - **password**: A string used as the encryption key.
  - **multiplier**: A number used to modify the password impact (default: 1).

- **`decryptWithPassWord(password: string, multiplier?: number): string`**
  - Decrypts the string encrypted with `encryptWithPassword`.
  - **password**: A string used as the encryption key.
  - **multiplier**: A number used to modify the password impact (default: -1).

## TypeScript Support

The package includes type definitions, enabling strong typing and IntelliSense in TypeScript projects.

```typescript
import SimpleCrypto from 'simple-encrypt-decrypt-cipher';

const crypto = new SimpleCrypto('TypeScript Example');
const encrypted = crypto.encrypt(5);
const decrypted = crypto.decrypt(5);
```

## Repository

Find the source code and contribute to the project:
[GitHub Repository](https://github.com/Callerstudios/simple-encrypt)

## Issues

If you encounter any issues or have feature requests, please report them here:
[GitHub Issues](https://github.com/Callerstudios/simple-encrypt/issues)

## License

This project is licensed under the ISC License. See the LICENSE file for details.

---

Developed by [Caller Studios](https://github.com/Callerstudios)
