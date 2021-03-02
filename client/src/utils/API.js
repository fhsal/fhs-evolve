import axios from "axios";

export default {
  getQuote: () =>
  axios({
      'method':'GET',
      'url':'https://quotable-quotes.p.rapidapi.com/randomQuotes',
      'headers': {
          'x-rapidapi-host':'quotable-quotes.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
      },
  })
}