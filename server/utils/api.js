// bring in axios for making api calls
const axios = require('axios');
// grab our api key from dotenv
const apiKey = process.env.API_KEY;

//  set up function getParkByState (take param for state, and reference apiKey )
async function fetchParks(state, apiKey) {
  try {
    const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${apiKey}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// example of calling function:
// fetchParks('MN', apiKey);
