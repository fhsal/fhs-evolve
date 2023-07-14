import axios from "axios";


const apiKey = process.env.REACT_APP_API_KEY
console.log(apiKey)

export default {
    getQuote: function() {
        return axios.get("https://zenquotes.io?api=random");
        }}
