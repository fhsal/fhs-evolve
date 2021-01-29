// import logo from './logo.svg';
// import './App.css';
import CryptoJS from "react-native-crypto-js";





function App() {

let originalText = 'my message'

let date = new Date().toJSON().substring(0, 10)

// Encrypt
let ciphertext = CryptoJS.AES.encrypt('my message', date).toString();

// Decrypt
let bytes  = CryptoJS.AES.decrypt(ciphertext, date);
let decodedText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'
console.log('date key: ' + date)

let oneMoreTime = 'U2FsdGVkX1+hjrH9AVBEwGDRgHNtNO6zpCc2Wai+DvA='.toString(CryptoJS.enc.Utf8);

console.log('one more time: '  + oneMoreTime)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Hashing example:
          {<br/>}{<br/>}
          Input text: {' ' + originalText}
          {<br/>}{<br/>}
          Hashed text: {' ' + ciphertext}
          {<br/>}{<br/>}
          Unhashed text:{' ' + decodedText  + ' returned !'}

        </p>



      </header>

      
    </div>
  );
}

export default App;