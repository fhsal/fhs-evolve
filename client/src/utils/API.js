import axios from "axios";


const apiKey = process.env.REACT_APP_API_KEY


      export default {
        getQuote: function() {
          axios("https://zenquotes.io?api=random", {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json,
                mode: 'no-cors',
              }})
        }}
