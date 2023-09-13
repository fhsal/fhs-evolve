import axios from "axios";

export default {
  getQuote: function() {
    return axios.get("https://type.fit/api/quotes");
  },

<<<<<<< HEAD
    // Saves a week of Health information to the database
    saveHealth: function(healthData) {
      return axios.post("/api/health", healthData);
    }

  
};
      


 
=======
  
};
>>>>>>> 092151e234136968295eddbe8a25009b306d906b
