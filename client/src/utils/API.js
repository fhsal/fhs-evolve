import axios from "axios";


const apiKey = process.env.REACT_APP_API_KEY
console.log(apiKey)

export default {
  getQuote: () =>
  axios({
      'method':'GET',
  url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
  params: {
    token: 'ipworld.info'
  },

    
    // 'url':'https://quotable-quotes.p.rapidapi.com/randomQuotes',
      'headers': {
          'x-rapidapi-host':'quotable-quotes.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
      },
  })
}
