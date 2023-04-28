// bring in axios for making api calls
const axios = require('axios');
// grab our api key from dotenv
const apiKey = process.env.API_KEY;

//  set up function getParkByState (take param for state, and reference apiKey )