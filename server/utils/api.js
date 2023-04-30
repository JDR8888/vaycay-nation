// bring in axios for making api calls
const axios = require('axios');
// grab our api key from dotenv
const apiKey = process.env.REACT_APP_API_KEY;

//  set up function getParkByState (take param for state, and reference apiKey )
async function getParksByState(state) {
  try {
    const response = await axios.get(
      `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${apiKey}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getParksByName(name) {
  try {
    const response = await axios.get(
      `https://developer.nps.gov/api/v1/parks?q=${name}&api_key=${apiKey}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// example of calling function:
// fetchParks('MN', apiKey);

module.exports = { getParksByState, getParksByName };
