const express = require("express");
const httpsRedirect = require('express-https-redirect');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// redirecting to https (production only):
app.use('/', httpsRedirect());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  (process.env.MONGODB_URI || "mongodb://localhost/evolve"),
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("MongoDB connection established");
    }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

